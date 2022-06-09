import React, {useState, useEffect} from 'react';
import { 
  Alert, BackHandler, FlatList, Image, KeyboardAvoidingView, Text, 
  TextInput, TouchableOpacity, View, Modal
} from 'react-native';
import Icon             from 'react-native-vector-icons/Entypo';
import {useNavigation}  from '@react-navigation/native';
import stylesLC         from './stylesLC';
import stylesCP         from './stylesCompLPesq';
import { stylesModal }  from '../Main_L/styleshet/index_styles';
import { Cor, icons }   from '../../styles/index_S';
import Topo             from '../../components/Topo/Topo';
import confgBD          from '../../../../config/config.json';
import assets           from '../../../../assets/index_assets';
import banco            from '../../../back-end2/banco_local';
import SalveData        from '../../../back-end2/SalveData';

export default function LigaCreate({route}){

  const navigation                = useNavigation();
  const [new_liga, setNewLiga]    = useState(1);
  const [modalAdd, setModalAdd]   = useState(false);
  const [itemLiga, setItemLiga]   = useState([]);
  const [idLiga, setIdLiga]       = useState(null);
  const [corA, setCorA]           = useState(Cor.btt_sel);
  const [corB, setCorB]           = useState(Cor.btt);
  const [corC, setCorC]           = useState(Cor.btt);
  const [rotul, setRotul]         = useState("Buscar Ligas");
  const [textCodResg, setCodResg] = useState("");
  const [textName, setTN]         = useState("");
  const [textApel, setTA]         = useState("");
  const [textLocal, setLocal]     = useState(""); // posso buscar o local no cel com API
    
  useEffect(() => {
    // teste de reloads
    setNewLiga(0);
    setRotul("Buscar Ligas");
      // seta a cor do botão para o padrão
      setCorA(Cor.btt_sel);
      setCorB(Cor.btt);
      setCorC(Cor.btt);
    BackHandler.addEventListener("hardwareBackPress", backAction);
    return () => {BackHandler.removeEventListener("hardwareBackPress", backAction);}
  },[]);

  useEffect(() => { // seta os valores de imput cada vez que mudar o componente
    setTN("");
    setTA("");
    setLocal("");
    setCodResg("");
  },[new_liga]);

  function backAction(){
    navigation.replace("MainP");
    return true;
  }

  function renderizar_inputs(){
    
    if(new_liga == 0){ // pesquisar ligas
      
      return(
        <View style = {stylesLC.viewImSup}>
          <KeyboardAvoidingView>
            <View style = {stylesLC.viewCompImput}>  
              <TextInput style = {stylesLC.txt_inputComp}
                value           = {textName}
                onChangeText    = {(tt)=>{setTN(tt)}}
                placeholder     = "Nome da liga"
              />
              <TouchableOpacity style = {stylesLC.btt_inputComp}
                onPress = {() => {pesquisar_Ligas(textName)}}
              >
                <Icon 
                  name  = {icons.pesquisa}
                  size  = {28}
                  color = {Cor.black}
                />
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
          <FlatList style = {stylesLC.flatLiga}
            data = {itemLiga}
            renderItem = {Comp_Liga_Pesq}
            keyExtractor={(item) => {item.id}}
          />
        </View>
      );
    } else if(new_liga == 1){ //criar liga
      return(
        <View style = {stylesLC.viewImSup}>
          <KeyboardAvoidingView 
            style = {stylesLC.keyBoard}
            behavior = {Platform.select({
              ios : 'padding',
              android : null,
            })}
          >    
            <TextInput style = {stylesLC.txt_input}
              value           = {textName}
              onChangeText    = {(tt)=>{setTN(tt)}}
              placeholder     = "Nome da liga"
            />
            <TextInput style = {stylesLC.txt_input}
              value           = {textApel}
              onChangeText    = {(tt)=>{setTA(tt)}}
              placeholder     = "Seu apelido na liga"
            />
            <TextInput style = {stylesLC.txt_input}
              value           = {textLocal}
              onChangeText    = {(tt)=>{setLocal(tt)}}
              placeholder     = "Local"
            />
            <TouchableOpacity style = {{...stylesLC.btt_bar, width: '50%'}}
              onPress = {() => {
                new_Liga_mySQL();
              }}
            >
              <Text style = {stylesLC.text_btt}> Criar Liga </Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      );
    } else if(new_liga == 2){ // resgatar participação e sua vaga na liga
      return(
        <View style = {stylesLC.viewImSup}>
          <KeyboardAvoidingView 
            style = {stylesLC.keyBoard}
            behavior = {Platform.select({
              ios : 'padding',
              android : null,
            })}
          >    
            <TextInput style = {stylesLC.txt_input}
              value           = {textName}
              onChangeText    = {(tt)=>{setTN(tt)}}
              placeholder     = "Nome da liga"
            />
            <TextInput style = {stylesLC.txt_input}
              value           = {textCodResg}
              onChangeText    = {(tt)=>{setCodResg(tt)}}
              placeholder     = "Seu código de resgate"
            />
            <TextInput style = {stylesLC.txt_input}
              value           = {textApel}
              onChangeText    = {(tt)=>{setTA(tt)}}
              placeholder     = "Seu apelido na liga"
            />
            
            <TouchableOpacity style = {stylesLC.btt_bar}
              onPress = {() => {
                resgatar_liga();
              }}
            >
              <Text style = {stylesLC.text_btt}> Resgatar </Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      );
    }
  }

  function modal_apelido(){
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
                      criar_solicitacao();
                      setModalAdd(false);
                    }}  
                  >
                    <Text style = {stylesModal.text_btt}> Solicitar </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style = {stylesModal.btt_Meio}
                    onPress = {() => {
                      setTA("");
                      setModalAdd(false);
                    }}
                  >
                    <Text style = {stylesModal.text_btt}> Cancelar </Text>
                  </TouchableOpacity>
                </KeyboardAvoidingView>
                 
            </View>
          </View>
        </View>
      </Modal>  
    );
  }

  function Comp_Liga_Pesq({item}){ 
    const dt = new Date(item.createdAt);
    const data = "Criada: "+ dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear().toString()[2] + dt.getFullYear().toString()[3];
    function retorna_img(){
      if(item.image != null){
        return item.image;
      } else{
        return assets.liga_lg;
      }
    }    
    
    function solicitar(){
      Alert.alert("Solicitar vaga na liga?", "Sua participaçam dependerá da aprovação dos administradores da liga.", [
        { 
          text: "Sim",
          onPress: () =>  criar_solicitacao(item.id)
        },
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
      ]);
      return true;
    }
    
    return(
      <View style={stylesCP.view_compFull}>
      <TouchableOpacity style={stylesCP.btt_comp_liga}
        onPress = {async () => {
          //console.log(item);
          solicitar();
        }}
      >
        <Image style = {stylesCP.img_logo}
          source = {retorna_img()}
        /> 
        <View style = {stylesCP.viewInf}>
          <Text style = {stylesCP.textTitle}> {item.nome}</Text>
          <Text style = {stylesCP.textInfos}> Local: {item.local} </Text>
          <Text style = {stylesCP.textInfos}> Membros: {item.membros}</Text>
          <Text style = {stylesCP.textInfos}> {data} </Text>      
        </View>
      </TouchableOpacity>
      </View>
    );
  }

  async function new_Liga_mySQL(){
    // + verificar quantas ligas o usuário já participa!
    // verifica se os campos de texto estão preenchidos.
    if(textName.length > 0 && textApel.length > 0 && banco.ligas.length < 4){
        
      let reqs = await fetch( confgBD.urlRootNode+"cadastro_liga",{
        method: 'POST',
        headers: {
          'Accept':'application/json',
          'Content-Type':'application/json',
        },
        body: JSON.stringify({
          criador : banco.userMaster,
          apelido : textApel,
          nome    : textName,
          local   : textLocal,
        }) 
      });
      let ress = await reqs.json();
      //console.log("resposta do servidor", ress);
      if(ress.status){
        //console.log("resposta do servidor", ress.dado);
        ress.dado.list_users.push(ress.userL);
        ress.dado.list_usersG.push(ress.userG);
        banco.ligas.push(ress.dado);
        console.log("User da liga -> ", banco.ligas[0].list_users[0]);
        //console.log("Liga criada ->", ress.dado);
        SalveData(banco);
        console.log("Deu tudo certo! Liga criada com sucesso!");
        navigation.replace("MainP");
      }else{
        //Alert.alert("Erro", ress.dado);
        console.log("Erro ao criar liga no mySQL!", ress.dado);
      }
    }
  }

  async function criar_solicitacao(idLiga){
    console.log("Body do pedido -> ", idLiga, "\n", banco.userMaster.id);
    if(textApel.length > 0){
      let reqs = await fetch( confgBD.urlRootNode+"criar_pedido",{
        method: 'POST',
        headers: {
          'Accept':'application/json',
          'Content-Type':'application/json',
        },
        body: JSON.stringify({
          apelido: textApel, 
          idLiga : idLiga,
          idUser : banco.userMaster.id,
        })
      });
      console.log("ID da liga", idLiga);
      let ress = await reqs.json();
      if(ress.status){
        //Alert.alert("Sucesso", ress.dado);
        banco.ligas.push(ress.dado);
        SalveData(banco);
        navigation.replace("MainP");
        console.log("Sucesso", ress.dado);
      }else{
        Alert.alert("Erro", ress.dado);
        console.log(ress.dado);
      }
    }
  }

  async function pesquisar_Ligas(){
    if((textName.length > 3)){
      let reqs = await fetch( confgBD.urlRootNode+"getLigas",{
        method: 'POST',
        headers: {
          'Accept':'application/json',
          'Content-Type':'application/json',
        },
        body: JSON.stringify({
          nome    : textName,
          //local   : textLocal,
          apelido : textApel,
        })
      });
      let ress = await reqs.json();
      console.log("resposta do servidor", ress);
      if(ress.status){
        setItemLiga(ress.ligasPesq);
      } else{
        Alert.alert("Erro", ress.dado);
        console.log(ress.dado);
      }    
    } 
  }

  async function resgatar_liga(){
    let reqs = await fetch( confgBD.urlRootNode+"resgata_liga",{
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body: JSON.stringify({
        idUser      : textCodResg,        // id do user anonimo para trocar as relações
        nome        : textName,
        apelido     : textApel,
        userMaster  : banco.userMaster, 
      })
    });
    let ress = await reqs.json();
    if(ress.status){
      //Alert.alert("Sucesso", ress.msg);
      console.log("Sucesso", ress.msg);  
      // setar a resposta com o banco local do usuário;
      banco.ligas.push(ress.liga);
      banco.userMaster = ress.userM;
      SalveData(banco);
      navigation.replace("MainP");
    } else {
      //Alert.alert("Erro", ress.dado);
      console.log("Erro",ress.dado);
    }

  }

  return(
    <View style = {stylesLC.telaFull}>
      {modal_apelido()}
      <Topo/>
      <View style = {stylesLC.viewInf}>
        <View style = {stylesLC.view_bars}>
            {/* Botão para pesquisar liga */}
          <TouchableOpacity style = {{...stylesLC.btt_bar, backgroundColor: corA}}
            onPress = {() => { 
              if(new_liga != 0 ){
                setNewLiga(0);
                setRotul("Buscar Ligas");
                // seta a cor do botão para o padrão
                  setCorA(Cor.btt_sel);
                  setCorB(Cor.btt);
                  setCorC(Cor.btt);
              }
            }}
          >
            <Text style = {stylesLC.text_btt}> Pesquisar </Text>
          </TouchableOpacity>
            {/* Botão para nova liga */}
          <TouchableOpacity style = {{...stylesLC.btt_bar, backgroundColor: corB}}
            onPress = {() => { 
              if(new_liga != 1 ){
                setNewLiga(1);
                setRotul("Criar Liga");
                // seta a cor do botão para o padrão
                  setCorA(Cor.btt);
                  setCorB(Cor.btt_sel);
                  setCorC(Cor.btt);
              } 
            }}
          >
            <Text style = {stylesLC.text_btt}> Nova Liga </Text>
          </TouchableOpacity>
            {/* Botão para resgatar liga */}
          <TouchableOpacity style = {{...stylesLC.btt_bar, backgroundColor: corC}}
            onPress = {() => { 
              if(new_liga != 2 ){
                setNewLiga(2);
                setRotul("Resgatar Liga");
                // seta a cor do botão para o padrão
                  setCorA(Cor.btt);
                  setCorB(Cor.btt);
                  setCorC(Cor.btt_sel);
              }  
            }}
          >
            <Text style = {stylesLC.text_btt}>nodemon Resgatar </Text>
          </TouchableOpacity>
        </View>
        <Text style = {stylesLC.title_imputs}> {rotul} </Text>
        {renderizar_inputs()}
      </View>
    </View>
  );
}