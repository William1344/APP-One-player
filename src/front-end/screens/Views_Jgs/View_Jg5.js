import React, {useState, useEffect} from "react";
import stylesVJ from "./stylesVJ";
import {View, Text, StatusBar, TouchableOpacity, ScrollView, BackHandler} from "react-native";
import {useNavigation } from "@react-navigation/native";
import {Cor, icons} from "../../styles/index_S";

export default function ViewGame_5x5({route}){
    const navigation = useNavigation();
    const conf = route.params.liga.confLiga;
    useEffect(()=>{
        BackHandler.addEventListener("hardwareBackPress", backAction);
        return () => BackHandler.removeEventListener("hardwareBackPress", backAction);
    },[]);

    var timeA = route.params.game.timeA;
    var timeB = route.params.game.timeB;
    var nomeTA = route.params.game.nomeTA;
    var nomeTB = route.params.game.nomeTB;
    var plcA = route.params.game.plcA;
    var plcB = route.params.game.plcB;

    const [time, setTime] = useState(true);
    const [corA, setCorA] = useState(Cor.btt_sel);
    const [corB, setCorB] = useState(Cor.btt);
    
    // seleciona o time a ser renderizado A || B
    function renderTime(){
        if(time){        
            return(
                <View style = {stylesVJ.viewT}>
                    <ScrollView style = {{flex : 1}}>  
                        {/* timeA[0] -- jogador 1 */}
                        <View style = {stylesVJ.viewComp}> 
                            <TouchableOpacity style = {stylesVJ.bttNome}>
                                <Text style = {stylesVJ.textNome}> {timeA[0].apelido} </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style = {stylesVJ.bttScor}>                        
                                <Text style = {stylesVJ.textScor}> {timeA[0].a_2pts}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeA[0].a_3pts} </Text>
                            </TouchableOpacity>

                            {conf.rebote && <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeA[0].reb} </Text>
                            </TouchableOpacity>}

                            {conf.assist && <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeA[0].asst} </Text>
                            </TouchableOpacity>}

                            {conf.block && <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeA[0].blk} </Text>
                            </TouchableOpacity>}

                            {conf.airB && <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeA[0].airB} </Text>
                            </TouchableOpacity>}
                        </View>

                        {/* timeA[1] -- jogador 2 */}
                        <View style = {stylesVJ.viewComp}> 
                            <TouchableOpacity style = {stylesVJ.bttNome}>
                                <Text style = {stylesVJ.textNome}> {timeA[1].apelido} </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style = {stylesVJ.bttScor}>                        
                                <Text style = {stylesVJ.textScor}> {timeA[1].a_2pts}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeA[1].a_3pts} </Text>
                            </TouchableOpacity>

                            {conf.rebote && <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeA[1].reb} </Text>
                            </TouchableOpacity>}

                            {conf.assist && <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeA[1].asst} </Text>
                            </TouchableOpacity>}

                            {conf.block && <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeA[1].blk} </Text>
                            </TouchableOpacity>}

                            {conf.airB && <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeA[1].airB} </Text>
                            </TouchableOpacity>}
                        </View>

                        {/* timeA[2] -- jogador 3 */}
                        <View style = {stylesVJ.viewComp}> 
                            <TouchableOpacity style = {stylesVJ.bttNome}>
                                <Text style = {stylesVJ.textNome}> {timeA[2].apelido} </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style = {stylesVJ.bttScor}>                        
                                <Text style = {stylesVJ.textScor}> {timeA[2].a_2pts}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeA[2].a_3pts} </Text>
                            </TouchableOpacity>

                            {conf.rebote && <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeA[2].reb} </Text>
                            </TouchableOpacity>}

                            {conf.assist && <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeA[2].asst} </Text>
                            </TouchableOpacity>}

                            {conf.block && <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeA[2].blk} </Text>
                            </TouchableOpacity>}

                            {conf.airB && <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeA[2].airB} </Text>
                            </TouchableOpacity>}
                        </View>

                        {/* timeA[3] -- jogador 4*/}
                        <View style = {stylesVJ.viewComp}> 
                            <TouchableOpacity style = {stylesVJ.bttNome}>
                                <Text style = {stylesVJ.textNome}> {timeA[3].apelido} </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style = {stylesVJ.bttScor}>                        
                                <Text style = {stylesVJ.textScor}> {timeA[3].a_2pts}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeA[3].a_3pts} </Text>
                            </TouchableOpacity>

                            {conf.rebote && <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeA[3].reb} </Text>
                            </TouchableOpacity>}

                            {conf.assist && <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeA[3].asst} </Text>
                            </TouchableOpacity>}

                            {conf.block && <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeA[3].blk} </Text>
                            </TouchableOpacity>}

                            {conf.airB && <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeA[3].airB} </Text>
                            </TouchableOpacity>}
                        </View>

                        {/* timeA[4] -- jogador 5*/}
                        <View style = {stylesVJ.viewComp}> 
                            <TouchableOpacity style = {stylesVJ.bttNome}>
                                <Text style = {stylesVJ.textNome}> {timeA[4].apelido} </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style = {stylesVJ.bttScor}>                        
                                <Text style = {stylesVJ.textScor}> {timeA[4].a_2pts}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeA[4].a_3pts} </Text>
                            </TouchableOpacity>

                            {conf.rebote && <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeA[4].reb} </Text>
                            </TouchableOpacity>}

                            {conf.assist && <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeA[4].asst} </Text>
                            </TouchableOpacity>}

                            {conf.block && <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeA[4].blk} </Text>
                            </TouchableOpacity>}

                            {conf.airB && <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeA[4].airB} </Text>
                            </TouchableOpacity>}
                        </View>
                    </ScrollView> 
                </View>
            );
        } else{
            return(
                <View style = {stylesVJ.viewT}>
                    <ScrollView style = {{flex : 1}}>
                        {/* timeB[0] -- jogador 1 */}
                        <View style = {stylesVJ.viewComp}> 
                            <TouchableOpacity style = {stylesVJ.bttNome}>
                                <Text style = {stylesVJ.textNome}> {timeB[0].apelido} </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style = {stylesVJ.bttScor}>                        
                                <Text style = {stylesVJ.textScor}> {timeB[0].a_2pts}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeB[0].a_3pts} </Text>
                            </TouchableOpacity>

                            {conf.rebote && <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeB[0].reb} </Text>
                            </TouchableOpacity>}

                            {conf.assist && <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeB[0].asst} </Text>
                            </TouchableOpacity>}

                            {conf.block && <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeB[0].blk} </Text>
                            </TouchableOpacity>}

                            {conf.airB && <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeB[0].airB} </Text>
                            </TouchableOpacity>}
                        </View>
                        {/* timeB[1] -- jogador 2 */}
                        <View style = {stylesVJ.viewComp}> 
                            <TouchableOpacity style = {stylesVJ.bttNome}>
                                <Text style = {stylesVJ.textNome}> {timeB[1].apelido} </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style = {stylesVJ.bttScor}>                        
                                <Text style = {stylesVJ.textScor}> {timeB[1].a_2pts}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeB[1].a_3pts} </Text>
                            </TouchableOpacity>

                            {conf.rebote && <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeB[1].reb} </Text>
                            </TouchableOpacity>}

                            {conf.assist && <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeB[1].asst} </Text>
                            </TouchableOpacity>}

                            {conf.block && <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeB[1].blk} </Text>
                            </TouchableOpacity>}

                            {conf.airB && <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeB[1].airB} </Text>
                            </TouchableOpacity>}
                        </View>
                        {/* timeB[2] -- jogador 3 */}
                        <View style = {stylesVJ.viewComp}> 
                            <TouchableOpacity style = {stylesVJ.bttNome}>
                                <Text style = {stylesVJ.textNome}> {timeB[2].apelido} </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style = {stylesVJ.bttScor}>                        
                                <Text style = {stylesVJ.textScor}> {timeB[2].a_2pts}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeB[2].a_3pts} </Text>
                            </TouchableOpacity>

                            {conf.rebote && <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeB[2].reb} </Text>
                            </TouchableOpacity>}

                            {conf.assist && <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeB[2].asst} </Text>
                            </TouchableOpacity>}

                            {conf.block && <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeB[2].blk} </Text>
                            </TouchableOpacity>}

                            {conf.airB && <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeB[2].airB} </Text>
                            </TouchableOpacity>}
                        </View>
                        {/* timeB[3] -- jogador 4 */}
                        <View style = {stylesVJ.viewComp}> 
                            <TouchableOpacity style = {stylesVJ.bttNome}>
                                <Text style = {stylesVJ.textNome}> {timeB[3].apelido} </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style = {stylesVJ.bttScor}>                        
                                <Text style = {stylesVJ.textScor}> {timeB[3].a_2pts}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeB[3].a_3pts} </Text>
                            </TouchableOpacity>

                            {conf.rebote && <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeB[3].reb} </Text>
                            </TouchableOpacity>}

                            {conf.assist && <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeB[3].asst} </Text>
                            </TouchableOpacity>}

                            {conf.block && <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeB[3].blk} </Text>
                            </TouchableOpacity>}

                            {conf.airB && <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeB[3].airB} </Text>
                            </TouchableOpacity>}
                        </View>
                        {/* timeB[4] -- jogador 5 */}
                        <View style = {stylesVJ.viewComp}> 
                            <TouchableOpacity style = {stylesVJ.bttNome}>
                                <Text style = {stylesVJ.textNome}> {timeB[4].apelido} </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style = {stylesVJ.bttScor}>                        
                                <Text style = {stylesVJ.textScor}> {timeB[4].a_2pts}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeB[4].a_3pts} </Text>
                            </TouchableOpacity>

                            {conf.rebote && <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeB[4].reb} </Text>
                            </TouchableOpacity>}

                            {conf.assist && <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeB[4].asst} </Text>
                            </TouchableOpacity>}

                            {conf.block && <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeB[4].blk} </Text>
                            </TouchableOpacity>}

                            {conf.airB && <TouchableOpacity style = {stylesVJ.bttScor}>
                                <Text style = {stylesVJ.textScor}> {timeB[4].airB} </Text>
                            </TouchableOpacity>}
                        </View>
                    </ScrollView>
                </View>
            );
        }
    }

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

    // renderização da tela View_Jg5x5
    return(
        <View style = {stylesVJ.telaFull}>
            <StatusBar
                hidden = {true}
                barStyle= 'light-content'
            />
            <View style = {stylesVJ.viewTop}>        
                <Text style = {stylesVJ.textPla}> Placar </Text>
                <View style = {stylesVJ.viewP}>
                    <Text style = {stylesVJ.textVP_times}> {nomeTA} </Text>
                    <Text style = {stylesVJ.textVP_}> {plcA} </Text>
                    <Text style = {stylesVJ.textVP_}> Vs. </Text>
                    <Text style = {stylesVJ.textVP_}> {plcB} </Text>
                    <Text style = {stylesVJ.textVP_times}> {nomeTB} </Text>
                </View>
            </View>
            <View style = {stylesVJ.viewTime5}>
                <View style = {stylesVJ.viewSelect_Time}>
                    <TouchableOpacity style = {{
                        ...stylesVJ.btt_SelTime,
                        backgroundColor: corA
                    }}
                        onPress={() => {
                            setTime(true)
                            setCorA(Cor.btt_sel)
                            setCorB(Cor.btt)
                        }}
                    >
                        <Text style = {stylesVJ.textBtt}> Time A </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{
                        ...stylesVJ.btt_SelTime,
                        backgroundColor: corB
                    }}
                        onPress = {() => {
                            setTime(false)
                            setCorA(Cor.btt)
                            setCorB(Cor.btt_sel)
                        }}
                    >
                        <Text style = {stylesVJ.textBtt}> Time B </Text>
                    </TouchableOpacity>
                </View>
                <View style = {stylesVJ.viewTabJog}>
                    <View style = {stylesVJ.viewCab}> 
                        <Text style = {stylesVJ.bttNome}> Jogador </Text>
                        <Text style = {stylesVJ.bttScorC}> 2Pts </Text>
                        <Text style = {stylesVJ.bttScorC}> 3Pts </Text>
                        { conf.rebote   && <Text style = {stylesVJ.bttScorC}> Reb </Text>}
                        { conf.assist   && <Text style = {stylesVJ.bttScorC}> Asst </Text>}
                        { conf.block    && <Text style = {stylesVJ.bttScorC}> Blk </Text>}
                        { conf.airB     && <Text style = {stylesVJ.bttScorC}> AirB </Text>}
                    </View>
                    <View style = {stylesVJ.viewJog}>
                        {renderTime()}
                    </View>
                </View>
            </View>
        </View>
    );
}
