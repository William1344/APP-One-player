import React, {useEffect, useState} from 'react';
import {
    Text, View, TouchableOpacity, Alert, Image, TextInput, 
    KeyboardAvoidingView, Keyboard, StatusBar, Modal
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './stylesL';
import assets from '../../../../assets/index_assets';
//import configBD from '../../../../config/config.json';
import configBD from '../../../../config/config.json';
import banco from '../../../back-end2/banco_local'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import CompLoad from '../Load/CompLoad';

export default function Login(){
    const navigation            = useNavigation();
    const [textName, setName]   = useState("will@gmail.com");
    const [textSenha, setSenha] = useState("123");
    const [modLoad, setModLoad] = useState(false);

    let totalPnts = 0;
    useEffect(()=>{
        totalPnts = 0; // zera total pontos
        // dados prontos para renderizar
        banco.ligas        = [];
        banco.userMaster   = null;
        banco.ress_servidor= null;
        //console.log("Zerou banco local");
    }, []);

    const verifLogin = async function(nm, sn){
        setModLoad(true);
        //console.log("entrou-> ",configBD.urlRootNode)
        let reqs = await fetch(configBD.urlRootNode +'login_user',{
            method: 'POST',
            headers: {
                Accept:'application/json',
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                email      : nm,
                password   : sn,
            })
        });
        let ress = await reqs.json();
        //console.log("UserM aqui=> ", ress);
        
        if(ress.status){
            banco.userMaster = ress.userM;
            banco.ligas      = ress.ligas;
            banco.pedidos    = ress.pedidos;
            _salveData(banco);
            navigation.replace("MainP");
            //console.log("Array com as ligas!", ress.ligs);
        }else {
            setModLoad(false);
            console.log("Erro ao fazer login");
        }
        
    }

    function renderModal(){
        return (
            <Modal 
                animationType="slide"
                transparent={true}
                visible={modLoad}
                onRequestClose={() => {
                    setModLoad(!modLoad);
                }}
            >
                <CompLoad/>
            </Modal>
        );
    }

    async function _salveData(banco){
        try{
            const jsonBD = JSON.stringify(banco);
            await AsyncStorage.setItem("Banco", jsonBD);
        } catch(e){
            console.log("Erro ao salvar dados");
        }
    }



    function cadastrar(){
        navigation.replace("Cadastro");
    }
    
    return(
        <View style = {styles.telaFull}>
            {renderModal()}
            <StatusBar
                hidden = {true}
                barStyle="ligth-content"
            />
            <View style = {styles.view_img}>
                <Image style = {styles.img} 
                    source={assets.login2}/>
                <Text style={styles.title_L}>One Player</Text>
            </View>
            <View style = {styles.login_view}>
                <KeyboardAvoidingView 
                    style = {styles.keyBoard}
                    behavior = {Platform.select({
                        ios : 'padding',
                        android : 'height',
                    })}
                    
                    
                >    
                    <TextInput style = {styles.input}
                        value           = {textName}
                        onChangeText    = {(txt)=>{setName(txt)}}
                        keyboardType    = "email-address"
                        placeholder     = "Email"
                    />
                
                    <TextInput style = {styles.input}
                        value           = {textSenha}
                        onChangeText    = {(txt)=> {setSenha(txt)}}
                        keyboardType    = "email-address"
                        placeholder     = "Senha"
                    />
                    <TouchableOpacity style = {styles.buttonEnt}
                    onPress={()=> verifLogin(textName, textSenha)}
                    >
                    <Text style = {styles.textN}>Entrar</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>    
                
                <TouchableOpacity style = {styles.buttonCad}
                    onPress={()=> cadastrar()}
                >
                    <Text style = {styles.textN}>Cadastrar</Text>
                </TouchableOpacity>              
            </View>
        </View>
    );
}
