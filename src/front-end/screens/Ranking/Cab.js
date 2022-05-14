import React from "react";
import {View, StyleSheet, Text, Alert} from "react-native";
import stylesR from './stylesR';

export const Cab1 = () => {
    return(
        <View style = {stylesR.compFull}>
            <Text style = {stylesR.textCabN} onLongPress = {() => Alert.alert("Nome do jogador")}> Nome </Text>
            <Text style = {stylesR.textCab} onLongPress = {() => Alert.alert("Total de jogos")}> Jgs </Text>
            <Text style = {stylesR.textCab} onLongPress = {() => Alert.alert("Total de vitórias")}> Vit </Text>
            <Text style = {stylesR.textCab} onLongPress = {() => Alert.alert("% de vitórias")}> FG% </Text>
            <Text style = {stylesR.textCab} onLongPress = {() => Alert.alert("Fez a ultima cesta do jogo (cluth)")}> Clt </Text>
            <Text style = {stylesR.textCab} onLongPress = {() => Alert.alert("Total de pontos")}> TP </Text>
        </View>
    )
}

export const Cab2 = () => {
    return(
        <View style = {stylesR.compFull}>
            <Text style = {stylesR.textCabN} onLongPress = {() => Alert.alert("Nome do jogador")}> Nome </Text>
            <Text style = {stylesR.textCab} onLongPress = {() => Alert.alert("Total de 2 pontos")}> 2Pts </Text>
            <Text style = {stylesR.textCab} onLongPress = {() => Alert.alert("Total de 3 pontos")}> 3Pts </Text>
            <Text style = {stylesR.textCab} onLongPress = {() => Alert.alert("Total de Rebotes")}> Reb </Text>
            <Text style = {stylesR.textCab} onLongPress = {() => Alert.alert("Total de Assistências")}> Ast </Text>
            <Text style = {stylesR.textCab} onLongPress = {() => Alert.alert("Total de Tocos")}> Blk </Text>
            <Text style = {stylesR.textCab} onLongPress = {() => Alert.alert("Total de Air balls")}> Air </Text>
        </View>
    )
}

export const Cab3 = () => {
    return(
        <View style = {stylesR.compFull}>
            <Text style = {stylesR.textCabN} onLongPress = {() => Alert.alert("Nome do jogador")}> Nome </Text>
            <Text style = {stylesR.textCab} onLongPress = {() => Alert.alert("Total de pontos por jogo")}> TPPG </Text>
            <Text style = {stylesR.textCab} onLongPress = {() => Alert.alert("Total de 2 pontos por jogo")}> 2PPG </Text>
            <Text style = {stylesR.textCab} onLongPress = {() => Alert.alert("Total de 3 pontos por jogo")}> 3PPG </Text>
            <Text style = {stylesR.textCab} onLongPress = {() => Alert.alert("Total de rebotes por jogo")}> RPPG </Text>
            <Text style = {stylesR.textCab} onLongPress = {() => Alert.alert("Total de assistências por jogo")}> APPG </Text>
            <Text style = {stylesR.textCab} onLongPress = {() => Alert.alert("Total de tocos por jogo")}> BPPG </Text>
            <Text style = {stylesR.textCab} onLongPress = {() => Alert.alert("Total de air ball por jogo")}> AirPPG </Text>
        </View>
    )
}