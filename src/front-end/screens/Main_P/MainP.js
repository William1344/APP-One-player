import React, {useEffect, useState} from "react";
import {
    KeyboardAvoidingView, TextInput, Text, Image, View, StatusBar, Modal, 
    TouchableOpacity, Alert, FlatList, BackHandler
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import SalveDados from '../../../back-end2/SalveData';
import banco from '../../../back-end2/banco_local';
import confgBD from '../../../../config/config.json';
import { Topo} from '../../components/index_comps';
import Icon from 'react-native-vector-icons/AntDesign';
import IconE from 'react-native-vector-icons/Entypo';
import assets from "../../../../assets/index_assets";
import stylesCP from '../LigaCreate/stylesCompLPesq';
import {stylesMP, stylesC} from './styles/indexStyles';
import { Cor, icons,  idiomaPort, idiomaEUA, SetaTema } from '../../styles/index_S';
import {RetornaImg, RetornaImgL } from '../../functions/index';

/*
 * Fazer: 
 *  - Sistema entre amigos
 *  - Convidar e aceitar convites de amigos
 *  - Realizar x1 entre amigos
 *  - Perfil de Usuarios
 *  - Gerenciar convites na liga
 *  - Gerenciar confgs do app e da liga separadamente!
 * */
export default function Main_Players(){
    var pesq_ligas = [];
    const navigation = useNavigation();
    const [rend, setRender]         = useState(false);
    const [modalV1,  setMV1]        = useState(false);
    const [modalV2,  setMV2]        = useState(false);
    const [itemLiga, setItemLiga]   = useState([]);
    const [new_liga, setNewLiga]    = useState(false);
    const [index_liga, setindexL]   = useState(0);
    const [title, setTitle]         = useState("Ligas");
    const [modo, setModo]           = useState(true); // true mostra ligas, só troca para pedidos se peds > 0
    const [textName, setTN]         = useState("Sesc");
    const [textApel, setTA]         = useState("");
    const [textLocal, setLocal]     = useState("Bagé-RS"); // posso buscar o local no cel com API
    
    function backAction(){
        Alert.alert("Sair", "Você deseja sair da sua conta?", [
            {
              text: "Cancel",
              onPress: () => null,
              style: "cancel"
            },
            { text: "Sim", onPress: () =>  navigation.replace("Login")}
        ]);
        return true;
    }

    async function PersisteUser(){     
        let reqs = await fetch(confgBD.urlRootNode + "persistUser",{
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUser : banco.userMaster.id,
                peds   : banco.pedidos.length,
                ligas  : banco.ligas.length,
                jogos  : banco.userMaster.scrT.jogos,
            })
        });
        let resp = await reqs.json();
        if(resp.status){
            // persistir os dados recebidos
            banco.userMaster    = resp.userM;
            banco.pedidos       = resp.pedidos;
            banco.ligas         = resp.ligas;
            setRender(!rend);
            SalveDados(banco);
        } 
    }

    useEffect(() => {
        PersisteUser();
        //console.log("Image", banco.userMaster.image);
        //console.log("Ligas ", banco.ligas.length)
        //console.log("Liga -> \n", banco.ligas[0].confLiga);
        BackHandler.addEventListener("hardwareBackPress", backAction);
        return () => {BackHandler.removeEventListener("hardwareBackPress", backAction);}
    }, []);
  
    // renderiza aviso ou Flat List das ligas
    function render_Liga(){
        if(modo){
            if(banco.ligas.length == 0){
                return (
                    <Text style = {stylesMP.textAviso}>
                        "Para participar de partidas, você precisa 
                        participar de uma liga, ou crie a sua liga e convide 
                        seus amigos." 
                    </Text>
                );
            } else {
                return(
                    <FlatList style = {stylesMP.flatLiga}
                        data = {banco.ligas}
                        renderItem = {Comp_Liga}
                        keyExtractor={(item) => {item.id}}
                    />
                );
            }
        } else {
            return(
                <FlatList style = {stylesMP.flatLiga}
                    data = {banco.pedidos}
                    renderItem = {Comp_Pedido}
                    keyExtractor={(item) => {item.id}}
                />
            );
            
        }
        
    }

    function render_Modal_CL(){
        /* Modal para configurar liga */
        return(
            <Modal
                animationType   ="slide"
                transparent     ={true}
                visible         ={modalV2}
                onRequestClose  = {() => {
                    setMV2(false); 
                }}
            >
                <View style = {stylesMP.viewFullModal}>
                <View style = {stylesMP.viewModal_confLiga}>
                    <Text style = {stylesMP.title_modal}> - Opções da Liga - </Text>
                    <View style = {stylesMP.view_imputs}>
                                                
                        <TouchableOpacity style = {stylesMP.btt_Modal}
                            onPress = {() => {
                                sair_da_liga();
                            }}
                        >
                            <Text style = {stylesMP.text_btt}> Sair da Liga </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </View>
            </Modal>
        );
    }

    function Comp_Pedido({item}){ 
        const dt = new Date(item.createdAt);
        const data = "Criada: "+ dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear().toString()[2] + dt.getFullYear().toString()[3];
        
        
        return(
            <View style={stylesCP.view_compFull}>
            <TouchableOpacity style={stylesCP.btt_comp_liga}
                onPress = {async () => {
                    //console.log(item);
                    
                }}
            >
                <Image style = {stylesCP.img_logo}
                    source = {RetornaImgL(item.img_log)}
                /> 
                <View style = {stylesCP.viewInf}>
                    <Text style = {stylesCP.textTitle}> - Aguardando - </Text>
                    <Text style = {stylesCP.textInfos}> Nome: {item.nome} </Text>
                    <Text style = {stylesCP.textInfos}> Local: {item.local} </Text>
                    <Text style = {stylesCP.textInfos}> Membros: {item.membros}</Text>
                    
                </View>
            </TouchableOpacity>
            </View>
        );
    }

    function Comp_Liga({item, index}){
        const dt = new Date(item.createdAt);
        const data = "Criada: "+ dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear().toString()[2] + dt.getFullYear().toString()[3];

        async function cancela_pedido(){
            
            let reqs = await fetch(confgBD.urlRootNode + 'cancela_pedido', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    idPedido : item.id,
                })
            });
            let resp = await reqs.json();
            if(resp.status){
                Alert.alert("Aviso", resp.dado);
                banco.ligas.splice(index, 1);
                SalveDados(banco);
                setRender(!rend);
            }else{
                Alert.alert("Aviso", resp.dado);
            }
        }
        // monta o array destaques
        async function montarArrayDest(){
            let array = [];
            array.push(item.destaques.jgd_Cluth);
            array.push(item.destaques.jgd_Fominha);
            array.push(item.destaques.jgd_Vencedor);
            array.push(item.destaques.jgd_Pontuador);
            array.push(item.destaques.jgd_2Pts);
            array.push(item.destaques.jgd_3Pts);
            array.push(item.destaques.jgd_Reboteiro);
            array.push(item.destaques.jgd_Assist);
            array.push(item.destaques.jgd_Ladrao);
            array.push(item.destaques.jgd_Bloker);
            array.push(item.destaques.jgd_AirBall);
            array.push(item.destaques.jgd_FG);
            array.push(item.destaques.jgd_PPG);
            array.push(item.destaques.jgd_2PPG);
            array.push(item.destaques.jgd_3PPG);
            array.push(item.destaques.jgd_APG);
            array.push(item.destaques.jgd_RPG);    
            array.push(item.destaques.jgd_BPG);
            array.push(item.destaques.jgd_AirBPG);
            array.push(item.destaques.jgd_RouPG);
            return array;
        }
           
        return(
            <View style={stylesC.view_compFull}>
                <TouchableOpacity style={stylesC.btt_comp_liga}
                    onPress = {async () => {
                        //console.log(item);
                        navigation.replace("MainL",{
                            liga        : item,
                            index_liga  : index,
                            dest        : await montarArrayDest(),
                        });
                    }}
                    onLongPress = {() => {
                            setItemLiga(item);
                            setindexL(banco.ligas.indexOf(item));
                            setMV2(true);
                        }
                    }
                >
                    <Image style = {stylesC.img_logo}
                        source = {RetornaImgL(item.img_log)}
                    /> 
                    <View style = {stylesC.viewInf}>
                        <Text style = {stylesC.textTitle}> {item.nome}</Text>
                        <Text style = {stylesC.textInfos}> Membros: {item.list_users.length} | {data}   </Text>
                        <Text style = {stylesC.textInfos}> Total Pontos: {item.total_pts} | Jogos: {(item.listJgs3x3.length) + (item.listJgs5x5.length)}</Text>
                        <Text style = {stylesC.textInfos}> Jogos 3x3: {item.listJgs3x3.length} | 5x5: {item.listJgs5x5.length}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
    
    //console.log(bd)
    return( 
        <View style = {stylesMP.telaFull}>
            <StatusBar hidden = {true}
                barStyle="ligth-content"/>
            <Topo main = {true}/>
            <View style = {stylesMP.viewLiga}>
                <TouchableOpacity style = {stylesMP.btt_Meio}
                    onPress = {() => {
                        if(modo){
                            if(banco.pedidos.length > 0){
                                setModo(false);
                                setTitle("Pedidos");
                            }
                        } else {
                            setModo(true);
                            setTitle("Ligas");
                        }
                    }}
                >
                    <Text style = {{...stylesMP.text_btt, fontSize: 24}}> {title} </Text>
                </TouchableOpacity>    
                <View style = {stylesMP.viewL}> 
                    {render_Liga()} 
                </View>
                <View style = {stylesMP.viewBttns}>
                    <TouchableOpacity 
                        style = {stylesMP.btt_new_liga}
                        onPress = {() => {
                            navigation.replace("LigaCreate");
                        }} //navigation.navigate("")
                    >
                        <Icon 
                            style = {{marginTop: 10}}
                            name    = {icons.add_liga}
                            color   = {Cor.icons_cor}
                            size    = {40}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style = {stylesMP.btt_new_liga}
                        onPress = {() => {navigation.replace("ViewP", {
                            player      : banco.userMaster,
                            veio_de     : "MainP",
                        })}}
                    >
                        <Icon 
                            style = {{marginTop: 10}}
                            name    = {icons.user}
                            color   = {Cor.icons_cor}
                            size    = {40}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style = {stylesMP.btt_new_liga}
                        onPress = {async () => {
                            Alert.alert("Aviso", "Disponível apenas nas cores dark!");
                        }} 
                    >
                        <IconE 
                            style = {{marginTop: 10}}
                            name    = {icons.cores}
                            color   = {Cor.icons_cor}
                            size    = {40}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
