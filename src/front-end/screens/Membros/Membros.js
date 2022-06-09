import React, {useEffect, useState} from 'react';
import {
    Text, View, TouchableOpacity, Image, Modal, StatusBar, FlatList, 
    SafeAreaView, BackHandler, Alert
} from 'react-native';
import stylesMem        from './stylesMem';
import {useNavigation}  from '@react-navigation/native';
import {Topo}           from '../../components/index_comps';
import AsyncStorage     from '@react-native-async-storage/async-storage';
import banco            from '../../../back-end2/banco_local';
import confgBD          from '../../../../config/config.json';
import assets           from '../../../../assets/index_assets';
import SalveDate        from '../../../back-end2/SalveData';
import { RetornaImg }   from '../../functions/index';

export default function Membros({route}){
    const navigation = useNavigation();
    const [rend, setRender]     = useState(false);
    const [modal, setModal]     = useState(false);
    const [itemOP, setItemOP]   = useState(route.params.liga.list_users[0]);
    const [ped, setPedido]      = useState(route.params.liga.pedidoIsOn);
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction);
        return () => {BackHandler.removeEventListener("hardwareBackPress", backAction);}
    },[]);

    function backAction(){
        navigation.replace("MainL",{
            liga        :   route.params.liga,
            dest        :   route.params.dest,
            index_liga  :   route.params.index_liga,
        });
        return true;
    }

    function validar_pedido(item, index){
        console.log("Item valida pedido -> \n",item);
        Alert.alert("Pedido", ("Aceitar o pedido de " + item.user_do_pedido.nome), [
            { text: "Aceitar", onPress: () =>  setar_pedido(item, index, true)},
            { text: "Recusar", onPress: () =>  setar_pedido(item, index, false)},
            { text: "Cancel", onPress: () => null, style: "cancel" },
        ]);
        return true;
    }

    async function setar_pedido(item, index, bool){
        // aceitar o pedido, é setar o pedido como aceite -> true e retornar o objeto userL para inserir na liga
        let reqs = await fetch(confgBD.urlRootNode + "seta_pedido",{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                pedido  : item,
                bool    : bool,
            })
        });
        let resp = await reqs.json();
        console.log("Resposta aceita pedido -> \n",resp);
        if(resp.status){
            if(bool){
                Alert.alert("Aceito", resp.msg);
                route.params.liga.list_users.push(resp.userL);
                route.params.liga.list_usersG.push(resp.userG);
                route.params.liga.pedidos.splice(index, 1);
                setRender(!rend);
                SalveDate(banco);
            } else {
                Alert.alert("Negado", resp.msg);
                route.params.liga.pedidos.splice(index, 1);
                setRender(!rend);
                SalveDate(banco);
            }
            if(route.params.liga.pedidos.length == 0) {
                setPedido(false);
                route.params.liga.pedidoIsOn = false;
            }
        } else {
            Alert.alert("Erro", resp.dado);
        }

    }

    async function removerMembro(){
        // remover membro da liga e apagar relação LHU
    }

    async function setarAdm(bool){
        // setar adm para true ou false conforme enviado (bool)
        let reqs = await fetch(confgBD.urlRootNode + "setarAdm",{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userL  : itemOP,
                bool   : bool,
                idLiga : route.params.liga.id,
            })
        });
        let resp = await reqs.json();
        //console.log("Resposta setar adm -> \n",resp);
        if(resp.status){
            // alerta de confirmação
            itemOP.isAdmin = bool;
            //setRender(!rend);
            setModal(false);
            SalveDate(banco);
            Alert.alert("Sucesso", resp.msg);
            console.log("Adm setado com sucesso!");
        } else {
            console.log("Erro ao setar adm -> \n",resp);
            Alert.alert("Erro", resp.msg);
        }
    
    }

    function mudar_Adm(){
        if(itemOP.isAdmin){
            // se for true retirar o adm (false)
            //confirmação em dois passos!
            Alert.alert("Admistrador", "Deseja remover permissões do usuário?",[
                { text: "Sim", onPress: () =>  setarAdm(false)},
                { text: "Não", onPress: () =>  null, style: "cancel" },
            ])
        } else{
            // se for false setar o adm true
            Alert.alert("Admistrador", "Deseja torná-lo administrador da liga?",[
                { text: "Sim", onPress: () =>  setarAdm(true)},
                { text: "Não", onPress: () =>  null, style: "cancel" },
            ])
        }
    }
  
    function render_Modal(){
        return(
            <Modal
                animationType = "slide"
                transparent = {true}
                visible = {modal}
                onRequestClose = {() => {
                    setModal(false);
                }}
            >
                <View style = {stylesMem.viewFullModal}>
                    <View style = {stylesMem.viewModal_confMembros}>
                        <Text style = {stylesMem.title_modal}> - Opções da Liga - </Text>
                        <Text style = {stylesMem.text_btt}> - {itemOP.apelido} - </Text>
                        <View style = {stylesMem.view_inputs}>
                            <TouchableOpacity style = {stylesMem.btt_Modal}
                                onPress = {() => {
                                    navigation.replace("ViewP",{
                                        liga        :   route.params.liga,
                                        dest        :   route.params.dest,
                                        index_liga  :   route.params.index_liga,
                                        player      :   itemOP,
                                        veio_de     :   "Membros",
                                        isAdmin     :   route.params.isAdmin,
                                    });
                                }}
                            >
                                <Text style = {stylesMem.text_btt}> Perfil </Text>
                            </TouchableOpacity>
                            { !itemOP.isUser_Liga &&  
                                <TouchableOpacity style = {stylesMem.btt_Modal} 
                                onPress = {() => {
                                    if(route.params.isAdmin) mudar_Adm();
                                    else  Alert.alert("Admistrador", "Você não tem permissões para realizar está ação!");
                                }}
                                >
                                    <Text style = {stylesMem.text_btt}> {itemOP.isAdmin ? "Remover Adm" : "Tornar Adm"} </Text>
                                </TouchableOpacity>
                            }
                            
                            <TouchableOpacity style = {stylesMem.btt_Modal}
                                onPress = {() => {
                                    removerMembro();
                                }}
                            >
                                <Text style = {stylesMem.text_btt}> Apagar </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    </View>
            </Modal>
        )
    } 
    
    function render_Pedidos(){
        return (
            <View             style = {stylesMem.viewPedis}>
                <Text         style = {{...stylesMem.titleM, height: '18%'}}>   Pedidos </Text>
                <SafeAreaView style = {{...stylesMem.viewInferioir, height: '80%'}}>
                    <FlatList style = {stylesMem.flatList}
                        data            = {route.params.liga.pedidos}
                        renderItem      = {Comp_Pedidos}
                        keyExtractor    = {(item) => item.Users_idUsers}
                    />
                </SafeAreaView>  
            </View>
        );
    }

    function Comp_Players({item}){
        return(
            <TouchableOpacity style = {stylesMem.viewFL}
                onPress = {() => {
                    if(route.params.isAdmin){
                        setItemOP(item);
                        setModal(true);
                    } else{
                        navigation.replace("ViewP", {
                            liga    : route.params.liga,
                            dest    : route.params.dest,
                            veio_de : "Membros",
                            player  : item,
                            isAdmin : route.params.isAdmin
                        });
                    }
                }}
            >
                <Image style = {stylesMem.img_logoFL}
                    source = {RetornaImg(item.image)}
                    resizeMode="cover"
                />
                <View style = {stylesMem.viewInfos_FL}>
                    <Text style = {stylesMem.text_infos}>Nome: {item.apelido}</Text>
                    <Text style = {stylesMem.text_infos}>FG: {(item.scrT.a_FG % 1) == 0 ? item.scrT.a_FG : item.scrT.a_FG.toFixed(1)}%</Text>
                    <Text style = {stylesMem.text_infos}>Pts: {item.scrT.total_pts}</Text>
                    <Text style = {stylesMem.text_infos}>{item.isUser_Liga ? "Usuário Anônimo" : item.isAdmin ? "Admin: Sim" : "Admin: Não"} </Text>
                </View>
            </TouchableOpacity>
        );
    }

    function Comp_Pedidos({item, index}){
        return(
            <TouchableOpacity style = {{...stylesMem.viewFL, height: 90}}
                onPress = {() => validar_pedido(item, index)}
            >
                <Image style = {stylesMem.img_logoFL}
                    source = {retornaImg(item.user_do_pedido)}
                    resizeMode="cover"
                />
                <View style = {stylesMem.viewInfos_FL}>
                    <Text style = {{...stylesMem.text_infos, width: "50%", textAlign: 'center'}}> Pedido  {index + 1}</Text>
                    <Text style = {stylesMem.text_infos}> Nome:     {item.user_do_pedido.nome}</Text>
                    <Text style = {stylesMem.text_infos}> Apelido:  {item.user_do_pedido.apelido}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    
    return(
        <View style = {stylesMem.telaFull}>
            <StatusBar
                hidden = {true}
                barStyle="ligth-content"
            />
            <Topo/>
            { ped && route.params.isAdmin && render_Pedidos()}
            <View style = {stylesMem.viewMembros}>
                <Text style = {stylesMem.titleM}> Membros </Text>
                <SafeAreaView style = {stylesMem.viewInferioir}>
                    <FlatList style = {stylesMem.flatList}
                        data = {route.params.liga.list_users}
                        renderItem={Comp_Players}
                        keyExtractor={(item) => item.Users_idUsers}
                    />
                </SafeAreaView>  

            </View>
            {render_Modal()}          
        </View>
    );
}
