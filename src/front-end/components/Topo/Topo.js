import React, {useState, useEffect} from "react";
import { View, Text, Image, StatusBar, TouchableOpacity} from "react-native";
import styles from './styles_T';
import banco from '../../../back-end2/banco_local';
import configsBD from '../../../../config/config.json';
import * as ImagePicker from 'expo-image-picker';
import assets from '../../../../assets/index_assets';
import AsyncStorage from "@react-native-async-storage/async-storage";
import SalveData from '../../../back-end2/SalveData';

export default function Topo(){
    
    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
    }, []);
    
    const [photo, setImg_perfil]  = useState(true);
    
    
    async function subst_img(){
        let result = await ImagePicker.launchImageLibraryAsync({
            selectionLimit: 1,
            mediaType: 'photo',
            includeBase64: false,   
        });
          console.log(result);
          if (!result.cancelled) {
            banco.userMaster.image = {uri : result.uri}
            setImg_perfil(result);
            await setImgUserMaster();        
        }
        SalveData(banco);
    };
    
    

    async function setImgUserMaster(result){
        let reqs = await fetch(configsBD.urlRootNode+'salvar_image_user',{
            method  : 'POST',
            headers : {
                'Accept'        :   'application/json',
                'Content-Type'  :   'multipart/form-data',
            },
            body    : await createFormData(photo, {user_id: banco.userMaster.id}) 
        });

        let ress = await reqs.json();
        if(ress.status){
            console.log("Salvei com sucesso -> ");
        } else {
            console.log("Erro ao salvar imagem -> ");
        }
    }

    function retorna_img(){
        if(banco.userMaster.image == null) return assets.play_lg;
        else return {uri: banco.userMaster.image};
    }
    

    return(
        <>
        <View style = {styles.viewSuperior}>
            <StatusBar
                hidden = {false} // esconde a barra "true"
                barStyle="ligth-content"
            />
            
            <TouchableOpacity style = {styles.btt_img}
                onPress = {() => {subst_img()}}
            >
                <Image style = {styles.img_logo}
                    source = {retorna_img()}
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
