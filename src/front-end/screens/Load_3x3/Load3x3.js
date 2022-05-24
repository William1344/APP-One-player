import React, {useState, useEffect} from "react";
import styles3x3 from "./styles3x3";
import Icon from 'react-native-vector-icons/Entypo';
import { 
  ActivityIndicator, View, Text, StatusBar, TouchableOpacity, Alert, 
  Modal, FlatList, BackHandler, 
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {conf_Liga} from '../../styles/configsApp';
import {Cor, styles, icons} from "../../styles/index_S";
import configDB from "../../../../config/config.json";
import AsyncStorage from "@react-native-async-storage/async-storage";
import banco from '../../../back-end2/banco_local';
import SalveData from '../../../back-end2/SalveData';

var tA = new Array(), tB = new Array();
var timeA, timeB, timeS, nomeTA, nomeTB;

export default function Load3x3({route}){
  // tratando botão voltar
  function backAction(){
    Alert.alert("Sair do Jogo?", "Você deseja sair do jogo e calcela-lo??", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel"
      },
      { text: "Sim", onPress: () =>  navigation.replace("NovoJg",{
        liga    : route.params.liga,
        dest    : route.params.dest,
      })}
    ]);
    return true;
  }
  // realiza sempre que iniciar e no return sempre que desrenderizar!
  useEffect(() => {
    //_zeraStates()
    //set_plcA(0);
    //set_plcB(0);
    timeA = route.params.tmA;
    timeB = route.params.tmB;
    timeS = route.params.tmS;
    nomeTA = route.params.nomeA;
    nomeTB = route.params.nomeB;   

    BackHandler.addEventListener("hardwareBackPress", backAction);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backAction);
    }
  },[]);

  function _zeraStates(){
    setA1_2pts(0);
    setA2_2pts(0);
    setA3_2pts(0);
    setB1_2pts(0);
    setB2_2pts(0);
    setB3_2pts(0);
    
    setA1_3pts(0);
    setA2_3pts(0);
    setA3_3pts(0);
    setB1_3pts(0);
    setB2_3pts(0);
    setB3_3pts(0);
    
    setA1_Reb(0);
    setA2_Reb(0);
    setA3_Reb(0);
    setB1_Reb(0);
    setB2_Reb(0);
    setB3_Reb(0);
    
    setA1_Asst(0);
    setA2_Asst(0);
    setA3_Asst(0);
    setB1_Asst(0);
    setB2_Asst(0);
    setB3_Asst(0);
    
    setA1_2pts(0);
    setA2_2pts(0);
    setA3_2pts(0);
    setB1_2pts(0);
    setB2_2pts(0);
    setB3_2pts(0);
    
    setA1_Blk(0);
    setA2_Blk(0);
    setA3_Blk(0);
    setB1_Blk(0);
    setB2_Blk(0);
    setB3_Blk(0);
    
    setA1_AirB(0);
    setA2_AirB(0);
    setA3_AirB(0);
    setB1_AirB(0);
    setB2_AirB(0);
    setB3_AirB(0);        
  }
  const conf = route.params.liga.confLiga;
  const navigation = useNavigation();
  // useStates da tela
  const [time, setTime]       = useState(true); // true -> time A
  const [inc, setInc]         = useState(true); // true -> incrementa scores
  const [icon_inc, setIcon_i] = useState(icons.incrementa);
  const [load, setLoad]       = useState(false); // true -> carregando
  // states para jogador

  // 2pts Time A
  const [A1_2pts, setA1_2pts] = useState(0);
  const [A2_2pts, setA2_2pts] = useState(0);
  const [A3_2pts, setA3_2pts] = useState(0);
  
  // 2pts Time B
  const [B1_2pts, setB1_2pts] = useState(0);
  const [B2_2pts, setB2_2pts] = useState(0);
  const [B3_2pts, setB3_2pts] = useState(0);
  
  // 3pts Time A
  const [A1_3pts, setA1_3pts] = useState(0);
  const [A2_3pts, setA2_3pts] = useState(0);
  const [A3_3pts, setA3_3pts] = useState(0);
  
  // 3pts Time B
  const [B1_3pts, setB1_3pts] = useState(0);
  const [B2_3pts, setB2_3pts] = useState(0);
  const [B3_3pts, setB3_3pts] = useState(0);
  
  // Rebotes Time A
  const [A1_Reb, setA1_Reb]   = useState(0);
  const [A2_Reb, setA2_Reb]   = useState(0);
  const [A3_Reb, setA3_Reb]   = useState(0);
  
  // Rebotes Time B
  const [B1_Reb, setB1_Reb]   = useState(0);
  const [B2_Reb, setB2_Reb]   = useState(0);
  const [B3_Reb, setB3_Reb]   = useState(0);
  
  // Assistencia Time A
  const [A1_Asst, setA1_Asst] = useState(0);
  const [A2_Asst, setA2_Asst] = useState(0);
  const [A3_Asst, setA3_Asst] = useState(0);
  
  // Assistencia Time B
  const [B1_Asst, setB1_Asst] = useState(0);
  const [B2_Asst, setB2_Asst] = useState(0);
  const [B3_Asst, setB3_Asst] = useState(0);
  
  // Tocos Time A
  const [A1_Blk, setA1_Blk]   = useState(0);
  const [A2_Blk, setA2_Blk]   = useState(0);
  const [A3_Blk, setA3_Blk]   = useState(0);
  
  // Tocos Time B
  const [B1_Blk, setB1_Blk]   = useState(0);
  const [B2_Blk, setB2_Blk]   = useState(0);
  const [B3_Blk, setB3_Blk]   = useState(0);
  
  // Air ball Time A
  const [A1_AirB, setA1_AirB] = useState(0);
  const [A2_AirB, setA2_AirB] = useState(0);
  const [A3_AirB, setA3_AirB] = useState(0);
  
  // Air ball Time B
  const [B1_AirB, setB1_AirB] = useState(0);
  const [B2_AirB, setB2_AirB] = useState(0);
  const [B3_AirB, setB3_AirB] = useState(0);
  // sets placar!
  const [plcA, set_plcA]      = useState(0);
  const [plcB, set_plcB]      = useState(0);
  // seta cores dos botões
  const [corA, setCorA]       = useState(Cor.btt_sel);
  const [corB, setCorB]       = useState(Cor.btt);
  
  const [_modal, set_modal]   = useState(false); // solicita que o modal apareça
  const [_subst, set_tSub]    = useState("");     // variavel para setar o nome do jogador a ser subs no Modal
  const [_pos_subs, setPSub]  = useState([]);

  function seta_A1(){
    setPSub([true, 0]);
    route.params.tmA[0].a_2pts  = A1_2pts;
    route.params.tmA[0].a_3pts  = A1_3pts;
    route.params.tmA[0].reb     = A1_Reb;
    route.params.tmA[0].asst    = A1_Asst;
    route.params.tmA[0].blk     = A1_Blk;
    route.params.tmA[0].roub    = 0;
    route.params.tmA[0].airB    = A1_AirB;
  }

  function seta_A2(){
    setPSub([true, 1]);
    route.params.tmA[1].a_2pts  = A2_2pts;
    route.params.tmA[1].a_3pts  = A2_3pts;
    route.params.tmA[1].reb     = A2_Reb;
    route.params.tmA[1].asst    = A2_Asst;
    route.params.tmA[1].blk     = A2_Blk;
    route.params.tmA[1].roub    = 0;
    route.params.tmA[1].airB    = A2_AirB;
  }

  function seta_A3(){
    setPSub([true, 2]);
    route.params.tmA[2].a_2pts  = A3_2pts;
    route.params.tmA[2].a_3pts  = A3_3pts;
    route.params.tmA[2].reb     = A3_Reb;
    route.params.tmA[2].asst    = A3_Asst;
    route.params.tmA[2].blk     = A3_Blk;
    route.params.tmA[2].roub    = 0;
    route.params.tmA[2].airB    = A3_AirB;
  }

  function seta_B1(){
    setPSub([false, 0]);
    route.params.tmB[0].a_2pts  = B1_2pts;
    route.params.tmB[0].a_3pts  = B1_3pts;
    route.params.tmB[0].reb     = B1_Reb;
    route.params.tmB[0].asst    = B1_Asst;
    route.params.tmB[0].blk     = B1_Blk;
    route.params.tmB[0].roub    = 0;
    route.params.tmB[0].airB    = B1_AirB;
  }

  function seta_B2(){
    setPSub([false, 1]);
    route.params.tmB[1].a_2pts  = B2_2pts;
    route.params.tmB[1].a_3pts  = B2_3pts;
    route.params.tmB[1].reb     = B2_Reb;
    route.params.tmB[1].asst    = B2_Asst;
    route.params.tmB[1].blk     = B2_Blk;
    route.params.tmB[1].roub    = 0;
    route.params.tmB[1].airB    = B2_AirB;
  }

  function seta_B3(){
    setPSub([false, 2]);
    route.params.tmB[2].a_2pts  = B3_2pts;
    route.params.tmB[2].a_3pts  = B3_3pts;
    route.params.tmB[2].reb     = B3_Reb;
    route.params.tmB[2].asst    = B3_Asst;
    route.params.tmB[2].blk     = B3_Blk;
    route.params.tmB[2].roub    = 0;
    route.params.tmB[2].airB    = B3_AirB;
  }

  function setaStatesA(){
    switch (_pos_subs[1]) {
      case 0:
        setA1_2pts(route.params.tmA[0].a_2pts);
        setA1_3pts(route.params.tmA[0].a_3pts);
        setA1_Reb(route.params.tmA[0].reb);
        setA1_Asst(route.params.tmA[0].asst);
        setA1_Blk(route.params.tmA[0].blk);
        setA1_AirB(route.params.tmA[0].airB);
        break;
      case 1:
        setA2_2pts(route.params.tmA[1].a_2pts);
        setA2_3pts(route.params.tmA[1].a_3pts);
        setA2_Reb(route.params.tmA[1].reb);
        setA2_Asst(route.params.tmA[1].asst);
        setA2_Blk(route.params.tmA[1].blk);
        setA2_AirB(route.params.tmA[1].airB);
        break;
      case 2:
        setA3_2pts(route.params.tmA[2].a_2pts);
        setA3_3pts(route.params.tmA[2].a_3pts);
        setA3_Reb(route.params.tmA[2].reb);
        setA3_Asst(route.params.tmA[2].asst);
        setA3_Blk(route.params.tmA[2].blk);
        setA3_AirB(route.params.tmA[2].airB);
        break;
      default:
        break;
    }
  }

  function setaStatesB(){
    switch (_pos_subs[1]) {
      case 0:
        setB1_2pts(route.params.tmB[0].a_2pts);
        setB1_3pts(route.params.tmB[0].a_3pts);
        setB1_Reb(route.params.tmB[0].reb);
        setB1_Asst(route.params.tmB[0].asst);
        setB1_Blk(route.params.tmB[0].blk);
        setB1_AirB(route.params.tmB[0].airB);
        break;
      case 1:
        setB2_2pts(route.params.tmB[1].a_2pts);
        setB2_3pts(route.params.tmB[1].a_3pts);
        setB2_Reb(route.params.tmB[1].reb);
        setB2_Asst(route.params.tmB[1].asst);
        setB2_Blk(route.params.tmB[1].blk);
        setB2_AirB(route.params.tmB[1].airB);
        break;
      case 2:
        setB3_2pts(route.params.tmB[2].a_2pts);
        setB3_3pts(route.params.tmB[2].a_3pts);
        setB3_Reb(route.params.tmB[2].reb);
        setB3_Asst(route.params.tmB[2].asst);
        setB3_Blk(route.params.tmB[2].blk);
        setB3_AirB(route.params.tmB[2].airB);
        break;           
      default:
        break;
    }
  }

  function substituir(item){
    if(_pos_subs[0]){
      route.params.tmS.push(timeA[_pos_subs[1]]);
      let p = route.params.tmS.indexOf(item);
      item.bool_jogou = true;
      timeA[_pos_subs[1]] = item;
      route.params.tmS.splice(p, 1);
      setaStatesA();
    }else{
      route.params.tmS.push(timeB[_pos_subs[1]]);
      let p = route.params.tmS.indexOf(item);
      item.bool_jogou = true;
      timeB[_pos_subs[1]] = item;
      route.params.tmS.splice(p, 1);
      setaStatesB();
    }
    set_modal(false);
  }

  const [seSubs, set_seSubs] = useState(false);

  // variaveis da tela 
  // como será verificado o jogador clutch???
  var jgd_cluth = new Array();
  // inicia a tela sempre que renderizar
  
  // controle do cronometro
      //variaveis
  const [playCro, setPlayCro] = useState(false);
  const [play_paused, setPP]  = useState(icons.play_cro)
  const [seconds, setSeconds] = useState(0);
  const [sec24, setSec24]     = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [cust_Interval , setCust_Interval] = useState()
      // funções de controle.
  function startTime(){
    setCust_Interval(
      setInterval(() => {
        changeTime();
      }, 1000)
    );
  }
  function stopTime(){
    if(cust_Interval){
      clearInterval(cust_Interval);
    }
  }
  function clearTime(){
    stopTime();
    setSeconds(0);
    setMinutes(0);
  }
  function changeTime(){
    setSeconds((prevState) => {
      if(prevState + 1 == 60){
        setMinutes(minutes + 1);
        return 0;
      }
      return prevState + 1;
    })
  }

  // controla o placar
  function renderPlacar(_2pts, a){
    if(inc){
      if(a){
        if(_2pts){
          set_plcA(plcA + 2);
        } else{
          set_plcA(plcA + 3);
        }
      }else {
        if(_2pts){
          set_plcB(plcB + 2);
        } else{
          set_plcB(plcB + 3);
        }
      }
    } else {
      if(a){
        if(_2pts){
          set_plcA(plcA - 2);
        } else{
          set_plcA(plcA - 3);
        }
      }else {
        if(_2pts){
          set_plcB(plcB - 2);
        } else{
          set_plcB(plcB - 3);
        }
      }
    }

  }
  
  // seleciona o time a ser renderizado A || B
  function renderTime(){
      if(time){        
          return(
              <View style = {styles3x3.viewT}>   
                {/* timeA[0] */}
                <View style = {styles3x3.viewComp}> 
                  <TouchableOpacity style = {styles3x3.bttNome}
                    onPress = {() => {
                      seta_A1();
                      set_tSub(timeA[0].apelido);
                      set_modal(true);
                    }}
                  >
                    <Text style = {styles3x3.textNome}> {route.params.tmA[0].apelido} </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style = {styles3x3.bttScor}
                    onPress = {() => {
                      if(inc) setA1_2pts(A1_2pts + 1)
                      else setA1_2pts(A1_2pts - 1)
                      renderPlacar(true, true);
                    }}
                  >
                    <Text style = {styles3x3.textScor}> {A1_2pts}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style = {styles3x3.bttScor}
                    onPress = {() => { 
                      if(inc) setA1_3pts(A1_3pts + 1)
                      else setA1_3pts(A1_3pts - 1)
                      renderPlacar(false, true);
                    }}
                  >
                    <Text style = {styles3x3.textScor}> {A1_3pts} </Text>
                  </TouchableOpacity>

                  {conf.rebote && <TouchableOpacity style = {styles3x3.bttScor}
                    onPress = {() => {
                      if(inc) setA1_Reb(A1_Reb + 1);
                      else setA1_Reb(A1_Reb - 1);
                    }}
                  >
                    <Text style = {styles3x3.textScor}> {A1_Reb} </Text>
                  </TouchableOpacity>}

                  {conf.assist && <TouchableOpacity style = {styles3x3.bttScor}
                    onPress = {() => {
                      if(inc) setA1_Asst(A1_Asst + 1);
                      else setA1_Asst(A1_Asst - 1);
                    }}
                  >
                    <Text style = {styles3x3.textScor}> {A1_Asst} </Text>
                  </TouchableOpacity>}

                  {conf.block && <TouchableOpacity style = {styles3x3.bttScor}
                    onPress = {() => {
                      if(inc) setA1_Blk(A1_Blk+ 1);
                      else setA1_Blk(A1_Blk - 1);
                    }}
                  >
                    <Text style = {styles3x3.textScor}> {A1_Blk} </Text>
                  </TouchableOpacity>}

                  {conf.airB && <TouchableOpacity style = {styles3x3.bttScor}
                    onPress = {() => {
                      if(inc) setA1_AirB(A1_AirB + 1);
                      else setA1_AirB(A1_AirB - 1);
                    }}
                  >
                      <Text style = {styles3x3.textScor}> {A1_AirB} </Text>
                  </TouchableOpacity>}
                </View>

                {/* timeA[1] */}
                <View style = {styles3x3.viewComp}> 
                  <TouchableOpacity style = {styles3x3.bttNome}
                    onPress = {() => {
                      seta_A2();
                      set_tSub(timeA[1].apelido);
                      set_modal(true);
                    }}
                  >
                    <Text style = {styles3x3.textNome}> {route.params.tmA[1].apelido} </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style = {styles3x3.bttScor}
                    onPress = {() => {
                      if(inc) setA2_2pts(A2_2pts + 1)
                      else setA2_2pts(A2_2pts - 1)
                      renderPlacar(true, true);
                    }}
                  >
                    <Text style = {styles3x3.textScor}> {A2_2pts}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style = {styles3x3.bttScor}
                    onPress = {() => { 
                      if(inc) setA2_3pts(A2_3pts + 1)
                      else setA2_3pts(A2_3pts - 1)
                      renderPlacar(false, true);
                    }}
                  >
                    <Text style = {styles3x3.textScor}> {A2_3pts} </Text>
                  </TouchableOpacity>

                  {conf.rebote && <TouchableOpacity style = {styles3x3.bttScor}
                    onPress = {() => {
                      if(inc) setA2_Reb(A2_Reb + 1);
                      else setA2_Reb(A2_Reb - 1);
                    }}
                  >
                    <Text style = {styles3x3.textScor}> {A2_Reb} </Text>
                  </TouchableOpacity>}

                  {conf.assist && <TouchableOpacity style = {styles3x3.bttScor}
                    onPress = {() => {
                      if(inc) setA2_Asst(A2_Asst + 1);
                      else setA2_Asst(A2_Asst - 1);
                    }}
                  >
                    <Text style = {styles3x3.textScor}> {A2_Asst} </Text>
                  </TouchableOpacity>}

                  {conf.block && <TouchableOpacity style = {styles3x3.bttScor}
                    onPress = {() => {
                      if(inc) setA2_Blk(A2_Blk+ 1);
                      else setA2_Blk(A2_Blk - 1);
                    }}
                  >
                    <Text style = {styles3x3.textScor}> {A2_Blk} </Text>
                  </TouchableOpacity>}

                  {conf.airB && <TouchableOpacity style = {styles3x3.bttScor}
                    onPress = {() => {
                      if(inc) setA2_AirB(A2_AirB + 1);
                      else setA2_AirB(A2_AirB - 1);
                    }}
                  >
                    <Text style = {styles3x3.textScor}> {A2_AirB} </Text>
                  </TouchableOpacity>}
                </View>
                
                {/* timeA[2] */}
                <View style = {styles3x3.viewComp}> 
                  <TouchableOpacity style = {{
                    ...styles3x3.bttNome, borderBottomLeftRadius: 30
                  }}
                    onPress = {() => {
                      seta_A3();
                      set_tSub(timeA[2].apelido);
                      set_modal(true);
                    }}
                  >
                    <Text style = {styles3x3.textNome}> {route.params.tmA[2].apelido} </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style = {styles3x3.bttScor}
                    onPress = {() => {
                      if(inc) setA3_2pts(A3_2pts + 1)
                      else setA3_2pts(A3_2pts - 1)
                      renderPlacar(true, true);
                    }}
                  >
                    <Text style = {styles3x3.textScor}> {A3_2pts}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style = {styles3x3.bttScor}
                    onPress = {() => { 
                      if(inc) setA3_3pts(A3_3pts + 1)
                      else setA3_3pts(A3_3pts - 1)
                      renderPlacar(false, true);
                    }}
                  >
                    <Text style = {styles3x3.textScor}> {A3_3pts} </Text>
                  </TouchableOpacity>

                  {conf.rebote && <TouchableOpacity style = {styles3x3.bttScor}
                    onPress = {() => {
                      if(inc) setA3_Reb(A3_Reb + 1);
                      else setA3_Reb(A3_Reb - 1);
                    }}
                  >
                    <Text style = {styles3x3.textScor}> {A3_Reb} </Text>
                  </TouchableOpacity>}

                  {conf.assist && <TouchableOpacity style = {styles3x3.bttScor}
                    onPress = {() => {
                        if(inc) setA3_Asst(A3_Asst + 1);
                        else setA3_Asst(A3_Asst - 1);
                    }}
                  >
                    <Text style = {styles3x3.textScor}> {A3_Asst} </Text>
                  </TouchableOpacity>}

                  {conf.block && <TouchableOpacity style = {styles3x3.bttScor}
                    onPress = {() => {
                      if(inc) setA3_Blk(A3_Blk+ 1);
                      else setA3_Blk(A3_Blk - 1);
                    }}
                  >
                    <Text style = {styles3x3.textScor}> {A3_Blk} </Text>
                  </TouchableOpacity>}

                  {conf.airB && <TouchableOpacity style = {{...styles3x3.bttScor, borderBottomRightRadius: 30}}
                    onPress = {() => {
                      if(inc) setA3_AirB(A3_AirB + 1);
                      else setA3_AirB(A3_AirB - 1);
                    }}
                  >
                    <Text style = {styles3x3.textScor}> {A3_AirB} </Text>
                  </TouchableOpacity> }
                </View>
              </View>
          );
      } else{
          return(
              <View style = {styles3x3.viewT}>
                  {/* timeB[0] */}
                  <View style = {styles3x3.viewComp}> 
                    <TouchableOpacity style = {styles3x3.bttNome}
                        onPress = {() => {
                            seta_B1();
                            set_tSub(timeB[0].apelido);
                            set_modal(true);
                        }}
                    >
                        <Text style = {styles3x3.textNome}> {route.params.tmB[0].apelido} </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles3x3.bttScor}
                        onPress = {() => {
                            if(inc) setB1_2pts(B1_2pts + 1)
                            else setB1_2pts(B1_2pts - 1)
                            renderPlacar(true, false);
                        }}
                    >
                        <Text style = {styles3x3.textScor}> {B1_2pts}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles3x3.bttScor}
                        onPress = {() => { 
                            if(inc) setB1_3pts(B1_3pts + 1)
                            else setB1_3pts(B1_3pts - 1)
                            renderPlacar(false, false);
                        }}
                    >
                        <Text style = {styles3x3.textScor}> {B1_3pts} </Text>
                    </TouchableOpacity>

                    {conf.rebote && <TouchableOpacity style = {styles3x3.bttScor}
                        onPress = {() => {
                            if(inc) setB1_Reb(B1_Reb + 1);
                            else setB1_Reb(B1_Reb - 1);
                        }}
                    >
                        <Text style = {styles3x3.textScor}> {B1_Reb} </Text>
                    </TouchableOpacity>}

                    {conf.assist && <TouchableOpacity style = {styles3x3.bttScor}
                        onPress = {() => {
                            if(inc) setB1_Asst(B1_Asst + 1);
                            else setB1_Asst(B1_Asst - 1);
                        }}
                    >
                        <Text style = {styles3x3.textScor}> {B1_Asst} </Text>
                    </TouchableOpacity>}

                    {conf.block && <TouchableOpacity style = {styles3x3.bttScor}
                        onPress = {() => {
                            if(inc) setB1_Blk(B1_Blk + 1);
                            else setB1_Blk(B1_Blk - 1);
                        }}
                    >
                        <Text style = {styles3x3.textScor}> {B1_Blk} </Text>
                    </TouchableOpacity>}

                    {conf.airB && <TouchableOpacity style = {styles3x3.bttScor}
                        onPress = {() => {
                            if(inc) setB1_AirB(B1_AirB + 1);
                            else setB1_AirB(B1_AirB - 1);
                        }}
                    >
                        <Text style = {styles3x3.textScor}> {B1_AirB} </Text>
                    </TouchableOpacity>}
                  </View>

                  {/* timeB[1] */}
                  <View style = {styles3x3.viewComp}> 
                    <TouchableOpacity style = {styles3x3.bttNome}
                        onPress = {() => {
                            seta_B2();
                            set_tSub(timeB[1].apelido);
                            set_modal(true);
                        }}
                    >
                        <Text style = {styles3x3.textNome}> {route.params.tmB[1].apelido} </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles3x3.bttScor}
                        onPress = {() => {
                            if(inc) setB2_2pts(B2_2pts + 1)
                            else setB2_2pts(B2_2pts - 1)
                            renderPlacar(true, false);
                        }}
                    >
                        <Text style = {styles3x3.textScor}> {B2_2pts}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles3x3.bttScor}
                        onPress = {() => { 
                            if(inc) setB2_3pts(B2_3pts + 1)
                            else setB2_3pts(B2_3pts - 1)
                            renderPlacar(false, false);
                        }}
                    >
                        <Text style = {styles3x3.textScor}> {B2_3pts} </Text>
                    </TouchableOpacity>

                    {conf.rebote && <TouchableOpacity style = {styles3x3.bttScor}
                        onPress = {() => {
                            if(inc) setB2_Reb(B2_Reb + 1);
                            else setB2_Reb(B2_Reb - 1);
                        }}
                    >
                        <Text style = {styles3x3.textScor}> {B2_Reb} </Text>
                    </TouchableOpacity>}

                    {conf.assist && <TouchableOpacity style = {styles3x3.bttScor}
                        onPress = {() => {
                            if(inc) setB2_Asst(B2_Asst + 1);
                            else setB2_Asst(B2_Asst - 1);
                        }}
                    >
                        <Text style = {styles3x3.textScor}> {B2_Asst} </Text>
                    </TouchableOpacity>}

                    {conf.block && <TouchableOpacity style = {styles3x3.bttScor}
                        onPress = {() => {
                            if(inc) setB2_Blk(B2_Blk+ 1);
                            else setB2_Blk(B2_Blk - 1);
                        }}
                    >
                        <Text style = {styles3x3.textScor}> {B2_Blk} </Text>
                    </TouchableOpacity>}

                    {conf.airB && <TouchableOpacity style = {styles3x3.bttScor}
                        onPress = {() => {
                            if(inc) setB2_AirB(B2_AirB + 1);
                            else setB2_AirB(B2_AirB - 1);
                        }}
                    >
                        <Text style = {styles3x3.textScor}> {B2_AirB} </Text>
                    </TouchableOpacity>}
                  </View>
                  
                  {/* timeB[2] */}    
                  <View style = {styles3x3.viewComp}> 
                    <TouchableOpacity style = {{...styles3x3.bttNome, borderBottomLeftRadius: 30}}
                        onPress = {() => {
                            seta_B3();
                            set_tSub(timeB[2].apelido);
                            set_modal(true);
                        }}
                    >
                        <Text style = {styles3x3.textNome}> {route.params.tmB[2].apelido} </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles3x3.bttScor}
                        onPress = {() => {
                            if(inc) setB3_2pts(B3_2pts + 1)
                            else setB3_2pts(B3_2pts - 1)
                            renderPlacar(true, false);
                        }}
                    >
                        <Text style = {styles3x3.textScor}> {B3_2pts}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles3x3.bttScor}
                        onPress = {() => { 
                            if(inc) setB3_3pts(B3_3pts + 1)
                            else setB3_3pts(B3_3pts - 1)
                            renderPlacar(false, false);
                        }}
                    >
                        <Text style = {styles3x3.textScor}> {B3_3pts} </Text>
                    </TouchableOpacity>

                    {conf.rebote && <TouchableOpacity style = {styles3x3.bttScor}
                        onPress = {() => {
                            if(inc) setB3_Reb(B3_Reb + 1);
                            else setB3_Reb(B3_Reb - 1);
                        }}
                    >
                        <Text style = {styles3x3.textScor}> {B3_Reb} </Text>
                    </TouchableOpacity>}

                    {conf.assist && <TouchableOpacity style = {styles3x3.bttScor}
                        onPress = {() => {
                            if(inc) setB3_Asst(B3_Asst + 1);
                            else setB3_Asst(B3_Asst - 1);
                        }}
                    >
                        <Text style = {styles3x3.textScor}> {B3_Asst} </Text>
                    </TouchableOpacity>}

                    {conf.block && <TouchableOpacity style = {styles3x3.bttScor}
                      onPress = {() => {
                        if(inc) setB3_Blk(B3_Blk+ 1);
                        else setB3_Blk(B3_Blk - 1);
                      }}
                    >
                      <Text style = {styles3x3.textScor}> {B3_Blk} </Text>
                    </TouchableOpacity>}

                    {conf.airB && <TouchableOpacity style = {{...styles3x3.bttScor, borderBottomRightRadius: 30}}
                      onPress = {() => {
                        if(inc) setB3_AirB(B3_AirB + 1);
                        else setB3_AirB(B3_AirB - 1);
                      }}
                    >
                      <Text style = {styles3x3.textScor}> {B3_AirB} </Text>
                    </TouchableOpacity>}
                  </View>
              </View>
          );
      }
  }

  // renderiza a caixa de confirmação 
  // tem certeza que quer finalizar o jogo?
  function render_end(){
      Alert.alert(
        "Finalizar Jogo",
        "Você deseja finalizar o jogo?",
        [{
          text: "Cancel",
          onPress: () => {},
          style: "cancel"
        },
        {
          text: "Ok",
          onPress: ()=>{
            setLoad(true);
            end_game()
          }
        }]
      );
  }   
  // se sim, finaliza o jogo e vai para visualização do jogo!
  async function end_game(){  
    if(plcA > plcB)      for(let jgd of timeA) jgd.bool_dec = true;    
    else                 for(let jgd of timeB) jgd.bool_dec = true;
    console.log("Aqui foi!");
    seta_A1();  seta_B1();
    seta_A2();  seta_B2();
    seta_A3();  seta_B3();
    //cria o jogo.
    let tmS = [];
    for(let jgd of timeS) if(jgd.bool_jogou) tmS.push(jgd); 
    let dt = new Date();
    let dd = ("" + dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear().toString()[2] + dt.getFullYear().toString()[3]);
    let hr = ("" + dt.getHours() + ":" + dt.getMinutes())
    const rotul = "Jogo " + (route.params.liga.listJgs3x3.length + 1) + " | " + dd + " | "  + hr; 
    // criar objeto jogo para enviar ao banco de dados
    let jg = {
        
      Ligas_idLigas   : route.params.liga.id,
      rotulo          : rotul,
      tipo_Jogo       : "3x3",
      nomeTA          : route.params.nomeA,
      nomeTB          : route.params.nomeB,
      plcA            : plcA,
      plcB            : plcB,
    };

    // salvar jogo no banco de dados
    // requisição para salvar linha jogo e receber o id do jogo!
    let reqs = await fetch(configDB.urlRootNode+"adiciona_jogo",{
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userM   : banco.userMaster,
        jogo    : jg,
        timeA   : timeA,
        timeB   : timeB,
        timeS   : tmS,
      })
      //Ligas_idLigas, rotulo, tipo, nomeTA, nomeTB, plcA, plcB, dataCreate
    });
    let resp = await reqs.json();
    //console.log("Resposta do servidor -> \n -> ",resp);
    if(resp.status){
      // o banco deve retorna o objeto liga já com o jogo computado!
      //return res.send({status : true , userM : userMM, liga: liga, msg : "Jogo armazenado com sucesso!"});
      banco.userMaster = resp.userM;
      
      let pos=null;
      for(let lg of banco.ligas){
        if(lg.id == resp.liga.id){
          console.log("Encontrou liga!\n");
          pos = banco.ligas.indexOf(lg);           
          break;
        }
      }
      if(pos != null){
        banco.ligas[pos] = resp.liga; 
      }
      SalveData(banco);
      setLoad(false);
      navigation.replace("ViewJG3", {
        game    : resp.game,
        de_onde : true,
        liga    : resp.liga
      });
    }
      
  }

  const Comp_FL = function({item}){
    return(
      <TouchableOpacity style = {styles3x3.btt_FL}
        onPress = {() => {substituir(item)}}
      >
        <Text style = {styles3x3.textFL}>{item.apelido}</Text>
      </TouchableOpacity>
    );
  }
  
  // renderização da tela Load3x3
  return(
      <View style = {styles3x3.telaFull}>
        <StatusBar
          hidden = {true}
          barStyle= 'light-content'
        />
        {load && 
          <ActivityIndicator
            style = {{position : "absolute", top : '50%', right: "50%", }}
            size = "large"
            color = {Cor.sec}
          />
        }
          <View style = {styles3x3.viewTop}>
            <View style = {styles3x3.viewCro}>
              <View style = {styles3x3.viewNume}>
                <Text style = {styles3x3.textCro}>  
                  Tempo: {minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}
                </Text> 
              </View>
              <View style = {styles3x3.view_Setings}>
                <TouchableOpacity style = {styles3x3.button_S}
                  onPress = {() => {
                    if(!playCro) {
                      setPlayCro(true);
                      setPP(icons.play_cro);
                      stopTime();
                    }
                    else {
                      setPlayCro(false);
                      setPP(icons.paused_cro);
                      startTime();
                    }
                  }}
                >
                    <Icon
                      name = {play_paused}
                      size = {40}
                      color = {Cor.icons_cor}
                    /> 
                </TouchableOpacity>
                  <TouchableOpacity style = {styles3x3.button_S}
                    onPress = {() => {
                      clearTime();
                      setPlayCro(true);
                      setPP(icons.play_cro);
                    }}
                  >
                    <Icon
                      name = {icons.stop}
                      size = {40}
                      color = {Cor.icons_cor}
                    /> 
                </TouchableOpacity>
                <TouchableOpacity style = {styles3x3.button_S}
                  onPress = {() => {
                    if(inc){
                      setIcon_i(icons.decrementa)
                      setInc(false);
                    } else{
                      setIcon_i(icons.incrementa)
                      setInc(true);
                    }  
                  }}
                >
                  <Icon
                    name = {icon_inc}
                    size = {40}
                    color = {Cor.icons_cor}
                  /> 
                </TouchableOpacity>
              </View>
            </View>
            <View style = {styles3x3.viewPlacar}>
              <Text style = {styles3x3.textPla}> {route.params.rotulo} </Text>
              <View style = {styles3x3.viewP}>
                <Text style = {styles3x3.textVP_times}> {route.params.nomeA} </Text>
                <Text style = {styles3x3.textVP_}> {plcA} </Text>
                <Text style = {styles3x3.textVP_}> Vs. </Text>
                <Text style = {styles3x3.textVP_}> {plcB} </Text>
                <Text style = {styles3x3.textVP_times}> {route.params.nomeB} </Text>
              </View>
            </View>
          </View>
          <View style = {styles3x3.viewTime}>
            <View style = {styles3x3.viewSelect_Time}>
              <TouchableOpacity style = {{
                ...styles3x3.btt_SelTime,
                backgroundColor: corA
              }}
                onPress={() => {
                  setTime(true)
                  setCorA(Cor.btt_sel)
                  setCorB(Cor.btt)
                }}
              >
                <Text style = {styles3x3.textBtt}> Time A </Text>
              </TouchableOpacity>
              <TouchableOpacity style = {{
                ...styles3x3.btt_SelTime,
                backgroundColor: corB,
              }}
                onPress = {() => {
                  setTime(false)
                  setCorA(Cor.btt)
                  setCorB(Cor.btt_sel)
                }}
              >
                  <Text style = {styles3x3.textBtt}> Time B </Text>
              </TouchableOpacity>
            </View>
            <View style = {styles3x3.viewTabJog}>
              <View style = {styles3x3.viewCab}> 
                <Text style = {styles3x3.bttNome}> Jogador </Text>
                <Text style = {styles3x3.bttScor}> 2Pts </Text>
                <Text style = {styles3x3.bttScor}> 3Pts </Text>
                { conf.rebote   && <Text style = {styles3x3.bttScor}> Reb </Text>}
                { conf.assist   && <Text style = {styles3x3.bttScor}> Asst </Text>}
                { conf.block    && <Text style = {styles3x3.bttScor}> Blk </Text>}
                { conf.airB     && <Text style = {styles3x3.bttScor}> AirB </Text>}
              </View>
              <View style = {styles3x3.viewJog}>
                {renderTime()}
              </View>
            </View>
          </View>
          <TouchableOpacity style = {styles3x3.bttFim}
            onPress = {() => { render_end() }}
          >
            <Text style = {styles3x3.textBttFim}> Finalizar </Text>
          </TouchableOpacity>

          <Modal 
            animationType="slide"
            transparent={true}
            visible={_modal}
            onRequestClose={
              () => {set_modal(false)}
            }
          >
            <View style = {styles3x3.viewFullModal}>
            <View style = {styles3x3.viewModal_subsT}>
              <Text style = {styles3x3.title_modal}>Substituir: {_subst}</Text>
              <View style = {styles3x3.viewFlat}>
                <FlatList style = {{flex:1, width: '98%'}}
                  data = {route.params.tmS}
                  renderItem = {Comp_FL}
                  keyExtractor = {(item) => {item.id_User}}
                />
              </View>
            </View>
            </View>
          </Modal> 
      </View>
  );
}
