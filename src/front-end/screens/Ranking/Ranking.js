import React, {useState, useEffect} from "react";
import {
    View, Text, StatusBar, Image, TouchableOpacity, FlatList, 
    BackHandler 
} from 'react-native';
import { Cor, styles, icons } from "../../styles/index_S";
import {
    Cab1, Cab2, Cab3, // cabeçalho
    CompFL1A, CompFL2A, CompFL3A, // componentes para jogos 3x3
    CompFL1B, CompFL2B, CompFL3B, // componentes para jogos 5x5
    CompFL1C, CompFL2C, CompFL3C, // componentes para total de pontos
} from './indexComps';
import { useNavigation } from '@react-navigation/native';
import stylesR from './stylesR';
import assets from "../../../../assets/index_assets";
import { RetornaImgL } from '../../functions/index';

export default function Ranking({route}){
    const navigation        = useNavigation();
    const [modo, setModo]   = useState(0);
    const [tipo, setTipo]   = useState(0);
    const [corS1, setCorS1] = useState(Cor.tab_sel);
    const [corS2, setCorS2] = useState(Cor.tab_bar);
    const [corS3, setCorS3] = useState(Cor.tab_bar);

    const [corT1, setCorT1] = useState(Cor.tab_sel);
    const [corT2, setCorT2] = useState(Cor.tab_bar);
    const [corT3, setCorT3] = useState(Cor.tab_bar);    

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction);

        return () => {BackHandler.removeEventListener("hardwareBackPress", backAction);}    
    }, []);

    useEffect(()=>{
        if(tipo == 0){
            setCorT1(Cor.tab_sel)
            setCorT2(Cor.tab_bar)
            setCorT3(Cor.tab_bar)
        } else if(tipo == 1){
            setCorT1(Cor.tab_bar)
            setCorT2(Cor.tab_sel)
            setCorT3(Cor.tab_bar)
        } else { // modo == 3
            setCorT1(Cor.tab_bar)
            setCorT2(Cor.tab_bar)
            setCorT3(Cor.tab_sel)
        }
    },[tipo]);

    useEffect(() => {
        if(modo == 0){
            setCorS1(Cor.tab_sel)
            setCorS2(Cor.tab_bar)
            setCorS3(Cor.tab_bar)
        } else if(modo == 1){
            setCorS1(Cor.tab_bar)
            setCorS2(Cor.tab_sel)
            setCorS3(Cor.tab_bar)
        } else { // modo == 3
            setCorS1(Cor.tab_bar)
            setCorS2(Cor.tab_bar)
            setCorS3(Cor.tab_sel)
        }
    },[modo]);

    function backAction(){
        navigation.replace("MainL",{
            liga    : route.params.liga,
            dest    : route.params.dest
        });
        return true;
    }

    function select_cab(){
        if(modo == 0) return(<Cab1/>); 
        else if(modo == 1) return( <Cab2/> );
        else return( <Cab3/> );
    }
    
    function select_compFL(){
        if(tipo == 0){
            if(modo == 0) return( CompFL1A ); 
            else if(modo == 1) return( CompFL2A );
            else return( CompFL3A );
        } else if(tipo == 1){
            if(modo == 0) return( CompFL1B ); 
            else if(modo == 1) return( CompFL2B );
            else return( CompFL3B );
        } else {
            if(modo == 0) return( CompFL1C ); 
            else if(modo == 1) return( CompFL2C );
            else return( CompFL3C );
        }        
    }

    
    return(
        <View style = {stylesR.telaFull}>
            <StatusBar
                hidden = {true}
                barStyle= 'light-content'
            />
            <View style = {stylesR.viewTopo}>
                <View style = {stylesR.viewTopoL}>
                    <Image style = {stylesR.imgLiga}
                        source = {RetornaImgL(route.params.liga.img_log)}
                        resizeMode="cover"
                    />
                    <View style = {stylesR.viewIN}>
                        <Text style = {stylesR.textInf}> Liga: {route.params.liga.nome} </Text>
                        <Text style = {stylesR.textInf}> Membros: {route.params.liga.list_users.length} </Text>
                        <Text style = {stylesR.textInf}> Jogos: {(route.params.liga.listJgs3x3.length) + (route.params.liga.listJgs5x5.length) } </Text>
                    </View>
                </View>
                <View style = {stylesR.view_bttRankSelc}>
                    <TouchableOpacity style = {{...stylesR.btt_Modo, backgroundColor: corS1}}
                        onPress = {() =>{setModo(0)}}
                    >
                        <Text style = {stylesR.text_btt}> Gerais </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{...stylesR.btt_Modo, backgroundColor: corS2}}
                        onPress = {() =>{setModo(1)}}
                    >
                        <Text style = {stylesR.text_btt}> Scores </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{...stylesR.btt_Modo, backgroundColor: corS3}}
                        onPress = {() =>{setModo(2)}}
                    >
                        <Text style = {stylesR.text_btt}> Médias </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {{...stylesR.btt_Tipo, backgroundColor: corT1}}
                        onPress = {() =>{setTipo(0)}}
                    >
                        <Text style = {stylesR.text_btt}> 3x3 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{...stylesR.btt_Tipo, backgroundColor: corT2}}
                        onPress = {() =>{setTipo(1)}}
                    >
                        <Text style = {stylesR.text_btt}> 5x5 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{...stylesR.btt_Tipo, backgroundColor: corT3}}
                        onPress = {() =>{setTipo(2)}}
                    >
                        <Text style = {stylesR.text_btt}> Total </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style = {{borderWidth: 1, borderColor: Cor.bord, width: '100%'}}/>
            <View style = {stylesR.viewRank}>
                <View style = {stylesR.viewRank_Cab}>
                    {select_cab()}
                </View>
                <View style = {stylesR.viewFlat}>
                    <FlatList style = {stylesR.flatL}
                        data = {route.params.liga.list_users}
                        renderItem = {select_compFL()}
                        keyExtractor = {item => item.idUser}
                    />
                </View>
            </View>
        </View>
    );
}
