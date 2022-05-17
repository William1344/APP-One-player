import React, {useEffect, useState} from 'react';
import {View, ImageBackground, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Font from 'expo-font';
import configBD from '../../../../config/config.json';
import banco from '../../../back-end2/banco_local';
import SalveDate from '../../../back-end2/SalveData';
import CompLoad from './CompLoad';
//import styles from '../comp/Styles'

export default function Load(){
    const navigation = useNavigation();
    
    async function fontes(){
        try {
            await Font.loadAsync({
                'atma-bold'         : require('../../../../assets/fonts/Atma-Bold.ttf'),
                'itim-regular'      : require('../../../../assets/fonts/Itim-Regular.ttf'),
                'atma-light'        : require('../../../../assets/fonts/Atma-Light.ttf'),
                'atma-medium'       : require('../../../../assets/fonts/Atma-Medium.ttf'),
                'atma-regular'      : require('../../../../assets/fonts/Atma-Regular.ttf'),
                'atma-semi-bold'    : require('../../../../assets/fonts/Atma-SemiBold.ttf'),
                'comforter-brush'   : require('../../../../assets/fonts/ComforterBrush.ttf'),
                'dancing-bold'      : require('../../../../assets/fonts/DancingScript-Bold.ttf'),
                'dancing-mediun'    : require('../../../../assets/fonts/DancingScript-Medium.ttf'),
                'dancing-semi-bold' : require('../../../../assets/fonts/DancingScript-SemiBold.ttf'),
                'dancing-variable'  : require('../../../../assets/fonts/DancingScript-VariableFont_wght.ttf'),
                'lobster-regular'   : require('../../../../assets/fonts/Lobster-Regular.ttf'),
                'dancing-regular'   : require('../../../../assets/fonts/DancingScript-Regular.ttf'),
                'bizu'              : require('../../../../assets/fonts/BIZUDPMincho-Regular.ttf'),
                'roboto'            : require('../../../../assets/fonts/Roboto-Bold.ttf'),            
            });
        } catch (e) {
            console.log("Erro ao carregar fontes")
        }
    }
    async function checkToken(){
        const jsBanco = await AsyncStorage.getItem("Banco");
        if(jsBanco !== null){
            const bd = JSON.parse(jsBanco);
            //console.log("Banco -> \n", bd);
            let reqs = await fetch(configBD.urlRootNode+"login_user",{
                method: 'POST',
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({
                    email      : bd.userMaster.email,
                    password   : bd.userMaster.password,
                })
            });
            let ress = await reqs.json();
            if(ress.status){
                console.log("Login realizado com sucesso");
                banco.userMaster = ress.userM;
                banco.ligas      = ress.ligas;
                banco.pedidos    = ress.pedidos;
                await SalveDate(banco);
                navigation.replace("MainP");
                //console.log("Array com as ligas!", ress.ligs);
            } else {
                //console.log("Erro ao realizar login")
                //_removeTokens();
                console.log("Entrou aqui por que?")
                navigation.replace("Login");
            }
            /* fazer
            // preciso verificar o login e verificar se os 
            // dados de cada liga foram modificados dataModify?
            // vou carregar tudo denovo, depois posso criar um 
            // sistema mais estável para verificar a data de modify 
            //      * preciso bolar uma estratégia com requisitos em segurança 
            //      e verificações de chaves!*/ 
            
        }else{
            //console.log("User Vazio");
            navigation.replace("Login");
        }
            
    };

    useEffect(()=>{
        fontes();
        
        setTimeout(()=>{
            checkToken();
            //_removeTokens();    
            //navigation.replace("Login");
        },1500);
        
    },[]);
        
    async function _removeTokens() {
        const jsBanco = await AsyncStorage.removeItem("Banco");
        
        console.log(jsBanco);    
    }

    return(
        <CompLoad/>
    );
}
