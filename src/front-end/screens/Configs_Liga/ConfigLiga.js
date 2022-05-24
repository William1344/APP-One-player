import React, { useEffect, useState } from "react";
import {Text, FlatList, View, StatusBar, Image, 
        TouchableOpacity, Modal, KeyboardAvoidingView, ActivityIndicator,
        TextInput, Alert, Keyboard, BackHandler, ScrollView, Switch
    } from 'react-native';
import Icon               from "react-native-vector-icons/AntDesign";
import { useNavigation }  from "@react-navigation/native";
import banco              from "../../../back-end2/banco_local";
import SalveData          from "../../../back-end2/SalveData";
import configBD           from "../../../../config/config.json";
import {styles, Cor, icons}   from "../../styles/index_S";
import stylesCFL          from "./stylesCFL";
import assets             from "../../../../assets/index_assets";
import { RetornaImg }     from "../../functions/index";



export default function ConfigLiga({route}){
  const navigation = useNavigation();
  // useStates
  let confs = route.params.liga.confLiga;
  //console.log("OBJ -> Configurações\n", confs);
  const [ tema, setTema ]           = useState(banco.tema);     // true = dark, false = light
  const [ marc24, setMarc24 ]       = useState(confs.marc24);   // futuro
  const [ subs_auto, setSubs_auto ] = useState(confs.selSubs);
  const [ faltas, setFaltas ]       = useState(confs.faltas);   // futuro
  const [ auto_troca, setAuto_troca]= useState(confs.auto_troca); 
  const [ rebote, setRebote ]       = useState(confs.rebote);
  const [ assist, setAssist ]       = useState(confs.assist);
  const [ block, setBlock ]         = useState(confs.block);
  const [ airB, setAirB ]           = useState(confs.airB);
  const [ roubo, setRoubo ]         = useState(confs.roubo);    // futuro
  const [ alterado, setAlterado ]   = useState(false);
  const [ load, setLoad]            = useState(false);

  useEffect (() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);
    return () => {BackHandler.removeEventListener("hardwareBackPress", backAction);}
  },[]);
  
  useEffect (() => {
    SalveData(banco);
  } , [tema]);
  
  useEffect (() => {
    console.log("Alterado?", alterado);
  } , [alterado]);

  function backAction(){
    navigation.replace("MainL",{
      liga    : route.params.liga,
      dest    : route.params.dest,  
    });
    return true;
  }

  function render_configs(){
    /* Requisitos de configurações 
      - Usuário:
        - Tema do app
        - Infos do user  
      - Liga:
        - Marcar 24s (Futuro)
        - Preencher substitutos automaticamente // seleciona todos os jogadores da liga como substitutos
        - Marcar Faltas (Futuro)
        - Mudar time automaticamente
        - Escores:
          - Rebote?
          - Assistencia?
          - Block?
          - Air Ball?
          - Roubo?
      - Deletar liga
    */
    return (
      <View style = {stylesCFL.viewScrool}>
        {/* TEMA */}
        <View style = {stylesCFL.viewLinha}>
          <Text style = {stylesCFL.text}> Tema:</Text>
          <Text style = {stylesCFL.textMeno}> { tema ? "Black" : "Light"} </Text>
          <Switch 
            value = { tema }
            onValueChange = {() => {setTema(!tema)}} 
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={tema ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor = "#3e3e3e"             
          />
        </View>
        {/* Preencher substitutos automaticamente */}
        <View style = {stylesCFL.viewLinha}>
          <Text style = {stylesCFL.text}> Substitutos: </Text>
          <Text style = {stylesCFL.textMeno}> { subs_auto ? "Sim" : "Não" } </Text>
          <Switch 
            value = { subs_auto }
            onValueChange = {() => {
              setSubs_auto(!subs_auto)
              setAlterado(true);
            }} 
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={subs_auto ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor = "#3e3e3e"             
          />
        </View>
        {/* Title das marcações */}
        <View style = {stylesCFL.viewLinha}>
          <Text style = {{...stylesCFL.text, fontSize: 24, width: '80%'}}> 
            Marcar na liga: 
          </Text>
        </View>
        {/* Marcar 24s */}
        {/*<View style = {stylesCFL.viewLinha}>
          <Text style = {stylesCFL.text}> 24s de ataque:</Text>
          <Text style = {stylesCFL.textMeno}> { marc24 ? "Sim" : "Não" } </Text>
          <Switch 
            value = { marc24 }
            onValueChange = {() => {
              setMarc24(!marc24);
              setAlterado(true);
            }} 
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={  marc24 ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor = "#3e3e3e"             
          />
          </View>*/}
        {/* Marcar Faltas (Futuro) */}
        {/*<View style = {stylesCFL.viewLinha}>
          <Text style = {stylesCFL.text}> Faltas: </Text>
          <Text style = {stylesCFL.textMeno}> { faltas ? "Sim" : "Não" } </Text>
          <Switch 
            value = { faltas }
            onValueChange = {() => {
              setFaltas(!faltas)
              setAlterado(true);
            }} 
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={faltas ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor = "#3e3e3e"             
          />
        </View>*/}
        {/* Mudar time automaticamente */}
        <View style = {stylesCFL.viewLinha}>
          <Text style = {stylesCFL.text}> Mudar Time: </Text>
          <Text style = {stylesCFL.textMeno}> { auto_troca ? "Sim" : "Não" } </Text>
          <Switch 
            value = { auto_troca }
            onValueChange = {() => {
              setAuto_troca(!auto_troca)
              setAlterado(true);
            }} 
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={auto_troca ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor = "#3e3e3e"             
          />
        </View>
        {/* Rebotes */}
        <View style = {stylesCFL.viewLinha}>
          <Text style = {stylesCFL.text}> Rebotes: </Text>
          <Text style = {stylesCFL.textMeno}> { rebote ? "Sim" : "Não" } </Text>
          <Switch 
            value = { rebote }
            onValueChange = {() => {
              setRebote(!rebote)
              setAlterado(true);
            }} 
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={rebote ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor = "#3e3e3e"             
          />
        </View>
        {/* Assistencias */}
        <View style = {stylesCFL.viewLinha}>
          <Text style = {stylesCFL.text}> Assistências: </Text>
          <Text style = {stylesCFL.textMeno}> { assist ? "Sim" : "Não" } </Text>
          <Switch 
            value = { assist }
            onValueChange = {() => {setAssist(!assist)}} 
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={assist ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor = "#3e3e3e"             
          />
        </View>
        {/* Blocks */}
        <View style = {stylesCFL.viewLinha}>
          <Text style = {stylesCFL.text}> Tocos: </Text>
          <Text style = {stylesCFL.textMeno}> { block ? "Sim" : "Não" } </Text>
          <Switch 
            value = { block }
            onValueChange = {() => {
              setBlock(!block)
              setAlterado(true);
            }} 
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={block ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor = "#3e3e3e"             
          />
        </View>
        {/* Air Ball */}
        <View style = {stylesCFL.viewLinha}>
          <Text style = {stylesCFL.text}> Air Ball: </Text>
          <Text style = {stylesCFL.textMeno}> { airB ? "Sim" : "Não" } </Text>
          <Switch 
            value = { airB }
            onValueChange = {() => {
              setAirB(!airB)
              setAlterado(true);
            }} 
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={airB ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor = "#3e3e3e"             
          />
        </View>
        {/* Roubos (Futuro) */}
        {/*<View style = {stylesCFL.viewLinha}>
          <Text style = {stylesCFL.text}> Roubos: </Text>
          <Text style = {stylesCFL.textMeno}> { roubo ? "Sim" : "Não" } </Text>
          <Switch 
            value = { roubo }
            onValueChange = {() => {
              setRoubo(!roubo)
              setAlterado(true);
            }} 
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={roubo ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor = "#3e3e3e"             
          />
        </View>*/}
        <View style = {stylesCFL.viewLinha}>
          <TouchableOpacity style = {stylesCFL.bttLinha}
            onPress = {() => {
              Alert.alert("Certeza?", "Você realmente deseja deletar está liga? Todos seus jogos serão perdidos!",
              [
                {text: "Deletar", onPress: () => {
                  setLoad(false);
                  deletarLiga();
                }},
                {text: "Cancelar", onPress: () => {}, style: "cancel"},
              ]);
            }}
          >
            <Text style = {stylesCFL.btt_text}> Deletar Liga </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }  

  async function salveConfigs(){
    confs.marc24      = marc24;    
    confs.selSubs     = subs_auto;  
    confs.faltas      = faltas;
    confs.auto_troca  = auto_troca;
    confs.rebote      = rebote;
    confs.assist      = assist;
    confs.block       = block;
    confs.airB        = airB;
    confs.roubo       = roubo;
    // salvar as novas configurações no banco de dados
    if(alterado){
      console.log("ENTROU -> confis", confs);
      let reqs = await fetch(configBD.urlRootNode+"salvar_conf_liga", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idLiga : route.params.liga.id,
          config : confs,
        }),
      });
      let ress = await reqs.json();
      if(ress.status){
        // salvar nova conf da liga e salvar no banco local
        Alert.alert("Sucesso", "Configurações salvas com sucesso!");
        //console.log("Salvou suas configurações");
        SalveData(banco);
        setAlterado(false);
      } else {
        Alert.alert("Erro", "Não foi possível salvar as configurações");
        console.log("Erro", ress.msg);
      }
    }
  }

  async function deletarLiga(){

    let reqs = await fetch(configBD.urlRootNode+"deletar_liga", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idLiga : route.params.liga.id,
      }),
    });
    let ress = await reqs.json();
    if(ress.status){
      // deletar liga e salvar no banco local
      Alert.alert("Sucesso", "Liga deletada com sucesso!");
      SalveData(banco);
      navigation.navigate("MainP");
    } else {

    }

  }

  return(
    <View style={stylesCFL.telaFull}>
      <StatusBar 
        hidden = {false}
        barStyle="ligth-content"
      />
      {load && 
        <ActivityIndicator
          style = {{position : "absolute", top : '50%', right: "50%", }}
          size = "large"
          color = {Cor.sec}
        />
      }
      <View style = {stylesCFL.viewTopo}>
        <Image style = {stylesCFL.imgPf}
          source = {RetornaImg(banco.userMaster.image)}
          resizeMode="cover"
        />
        <View style = {stylesCFL.viewInfos}>
          <Text style = {stylesCFL.textInfos}>
              {banco.userMaster.nome} | Jgs 3x3: {banco.userMaster.scr3x3.jogos} | Jgs 5x5: {banco.userMaster.scr5x5.jogos}
          </Text>
          <Text style = {stylesCFL.textInfos}>
            FG: {banco.userMaster.scrT.a_FG.toFixed(1)} | 2Pts: {banco.userMaster.scrT.a_2pts} | 3Pts: {banco.userMaster.scrT.a_3pts}
          </Text>
        </View>          
      </View>
      <Text style={stylesCFL.text_title}>Configurações da Liga</Text>
      <ScrollView style = {stylesCFL.scrooll}>
        {render_configs()}
      </ScrollView>
      <TouchableOpacity style = {stylesCFL.bttSave}
        onPress = {() => {
          salveConfigs();
        }}
      >
        <Text style = {stylesCFL.btt_text}> Salvar </Text>
      </TouchableOpacity>
      
    </View>
  );
}
