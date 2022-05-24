import React, { useEffect, useState } from "react";
import {Text, FlatList, View, StatusBar, Image, 
        TouchableOpacity, Modal, KeyboardAvoidingView, 
        TextInput, Alert, Keyboard, BackHandler, ActivityIndicator
    } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native"
import { styleM, stylesJ, stylesCJ, stylesModal } from './styleshet/index_styles';
import { Cor, icons, styles} from '../../styles/index_S';
import * as ImagePicker from 'expo-image-picker';
import SalveDados from '../../../back-end2/SalveData';
import assets from "../../../../assets/index_assets";
import banco from "../../../back-end2/banco_local";
import configBD from "../../../../config/config.json";
import { User_GameV } from "../../../back-end2/obj_resp/index";
import { RetornaImg, RetornaImgL } from '../../functions/index';

export default function Main_Liga({route}){
    const date          = new Date(route.params.liga.createdAt);
    const navigation    = useNavigation();
    const [cod_NewUser, setCod_NewUser]     =  useState("");
    const [textApel, setTA]                 =  useState("");
    const [modalAdd, setModalAdd]           =  useState(false);
    const [ped, setPedido]                  =  useState(Cor.white);
    const [tipoJG, setTipoJG]               =  useState(true);
    const [rend, setRend]                   =  useState(true);
    const [dest_render, setDest_render]     =  useState(route.params.dest[0]);
    const [load, setLoad]                   = useState(false); // true -> carregando

    useEffect(()=>{
        //console.log("Scores 5x5", route.params.liga.list_users[0].scr5x5);
        //console.log(route.params.liga.pedidos);
        PersistLiga();
        if(route.params.liga.pedidoIsOn) {
            if(route.params.liga.pedidos.length != 0)
                setPedido(Cor.red);
            else {
                setPedido(Cor.white);
                route.params.liga.pedidoIsOn = false;
                SalveDados(banco);
            }
        }
        //console.log("User da liga -> ", banco.ligas[0].list_users[0]);
        BackHandler.addEventListener("hardwareBackPress", backAction);
        return () => {BackHandler.removeEventListener("hardwareBackPress", backAction);}
    }, []);
    // funcoes da tela
    function backAction(){
        navigation.replace("MainP", {
            liga : route.params.liga,
        });
        return true;
    }

    async function isAdmin(liga){
        for(let us of route.params.liga.list_users){
            if(us.idUsers == banco.userMaster.id){
                console.log("Entrou e encontrou ->", us.isAdmin);   
                return us.isAdmin;
            }
        }
        console.log("Não encontrou");
        return false;
    }

    async function PersistLiga(){
        let reqs = await fetch(configBD.urlRootNode + "persistLiga", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                idLiga      : route.params.liga.id,
                users       : route.params.liga.list_users.length,
                jogos3x3    : route.params.liga.listJgs3x3.length,
                jogos5x5    : route.params.liga.listJgs5x5.length,
                pedidos     : route.params.liga.pedidos.length,
            })
        });
        let resp = await reqs.json();
        if(resp.status){
            for(let lg of banco.ligas)
                if(lg.id == resp.liga.id){
                    lg = resp.liga;
                    break;
                }
            SalveDados(banco);
            navigation.replace("MainL",{
                liga        : resp.liga,
                index_liga  : index,
                dest        : await montarArrayDest(resp.liga),
            });
        }

    }

    async function add_jogadorB(apelido){
        Keyboard.dismiss();
        if(apelido.length > 2 && apelido.length < 20){
            let valid = false;
            for(let apels of route.params.liga.list_users)
                if(apels.apelido == apelido) valid = true;
                
            if(!valid){
                let reqs = await fetch(configBD.urlRootNode+"cadastro_user_ano", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        idLiga   : route.params.liga.id,
                        apelido  : apelido,
                    }),
                });
                let resp = await reqs.json();
                console.log("Resposta do servidor -> ",resp);
                if(resp.status){
                    route.params.liga.list_users.push(resp.userL);
                    route.params.liga.list_usersG.push(resp.userG);
                    setCod_NewUser(resp.codigo);
                    //console.log("ID do user Anonimo", resp.codigo);
                    //console.log("Cod_NewUser", cod_NewUser);
                    SalveDados(banco);
                    Alert.alert('Sucesso', 'Jogador inserido com sucesso, para resgatar os jogos, '+ 
                    'o jogador deve realizar o cadastro pelo seu celular e utilizar o código abaixo:\n' + resp.codigo);
                } else{
                    //Alert.alert("Erro", "Não foi possível adicionar o jogador");
                    console.log("Erro ao adicionar jogador -> ", resp.dado);
                }
            }else{
                //Alert.alert("Erro", "Jogador já existe");
                console.log("Jogador já existe");
            }    
            
        }else {
            //Alert.alert("Seu apelido deve conter entre 3 e 15 caracteres");
            console.log("Seu apelido deve conter entre 3 e 15 caracteres");
        }
        setLoad(false);
    }
     
    async function criaTimes(){
        route.params.liga.list_times3.splice(0, route.params.liga.list_times3.length);
        route.params.liga.list_times5.splice(0, route.params.liga.list_times5.length);
        //monta os times 3x3
        for(let jg of route.params.liga.listJgs3x3){
            
            let tmA = [], tmB = [], jj = {};
            for(let jgd of jg.timeA){
                jj = {
                    id      : jgd.Users_idUsers,
                    numero  : jgd.numero,
                }
                let uGV = new User_GameV(jj, jgd.apelido);
                tmA.push(uGV);
            }
            for(let jgd of jg.timeB){
                jj = {
                    id      : jgd.Users_idUsers,
                    numero  : jgd.numero,
                }
                let uGV = new User_GameV(jj, jgd.apelido);
                tmB.push(uGV);
            }
            route.params.liga.list_times3.unshift(tmA);
            route.params.liga.list_times3.unshift(tmB);
            //console.log("Times criados",route.params.liga.list_times3);
        }
        //monta os times 5x5
        for(let jg of route.params.liga.listJgs5x5){
            let tmA = [], tmB = [], jj = {};
            for(let jgd of jg.timeA){
                jj = {
                    id      : jgd.Users_idUsers,
                    numero  : jgd.numero,
                }
                let uGV = new User_GameV(jj, jgd.apelido);
                tmA.push(uGV);
            }
            for(let jgd of jg.timeB){
                jj = {
                    id      : jgd.Users_idUsers,
                    numero  : jgd.numero,
                }
                let uGV = new User_GameV(jj, jgd.apelido);
                tmB.push(uGV);
            }
            route.params.liga.list_times5.push(tmA);
            route.params.liga.list_times5.push(tmB);
        }
        return true;
    }
    
    async function montarArrayDest(liga){
        let array = [];
        array.push(liga.destaques.jgd_Cluth);
        array.push(liga.destaques.jgd_Fominha);
        array.push(liga.destaques.jgd_Vencedor);
        array.push(liga.destaques.jgd_Pontuador);
        array.push(liga.destaques.jgd_2Pts);
        array.push(liga.destaques.jgd_3Pts);
        array.push(liga.destaques.jgd_Reboteiro);
        array.push(liga.destaques.jgd_Assist);
        array.push(liga.destaques.jgd_Ladrao);
        array.push(liga.destaques.jgd_Bloker);
        array.push(liga.destaques.jgd_AirBall);
        array.push(liga.destaques.jgd_FG);
        array.push(liga.destaques.jgd_PPG);
        array.push(liga.destaques.jgd_2PPG);
        array.push(liga.destaques.jgd_3PPG);
        array.push(liga.destaques.jgd_APG);
        array.push(liga.destaques.jgd_RPG);    
        array.push(liga.destaques.jgd_BPG);
        array.push(liga.destaques.jgd_AirBPG);
        array.push(liga.destaques.jgd_RouPG);
        return array;
    }

    function nextDest(){
        const pos = route.params.dest.indexOf(dest_render);
        if(pos == route.params.dest.length - 1) setDest_render(route.params.dest[0]);
        else setDest_render(route.params.dest[pos + 1]);
    }  
    
    // modal
    function render_Modal(){
        // adicionar jogador anonimo!
        return(           
            <Modal 
                animationType="slide"
                transparent={true}
                visible={modalAdd}
                onRequestClose={() => {
                    setModalAdd(!modalAdd);
                }}
            >
                <View style = {stylesModal.viewFullModal}>
                    <View style = {stylesModal.viewModal_newLiga}>
                        <Text style = {stylesModal.title_modal}> Adicionar Jogador </Text>
                        <View style = {stylesModal.view_inputs}>
                        <KeyboardAvoidingView 
                            style = {stylesModal.keyBoard}
                            behavior = {Platform.select({
                                ios : 'padding',
                                android : null,
                            })}
                        >    
                            <TextInput style = {stylesModal.txt_input}
                                value           = {textApel}
                                onChangeText    = {(tt)=>{setTA(tt)}}
                                placeholder     = "Apelido na liga"
                            />
                            <TouchableOpacity style = {stylesModal.btt_Meio}
                                onPress = {() => {  
                                    setLoad(true);
                                    add_jogadorB(textApel)
                                    setModalAdd(false);
                                }}  
                            >
                                <Text style = {stylesModal.text_btt}> Cadastrar </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {stylesModal.btt_Meio}
                                onPress = {() => {
                                    setTA("");
                                    setModalAdd(false);
                                    setCod_NewUser("");
                                }}
                            >
                                <Text style = {stylesModal.text_btt}> Cancelar </Text>
                            </TouchableOpacity>
                            </KeyboardAvoidingView>
                            <View style = {stylesModal.viewInfor}>
                                <Text style = {stylesModal.text_btt}> Adicionar apenas os jogadores sem cadastro no aplicativo</Text>
                            </View>    
                        </View>
                    </View>
                </View>
            </Modal>  
        );
    }

    // componentes
    function Comp_jgdr({item}){
        
        return(
            <View style = {stylesCJ.compFull}>
            <TouchableOpacity style = {stylesCJ.btt_fl}
                onPress = {()=>{navigation.replace("ViewP",{
                    player  :   item,
                    liga    :   route.params.liga,
                    dest    :   route.params.dest,
                    veio_de :   "MainL",
                })}}
            >
                <Image
                    style = {stylesCJ.img}
                    source = {RetornaImg(item.image)}
                />
                <View style = {stylesCJ.viewInfos}>
                    <Text style = {stylesCJ.text_infos}>{item.apelido} | {item.numero}|</Text>
                    <Text style = {stylesCJ.text_infos}> {item.posicao} </Text>
                    <Text style = {{...stylesCJ.text_infos, fontSize: 14}}>Jgs: {item.scrT.jogos} | FG: {(item.scrT.a_FG % 1) == 0 ? item.scrT.a_FG : item.scrT.a_FG.toFixed(0)}%</Text>
                </View>                
            </TouchableOpacity>
            </View>
        );
    }

    function comp_destaques(item){
        return(
            <TouchableOpacity style = {styleM.comp_destaques}
             // passagens -> e <- devem mover os tipos de destaques na liga
             // os destaques devem rolar conforme o passa o tempo 3s ->
                onPress = {()=>{
                    nextDest();
                }}
            >
              <View style = {styleM.view1CompDest}>
                <Image
                    style = {styleM.imgCompDest}
                    source = {RetornaImg(item.user.image)}
                />
                <View style = {styleM.viewInfosCompDest}>
                    <Text style = {{...styleM.textsInfos, fontSize: 16}}>{item.title}</Text>
                    <Text style = {{...styleM.textsInfos, fontSize: 14, textAlign : 'justify'}}>{item.desc}</Text>
                </View>
              </View>
              <View style = {styleM.view2CompDest}>
                <Text style = {{...styleM.textsInfos, marginLeft: 8, marginTop: 5}}>{item.user != null ? item.user.apelido : "Vazio"} | Jogos: {item.user != null ? item.user.scrT.jogos : 0}</Text>
                {item.title != "Fominha" && <Text style = {{...styleM.textsInfos, marginLeft: 8, marginTop: 2, alignSelf: 'center'}}>{item.value % 1 === 0 ? item.value : item.value.toFixed(2)} {item.rotulo}</Text>}
              </View>
            </TouchableOpacity>
        );
    }

    return (
        <View style = {styleM.telaFull}>
            {render_Modal()}
            <StatusBar hidden = {false}
                barStyle="ligth-content"/>
            {load && 
                <ActivityIndicator
                    style = {{position : "absolute", top : '50%', right: "50%", }}
                    size = "large"
                    color = {Cor.sec}
                />
            }
            <View style = {styleM.viewS}>
                    
                
                <TouchableOpacity style = {styleM.img_logo}
                    onPress = { async () => {
                        if(await isAdmin()){
                            navigation.replace("Subst_ImgLg",{
                                liga        : route.params.liga,
                                dest        : route.params.dest,
                                index_liga  : route.params.index_liga
                            });
                        }
                    }}
                >
                    <Image style = {{height:'100%', width:'100%',borderRadius: 90}}
                        source = { RetornaImgL(route.params.liga.img_log) }
                        resizeMode = "cover"
                    />
                </TouchableOpacity>
                <View style={styleM.view1_infos}>
            
                    <Text style = {styleM.text}>Criada: {"" + date.getDate() + "/" + (date.getMonth()+ 1) + "/" + date.getFullYear().toString()[2]+date.getFullYear().toString()[3]}</Text>
                    <Text style = {styleM.text}>Liga: {route.params.liga.nome}</Text>
                    <Text style = {styleM.text}>Jogadores: {route.params.liga.list_users.length}</Text>
                    <Text style = {styleM.text}>Jogos: {(route.params.liga.listJgs5x5.length) + (route.params.liga.listJgs3x3.length)}</Text>
                    <Text style = {styleM.text}>Pontos: {route.params.liga.total_pts}</Text>
                </View>
            </View>
            <View style = {styleM.view_infer} >
                <View style = {styleM.viewBtt}>
                    <TouchableOpacity 
                        style = {styleM.btt_opacit}
                        onPress = {() => navigation.replace("Ranking",{
                            liga        : route.params.liga,
                            dest        : route.params.dest,
                            index_liga  : route.params.index_liga,
                        })} //navigation.navigate("")
                    >
                        <Icon 
                            name    = {icons.rankink} 
                            size    = {30}
                            color   = {Cor.icons_cor}
                        />
                        <Text style = {styleM.btt_text}> Ranking </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style = {styleM.btt_opacit}
                        onPress = {async () => {
                            console.log("Entrou aqui! btt");
                            await criaTimes();
                            navigation.replace("NovoJg",{
                                liga        : route.params.liga,
                                dest        : route.params.dest,
                                index_liga  : route.params.index_liga,
                            });
                        }} 
                    >
                        <Icon 
                            name    = {icons.new_jg} 
                            size    = {30}
                            color   = {Cor.icons_cor}
                        />
                        <Text style = {styleM.btt_text}> Novo Jogo </Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                        style = {styleM.btt_opacit}
                        onPress = {() => {
                            navigation.replace("List_Jgs",{
                                liga        : route.params.liga,
                                dest        : route.params.dest,
                                index_liga  : route.params.index_liga,
                            });
                        }}
                        
                        //navigation.navigate("")
                    >
                        <Icon 
                            name    = {icons.champ}
                            size    = {30}
                            color   = {Cor.icons_cor}
                        />
                        <Text style = {styleM.btt_text}>Jogos</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                        style = {styleM.btt_opacit}
                        onPress = {async () => {
                            if(await isAdmin(route.params.liga)){
                                setModalAdd(!modalAdd)
                                setTA("");
                            } else {
                                Alert.alert("Você não é administrador da liga!")
                            }
                        }} //navigation.navigate("")
                    >
                        <Icon 
                            name    = {icons.add_jgdr} 
                            size    = {30}
                            color   = {Cor.icons_cor}
                        />
                        <Text style = {styleM.btt_text}>Cadastrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style = {styleM.btt_opacit}
                        onPress = {async () => {
                            if(await isAdmin(route.params.liga)){
                                navigation.replace("ConfigLiga",{
                                    liga        : route.params.liga,
                                    dest        : route.params.dest,
                                    index_liga  : route.params.index_liga,
                                });
                            } else {
                                Alert.alert("Acesso negado","Você não é administrador!");
                            }
                        }} 
                    >
                        <Icon 
                            name    = {icons.setting} 
                            size    = {30}
                            color   = {Cor.icons_cor}
                        />
                        <Text style = {styleM.btt_text}> Confgs </Text>
                    </TouchableOpacity>    
                    
                </View>
                <View style = {styleM.view_Comps}>
                    <View style = {styleM.view_jgdrs}>
                        <Text style = {{...styles.texts, fontSize: 22}}> 
                            Destaques 
                        </Text>
                            {comp_destaques(dest_render)}
                    </View>
                
                    <View style = {styleM.view_jgdrs}>
                        
                        <TouchableOpacity style = {styleM.btt_pedidos}
                            onPress = {()=>{
                                navigation.replace("Membros",{
                                    liga        : route.params.liga,
                                    dest        : route.params.dest,
                                    index_liga  : route.params.index_liga,
                                    isAdmin     : isAdmin(),
                                })
                            }}
                        >
                            <Text style = {{...styles.texts, fontSize: 18, marginRight: 25}}> 
                                Membros  
                            </Text>
                            
                            <Icon
                                name = {icons.add_jgdr}
                                size = {30}
                                color = {ped}
                            />
                

                        </TouchableOpacity>
                      
                        <FlatList style = {styleM.flat_List}
                            data = {route.params.liga.list_users}
                            renderItem = {Comp_jgdr}
                            keyExtractor = {(item) => {item.idUsers}}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
} 
