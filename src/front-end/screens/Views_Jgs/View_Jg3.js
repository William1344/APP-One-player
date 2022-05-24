import React, {useState, useEffect} from "react";
import stylesV3 from "./stylesVJ";
import { View, Text, StatusBar, BackHandler, TouchableOpacity, Alert} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {conf_Liga} from '../../styles/configsApp';
import {Cor} from "../../styles/index_S";
import banco from "../../../back-end2/banco_local";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ViewGame_3x3({route}){
    const navigation = useNavigation();
    // useStates da tela
    const [time, setTime] = useState(true);
    const [corA, setCorA] = useState(Cor.btt_sel);
    const [corB, setCorB] = useState(Cor.btt);
    
    var timeA   = route.params.game.timeA;
    var timeB   = route.params.game.timeB;
    var nomeTA  = route.params.game.nomeTA;
    var nomeTB  = route.params.game.nomeTB;
    var plcA    = route.params.game.plcA;
    var plcB    = route.params.game.plcB;
    
    async function backAction(){
        if(route.params.de_onde){
            navigation.replace("MainL",{
                liga    :   route.params.liga,
                dest    :   await montarArrayDest(),
            });
        } else {
            navigation.replace("List_Jgs",{
                liga    :   route.params.liga,
                dest    :   route.params.dest,
            });
        }
        
          return true;
    }

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction);
        return () => BackHandler.removeEventListener("hardwareBackPress", backAction);
    },[]);
    
    async function _saveData(bd){
        try {
            const jsonValue = JSON.stringify(bd);
            await AsyncStorage.setItem("Banco", jsonValue);
        } catch (e) {
            console.log("Erro ao salvar dados no dispositivo!");
        }
    }

    async function montarArrayDest(){
        let array = [];
        array.push(route.params.liga.destaques.jgd_Cluth);
        array.push(route.params.liga.destaques.jgd_Fominha);
        array.push(route.params.liga.destaques.jgd_Vencedor);
        array.push(route.params.liga.destaques.jgd_Pontuador);
        array.push(route.params.liga.destaques.jgd_2Pts);
        array.push(route.params.liga.destaques.jgd_3Pts);
        array.push(route.params.liga.destaques.jgd_Reboteiro);
        array.push(route.params.liga.destaques.jgd_Assist);
        array.push(route.params.liga.destaques.jgd_Ladrao);
        array.push(route.params.liga.destaques.jgd_Bloker);
        array.push(route.params.liga.destaques.jgd_AirBall);
        array.push(route.params.liga.destaques.jgd_FG);
        array.push(route.params.liga.destaques.jgd_PPG);
        array.push(route.params.liga.destaques.jgd_2PPG);
        array.push(route.params.liga.destaques.jgd_3PPG);
        array.push(route.params.liga.destaques.jgd_APG);
        array.push(route.params.liga.destaques.jgd_RPG);    
        array.push(route.params.liga.destaques.jgd_BPG);
        array.push(route.params.liga.destaques.jgd_AirBPG);
        array.push(route.params.liga.destaques.jgd_RouPG);
        return array;
    }

    // seleciona o time a ser renderizado A || B
    function renderTime(){
        if(time){        
            return(
                <View style = {stylesV3.viewT}>   
                    {/* timeA[0] */}
                    <View style = {stylesV3.viewComp}> 
                        <TouchableOpacity style = {stylesV3.bttNome}>
                            <Text style = {stylesV3.textNome}> {timeA[0].apelido} </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style = {stylesV3.bttScor}>                        
                            <Text style = {stylesV3.textScor}> {timeA[0].a_2pts}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style = {stylesV3.bttScor}>
                            <Text style = {stylesV3.textScor}> {timeA[0].a_3pts} </Text>
                        </TouchableOpacity>

                        {conf_Liga.rebts && <TouchableOpacity style = {stylesV3.bttScor}>
                            <Text style = {stylesV3.textScor}> {timeA[0].reb} </Text>
                        </TouchableOpacity>}

                        {conf_Liga.assts && <TouchableOpacity style = {stylesV3.bttScor}>
                            <Text style = {stylesV3.textScor}> {timeA[0].asst} </Text>
                        </TouchableOpacity>}

                        {conf_Liga.blks && <TouchableOpacity style = {stylesV3.bttScor}>
                            <Text style = {stylesV3.textScor}> {timeA[0].blk} </Text>
                        </TouchableOpacity>}

                        {conf_Liga.airB && <TouchableOpacity style = {stylesV3.bttScor}>
                            <Text style = {stylesV3.textScor}> {timeA[0].airB} </Text>
                        </TouchableOpacity>}
                    </View>

                    {/* timeA[1] */}
                    <View style = {stylesV3.viewComp}> 
                        <TouchableOpacity style = {stylesV3.bttNome}>
                            <Text style = {stylesV3.textNome}> {timeA[1].apelido} </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style = {stylesV3.bttScor}>                        
                            <Text style = {stylesV3.textScor}> {timeA[1].a_2pts}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style = {stylesV3.bttScor}>
                            <Text style = {stylesV3.textScor}> {timeA[1].a_3pts} </Text>
                        </TouchableOpacity>

                        {conf_Liga.rebts && <TouchableOpacity style = {stylesV3.bttScor}>
                            <Text style = {stylesV3.textScor}> {timeA[1].reb} </Text>
                        </TouchableOpacity>}

                        {conf_Liga.assts && <TouchableOpacity style = {stylesV3.bttScor}>
                            <Text style = {stylesV3.textScor}> {timeA[1].asst} </Text>
                        </TouchableOpacity>}

                        {conf_Liga.blks && <TouchableOpacity style = {stylesV3.bttScor}>
                            <Text style = {stylesV3.textScor}> {timeA[1].blk} </Text>
                        </TouchableOpacity>}

                        {conf_Liga.airB && <TouchableOpacity style = {stylesV3.bttScor}>
                            <Text style = {stylesV3.textScor}> {timeA[1].airB} </Text>
                        </TouchableOpacity>}
                    </View>

                    {/* timeA[2] */}
                    <View style = {stylesV3.viewComp}> 
                        <TouchableOpacity style = {{...stylesV3.bttNome, borderBottomLeftRadius: 30}}>
                            <Text style = {stylesV3.textNome}> {timeA[2].apelido} </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style = {stylesV3.bttScor}>                        
                            <Text style = {stylesV3.textScor}> {timeA[2].a_2pts}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style = {stylesV3.bttScor}>
                            <Text style = {stylesV3.textScor}> {timeA[2].a_3pts} </Text>
                        </TouchableOpacity>

                        {conf_Liga.rebts && <TouchableOpacity style = {stylesV3.bttScor}>
                            <Text style = {stylesV3.textScor}> {timeA[2].reb} </Text>
                        </TouchableOpacity>}

                        {conf_Liga.assts && <TouchableOpacity style = {stylesV3.bttScor}>
                            <Text style = {stylesV3.textScor}> {timeA[2].asst} </Text>
                        </TouchableOpacity>}

                        {conf_Liga.blks && <TouchableOpacity style = {stylesV3.bttScor}>
                            <Text style = {stylesV3.textScor}> {timeA[2].blk} </Text>
                        </TouchableOpacity>}

                        {conf_Liga.airB && <TouchableOpacity style = {{...stylesV3.bttScor, borderBottomRightRadius: 30}}>
                            <Text style = {stylesV3.textScor}> {timeA[2].airB} </Text>
                        </TouchableOpacity>}
                    </View>

                </View>
            );
        } else{
            return(
                <View style = {stylesV3.viewT}>
                    {/* timeB[0] */}
                    <View style = {stylesV3.viewComp}> 
                        <TouchableOpacity style = {stylesV3.bttNome}>
                            <Text style = {stylesV3.textNome}> {timeB[0].apelido} </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style = {stylesV3.bttScor}>                        
                            <Text style = {stylesV3.textScor}> {timeB[0].a_2pts}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style = {stylesV3.bttScor}>
                            <Text style = {stylesV3.textScor}> {timeB[0].a_3pts} </Text>
                        </TouchableOpacity>

                        {conf_Liga.rebts && <TouchableOpacity style = {stylesV3.bttScor}>
                            <Text style = {stylesV3.textScor}> {timeB[0].reb} </Text>
                        </TouchableOpacity>}

                        {conf_Liga.assts && <TouchableOpacity style = {stylesV3.bttScor}>
                            <Text style = {stylesV3.textScor}> {timeB[0].asst} </Text>
                        </TouchableOpacity>}

                        {conf_Liga.blks && <TouchableOpacity style = {stylesV3.bttScor}>
                            <Text style = {stylesV3.textScor}> {timeB[0].blk} </Text>
                        </TouchableOpacity>}

                        {conf_Liga.airB && <TouchableOpacity style = {stylesV3.bttScor}>
                            <Text style = {stylesV3.textScor}> {timeB[0].airB} </Text>
                        </TouchableOpacity>}
                    </View>

                    {/* timeB[1] */}
                    <View style = {stylesV3.viewComp}> 
                        <TouchableOpacity style = {stylesV3.bttNome}>
                            <Text style = {stylesV3.textNome}> {timeB[1].apelido} </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style = {stylesV3.bttScor}>                        
                            <Text style = {stylesV3.textScor}> {timeB[1].a_2pts}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style = {stylesV3.bttScor}>
                            <Text style = {stylesV3.textScor}> {timeB[1].a_3pts} </Text>
                        </TouchableOpacity>

                        {conf_Liga.rebts && <TouchableOpacity style = {stylesV3.bttScor}>
                            <Text style = {stylesV3.textScor}> {timeB[1].reb} </Text>
                        </TouchableOpacity>}

                        {conf_Liga.assts && <TouchableOpacity style = {stylesV3.bttScor}>
                            <Text style = {stylesV3.textScor}> {timeB[1].asst} </Text>
                        </TouchableOpacity>}

                        {conf_Liga.blks && <TouchableOpacity style = {stylesV3.bttScor}>
                            <Text style = {stylesV3.textScor}> {timeB[1].blk} </Text>
                        </TouchableOpacity>}

                        {conf_Liga.airB && <TouchableOpacity style = {stylesV3.bttScor}>
                            <Text style = {stylesV3.textScor}> {timeB[1].airB} </Text>
                        </TouchableOpacity>}
                    </View>

                    {/* timeB[2] */}
                    <View style = {stylesV3.viewComp}> 
                        <TouchableOpacity style = {{...stylesV3.bttNome, borderBottomLeftRadius: 30}}>
                            <Text style = {stylesV3.textNome}> {timeB[2].apelido} </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style = {stylesV3.bttScor}>                        
                            <Text style = {stylesV3.textScor}> {timeB[2].a_2pts}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style = {stylesV3.bttScor}>
                            <Text style = {stylesV3.textScor}> {timeB[2].a_3pts} </Text>
                        </TouchableOpacity>

                        {conf_Liga.rebts && <TouchableOpacity style = {stylesV3.bttScor}>
                            <Text style = {stylesV3.textScor}> {timeB[2].reb} </Text>
                        </TouchableOpacity>}

                        {conf_Liga.assts && <TouchableOpacity style = {stylesV3.bttScor}>
                            <Text style = {stylesV3.textScor}> {timeB[2].asst} </Text>
                        </TouchableOpacity>}

                        {conf_Liga.blks && <TouchableOpacity style = {stylesV3.bttScor}>
                            <Text style = {stylesV3.textScor}> {timeB[2].blk} </Text>
                        </TouchableOpacity>}

                        {conf_Liga.airB && <TouchableOpacity style = {{...stylesV3.bttScor, borderBottomRightRadius: 30}}>
                            <Text style = {stylesV3.textScor}> {timeB[2].airB} </Text>
                        </TouchableOpacity>}
                    </View>
                </View>
            );
        }
    }

    
    // renderização da tela Load3x3
    return(
        <View style = {stylesV3.telaFull}>
            <StatusBar
                hidden = {false}
                barStyle= 'light-content'
            />
            <View style = {stylesV3.viewTop}>        
                <Text style = {stylesV3.textPla}> {route.params.game.nome} </Text>
                <View style = {stylesV3.viewP}>
                    <Text style = {stylesV3.textVP_times}> {nomeTA} </Text>
                    <Text style = {stylesV3.textVP_}> {plcA} </Text>
                    <Text style = {stylesV3.textVP_}> Vs. </Text>
                    <Text style = {stylesV3.textVP_}> {plcB} </Text>
                    <Text style = {stylesV3.textVP_times}> {nomeTB} </Text>
                </View>
            </View>
            <View style = {stylesV3.viewTime}>
                <View style = {stylesV3.viewSelect_Time}>
                    <TouchableOpacity style = {{
                        ...stylesV3.btt_SelTime,
                        backgroundColor: corA
                    }}
                        onPress={() => {
                            setTime(true)
                            setCorA(Cor.btt_sel)
                            setCorB(Cor.btt)
                        }}
                    >
                        <Text style = {stylesV3.textBtt}> Time A </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{
                        ...stylesV3.btt_SelTime,
                        backgroundColor: corB
                    }}
                        onPress = {() => {
                            setTime(false)
                            setCorA(Cor.btt)
                            setCorB(Cor.btt_sel)
                        }}
                    >
                        <Text style = {stylesV3.textBtt}> Time B </Text>
                    </TouchableOpacity>
                </View>
                <View style = {stylesV3.viewTabJog}>
                    <View style = {stylesV3.viewCab}> 
                        <Text style = {stylesV3.bttNome}> Jogador </Text>
                        <Text style = {stylesV3.bttScor}> 2Pts </Text>
                        <Text style = {stylesV3.bttScor}> 3Pts </Text>
                        { conf_Liga.rebts && <Text style = {stylesV3.bttScor}> Reb </Text>}
                        { conf_Liga.assts && <Text style = {stylesV3.bttScor}> Asst </Text>}
                        { conf_Liga.blks && <Text style = {stylesV3.bttScor}> Blk </Text>}
                        { conf_Liga.airB && <Text style = {stylesV3.bttScor}> AirB </Text>}
                    </View>
                    <View style = {stylesV3.viewJog}>
                        {renderTime()}
                        
                    </View>
                    
                </View>
                
            </View>
            
        </View>
    );
}
