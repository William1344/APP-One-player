import React from "react";
import {View, Text} from "react-native";
import stylesR from './stylesR';

export const CompFL1A = ({item}) =>{
    return(
        <View style = {stylesR.compFull}>
            <Text style = {stylesR.textCabN}> {item.apelido} </Text>
            <Text style = {stylesR.textCab}> {item.scr3x3.jogos} </Text>
            <Text style = {stylesR.textCab}> {item.scr3x3.vit} </Text>
            <Text style = {stylesR.textCab}> {item.scr3x3.a_FG % 1 == 0 ? item.scr3x3.a_FG : item.scr3x3.a_FG.toFixed(1)} </Text>
            <Text style = {stylesR.textCab}> {item.scr3x3.cluth} </Text>
            <Text style = {stylesR.textCab}> {item.scr3x3.total_pts} </Text>
        </View>
    );
}; 

export const CompFL2A = ({item}) =>{
    return(
        <View style = {stylesR.compFull}>
            <Text style = {stylesR.textCabN}> {item.apelido} </Text>
            <Text style = {stylesR.textCab}> {item.scr3x3.a_2pts} </Text>
            <Text style = {stylesR.textCab}> {item.scr3x3.a_3pts} </Text>
            <Text style = {stylesR.textCab}> {item.scr3x3.reb} </Text>
            <Text style = {stylesR.textCab}> {item.scr3x3.asst} </Text>
            <Text style = {stylesR.textCab}> {item.scr3x3.block} </Text>
            <Text style = {stylesR.textCab}> {item.scr3x3.airB} </Text>
        </View>
    );
}

export const CompFL3A = ({item}) => {
    return(
        <View style = {stylesR.compFull}>
            <Text style = {stylesR.textCabN}> {item.apelido} </Text>
            <Text style = {stylesR.textCab}> {item.scr3x3.total_PPG % 1 == 0    ? item.scr3x3.total_PPG : item.scr3x3.total_PPG.toFixed(2)} </Text>
            <Text style = {stylesR.textCab}> {item.scr3x3.a_2PG     % 1 == 0    ? item.scr3x3.a_2PG     : item.scr3x3.a_2PG.toFixed(2)} </Text>
            <Text style = {stylesR.textCab}> {item.scr3x3.a_3PG     % 1 == 0    ? item.scr3x3.a_3PG     : item.scr3x3.a_3PG.toFixed(2)} </Text>
            <Text style = {stylesR.textCab}> {item.scr3x3.a_RPG     % 1 == 0    ? item.scr3x3.a_RPG     : item.scr3x3.a_RPG.toFixed(2)} </Text>
            <Text style = {stylesR.textCab}> {item.scr3x3.a_APG     % 1 == 0    ? item.scr3x3.a_APG     : item.scr3x3.a_APG.toFixed(2)} </Text>
            <Text style = {stylesR.textCab}> {item.scr3x3.a_BPG     % 1 == 0    ? item.scr3x3.a_BPG     : item.scr3x3.a_BPG.toFixed(2)} </Text>
            <Text style = {stylesR.textCab}> {item.scr3x3.a_AirPG   % 1 == 0    ? item.scr3x3.a_AirPG   : item.scr3x3.a_AirPG.toFixed(2)} </Text>
        </View>
    );
};

export const CompFL1B = ({item}) =>{
    return(
        <View style = {stylesR.compFull}>
            <Text style = {stylesR.textCabN}> {item.apelido} </Text>
            <Text style = {stylesR.textCab}> {item.scr5x5.jogos} </Text>
            <Text style = {stylesR.textCab}> {item.scr5x5.vit} </Text>
            <Text style = {stylesR.textCab}> {item.scr5x5.a_FG % 1 == 0 ? item.scr5x5.a_FG : item.scr5x5.a_FG.toFixed(1)} </Text>
            <Text style = {stylesR.textCab}> {item.scr5x5.cluth} </Text>
            <Text style = {stylesR.textCab}> {item.scr5x5.total_pts} </Text>
        </View>
    );
}; 

export const CompFL2B = ({item}) =>{
    return(
        <View style = {stylesR.compFull}>
            <Text style = {stylesR.textCabN}> {item.apelido} </Text>
            <Text style = {stylesR.textCab}> {item.scr5x5.a_2pts} </Text>
            <Text style = {stylesR.textCab}> {item.scr5x5.a_3pts} </Text>
            <Text style = {stylesR.textCab}> {item.scr5x5.reb} </Text>
            <Text style = {stylesR.textCab}> {item.scr5x5.asst} </Text>
            <Text style = {stylesR.textCab}> {item.scr5x5.block} </Text>
            <Text style = {stylesR.textCab}> {item.scr5x5.airB} </Text>
        </View>
    );
}

