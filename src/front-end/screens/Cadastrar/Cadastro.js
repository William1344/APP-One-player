import React, {useState, useEffect} from 'react';
import {
    Text, View, TouchableOpacity, TextInput, Modal, Image, 
    KeyboardAvoidingView, Alert, BackHandler, Keyboard
} from 'react-native';
import stylesC from './styles_Cad';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import banco from '../../../back-end2/banco_local';
import assets from '../../../../assets/index_assets';
import configsBD from '../../../../config/config.json';
import SalveData from '../../../back-end2/SalveData';

export default function Cadastro(){
    const navigation = useNavigation();
    const [textName, setName] = useState("");
    const [textEmail, setEmail] = useState("");
    const [textPasword, setPasword] = useState("");
    
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction);
        return () => {BackHandler.removeEventListener("hardwareBackPress", backAction);}
    },[]);
    
    function backAction(){
        navigation.replace("Login");
        return true;
    }
    
    async function cadastraUser(nm,em,ps){
        let new_us = {
            nome: nm,
            email: em,
            password: ps,
        }
        let reqs = await fetch(configsBD.urlRootNode+'cadastro_user',{
            method  : 'POST',
            headers : {
                'Accept'        :   'application/json',
                'Content-Type'  :   'application/json',
            }, 
            body: JSON.stringify({
                new_user : new_us,
            }),
        });

        let res = await reqs.json();
        if(res.status){
            //console.log("Cadastrou com sucesso -> ", res);
            banco.userMaster = res.dado;
            SalveData(banco);
            navigation.replace("Form_User",{
                idUser  : banco.userMaster.id,
                player  : banco.userMaster,
                veio_de : "cadastro",
            });
        } else {
            Alert.alert("Erro", res.dado);
            console.log("Erro ao cadastrar usuário ->", res.dado);
        }
    }

    async function _salveData(bd){
        try {
            const jsonBD = JSON.stringify(bd);
            await AsyncStorage.setItem("Banco", jsonBD);
        } catch (e) {
            console.log("Erro ao salvar banco")
        }
    }
    
    return(
        <View style={stylesC.telaFull}>
            <View style = {stylesC.view_img_cad}>
                <Image 
                    style = {stylesC.img} 
                    source={assets.login1}
                />
                <Text style={stylesC.title_L}>One Player</Text>
            </View>
            <View style = {stylesC.cad_view}>
                <KeyboardAvoidingView 
                    style    = {stylesC.keyBoard}
                    behavior = {Platform.select({
                        ios : 'padding',
                        android : null,
                    })}
                >
                    <TextInput style    = {stylesC.input}
                        value           = {textName}
                        onChangeText    = {(text)=>{setName(text)}}
                        keyboardType    = "default"
                        placeholder     = "Nome"
                    />
                    <TextInput style    = {stylesC.input}
                        value           = {textEmail}
                        onChangeText    = {(text)=>{setEmail(text)}}
                        keyboardType    = "email-address"
                        placeholder     = "Email ou Telefone"
                    />
                    <TextInput style    = {stylesC.input}
                        value           = {textPasword}
                        onChangeText    = {(text)=>{setPasword(text)}}
                        keyboardType    = "default"
                        placeholder     = "Senha"
                    />
                    <TouchableOpacity style = {stylesC.button}
                        onPress={() => cadastraUser(textName,textEmail,textPasword)}
                    >
                        <Text style = {stylesC.but_text}>Cadastrar</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        </View>
    );
}
