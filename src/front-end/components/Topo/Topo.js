import React, {useState, useEffect} from "react";
import { View, Text, Image, StatusBar, TouchableOpacity} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from "@react-navigation/native";
import configsBD from '../../../../config/config.json';
import styles from './styles_T';
import banco from '../../../back-end2/banco_local';
import AsyncStorage from "@react-native-async-storage/async-storage";
import assets from '../../../../assets/index_assets';
import SalveData from '../../../back-end2/SalveData';
import {RetornaImg} from '../../functions/index';


export default function Topo(value){
    
    useEffect(() => {
        
    }, []);
    
    const navigation = useNavigation();
    const [photo, setImg_perfil]  = useState(true);
    
    return(
        <>
        <View style = {styles.viewSuperior}>
            <StatusBar
                hidden = {false} // esconde a barra "true"
                barStyle="ligth-content"
            />
            <TouchableOpacity style = {styles.btt_img}
                onPress = {() => {
                    if(value.main) navigation.replace("Subst_Img");
                }}
            >
                <Image style = {styles.img_logo}
                    source = {RetornaImg(banco.userMaster.image)}
                />
            </TouchableOpacity>
            <View style = {styles.view1_infos}>
                <Text style = {styles.text_infos}> {banco.userMaster.nome} </Text>
                <Text style = {styles.text_infos}> Jogos: {banco.userMaster.scrT.jogos} | FG: {banco.userMaster.scrT.a_FG % 1 == 0 ? banco.userMaster.scrT.a_FG : banco.userMaster.scrT.a_FG.toFixed(1)}% </Text>
                <Text style = {styles.text_infos}> 2pts: {banco.userMaster.scrT.a_2pts} | 3pts: {banco.userMaster.scrT.a_3pts} </Text>
                <Text style = {styles.text_infos}> Total Pts: {banco.userMaster.scrT.total_pts} </Text>    
            </View>
        </View>
        <View style = {styles.barra}/>
        </>
    );
}