export const CompFL3B = ({item}) => {
    return(
        <View style = {stylesR.compFull}>
            <Text style = {stylesR.textCabN}> {item.apelido} </Text>
            <Text style = {stylesR.textCab}> {item.scr5x5.total_PPG % 1 == 0    ? item.scr5x5.total_PPG : item.scr5x5.total_PPG.toFixed(2)} </Text>
            <Text style = {stylesR.textCab}> {item.scr5x5.a_2PG     % 1 == 0    ? item.scr5x5.a_2PG     : item.scr5x5.a_2PG.toFixed(2)} </Text>
            <Text style = {stylesR.textCab}> {item.scr5x5.a_3PG     % 1 == 0    ? item.scr5x5.a_3PG     : item.scr5x5.a_3PG.toFixed(2)} </Text>
            <Text style = {stylesR.textCab}> {item.scr5x5.a_RPG     % 1 == 0    ? item.scr5x5.a_RPG     : item.scr5x5.a_RPG.toFixed(2)} </Text>
            <Text style = {stylesR.textCab}> {item.scr5x5.a_APG     % 1 == 0    ? item.scr5x5.a_APG     : item.scr5x5.a_APG.toFixed(2)} </Text>
            <Text style = {stylesR.textCab}> {item.scr5x5.a_BPG     % 1 == 0    ? item.scr5x5.a_BPG     : item.scr5x5.a_BPG.toFixed(2)} </Text>
            <Text style = {stylesR.textCab}> {item.scr5x5.a_AirPG   % 1 == 0    ? item.scr5x5.a_AirPG   : item.scr5x5.a_AirPG.toFixed(2)} </Text>
        </View>
    );
};

export const CompFL1C = ({item}) =>{
    return(
        <View style = {stylesR.compFull}>
            <Text style = {stylesR.textCabN}> {item.apelido} </Text>
            <Text style = {stylesR.textCab}> {item.scrT.jogos} </Text>
            <Text style = {stylesR.textCab}> {item.scrT.vit} </Text>
            <Text style = {stylesR.textCab}> {item.scrT.a_FG.toFixed(1)} </Text>
            <Text style = {stylesR.textCab}> {item.scrT.cluth} </Text>
            <Text style = {stylesR.textCab}> {item.scrT.total_pts} </Text>
        </View>
    );
}; 

export const CompFL2C = ({item}) =>{
    return(
        <View style = {stylesR.compFull}>
            <Text style = {stylesR.textCabN}> {item.apelido} </Text>
            <Text style = {stylesR.textCab}> {item.scrT.a_2pts} </Text>
            <Text style = {stylesR.textCab}> {item.scrT.a_3pts} </Text>
            <Text style = {stylesR.textCab}> {item.scrT.reb} </Text>
            <Text style = {stylesR.textCab}> {item.scrT.asst} </Text>
            <Text style = {stylesR.textCab}> {item.scrT.block} </Text>
            <Text style = {stylesR.textCab}> {item.scrT.airB} </Text>
        </View>
    );
}

export const CompFL3C = ({item}) => {
    return(
        <View style = {stylesR.compFull}>
            <Text style = {stylesR.textCabN}> {item.apelido} </Text>
            <Text style = {stylesR.textCab}> {item.scrT.total_PPG % 1 == 0    ? item.scrT.total_PPG : item.scrT.total_PPG.toFixed(2)} </Text>
            <Text style = {stylesR.textCab}> {item.scrT.a_2PG     % 1 == 0    ? item.scrT.a_2PG     : item.scrT.a_2PG.toFixed(2)} </Text>
            <Text style = {stylesR.textCab}> {item.scrT.a_3PG     % 1 == 0    ? item.scrT.a_3PG     : item.scrT.a_3PG.toFixed(2)} </Text>
            <Text style = {stylesR.textCab}> {item.scrT.a_RPG     % 1 == 0    ? item.scrT.a_RPG     : item.scrT.a_RPG.toFixed(2)} </Text>
            <Text style = {stylesR.textCab}> {item.scrT.a_APG     % 1 == 0    ? item.scrT.a_APG     : item.scrT.a_APG.toFixed(2)} </Text>
            <Text style = {stylesR.textCab}> {item.scrT.a_BPG     % 1 == 0    ? item.scrT.a_BPG     : item.scrT.a_BPG.toFixed(2)} </Text>
            <Text style = {stylesR.textCab}> {item.scrT.a_AirPG   % 1 == 0    ? item.scrT.a_AirPG   : item.scrT.a_AirPG.toFixed(2)} </Text>
        </View>
    );
};