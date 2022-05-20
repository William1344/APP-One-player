import React, {useEffect, useState} from 'react';
import { 
  Text, View, Image, TouchableOpacity, ScrollView, StatusBar, BackHandler,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import configBD from '../../../../config/config.json';
import {Topo} from '../../components/index_comps';
import { useNavigation } from '@react-navigation/native';
import banco from '../../../back-end2/banco_local';
import style_SI from './styleSI';
import {RetornaImg} from '../../functions/index';
import {Cor, icons} from '../../styles/index_S';
import assets from '../../../../assets/index_assets';

export default function Subst_Img(){
  const navigation = useNavigation();
  const [state, setState] = useState(false);

  function backAction(){
    navigation.replace("MainP");
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => {BackHandler.removeEventListener('hardwareBackPress', backAction);};
  }, []);

  async function setar_Img(value){ // value é o valor referente ao icon
    console.log("userMaster", banco.userMaster.image)
    console.log("Value", value)
    
    if(banco.userMaster.image != value){
      let reqs = await fetch(configBD.urlRootNode + '/setar_img_user',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idUser  : banco.userMaster.id,
          val     : value
        })
      });
      let resp = await reqs.json();
      if(resp.status){
        banco.userMaster.image = value;
        Alert.alert('Sucesso!', resp.msg);

      } else {
        Alert.alert('Erro!', 'Erro ao alterar imagem!');
      }
    }
  }

  function render_grande(){
    return (
      <View style = {style_SI.tela}>
        <Text style = {style_SI.title}> Selecione Imagem </Text>
        <ScrollView style = {style_SI.scrool}>
          <View style = {style_SI.linha}>
            <TouchableOpacity style = {{...style_SI.btt_img, justifyContent: 'center', alignItems: 'center'}}
              onPress = {() => {
                Alert.alert("Disponivel em breve!");
              }}
            >
              <Icon
                name    = {icons.mais}
                color   = {Cor.sec}
                size    = {100}
              /> 
            </TouchableOpacity>
            <TouchableOpacity style = {style_SI.btt_img}
              onPress = {() => setar_Img(0)}
            >
              <Image style = {style_SI.img_logo}
                source = {assets.play_lg} 
              />  
            </TouchableOpacity>  
          </View>
          <View style = {style_SI.linha}>
            <TouchableOpacity style = {style_SI.btt_img}
              onPress = {() => setar_Img(1)}
            >
              <Image style = {style_SI.img_logo}
                source = {assets.play_lg2} 
              />  
            </TouchableOpacity>
            <TouchableOpacity style = {style_SI.btt_img}
              onPress = {() => setar_Img(2)}
            >
              <Image style = {style_SI.img_logo}
                source = {assets.play_lg3} 
              />  
            </TouchableOpacity>  
          </View>

          <View style = {style_SI.linha}>
            <TouchableOpacity style = {style_SI.btt_img}
              onPress = {() => setar_Img(3)}
            >
              <Image style = {style_SI.img_logo}
                source = {assets.play_lg4} 
              />  
            </TouchableOpacity>
            <TouchableOpacity style = {style_SI.btt_img}
              onPress = {() => setar_Img(4)}
            >
              <Image style = {style_SI.img_logo}
                source = {assets.play_lg5} 
              />  
            </TouchableOpacity>  
          </View>
          <View style = {style_SI.linha}>
            <TouchableOpacity style = {style_SI.btt_img}
              onPress = {() => setar_Img(5)}
            >
              <Image style = {style_SI.img_logo}
                source = {assets.play_lg6} 
              />  
            </TouchableOpacity>
            <TouchableOpacity style = {style_SI.btt_img}
              onPress = {() => setar_Img(6)}
            >
              <Image style = {style_SI.img_logo}
                source = {assets.play_lg1} 
              />  
            </TouchableOpacity>  
          </View>
          <View style = {style_SI.linha}>
            <TouchableOpacity style = {style_SI.btt_img}
              onPress = {() => setar_Img(7)}
            >
              <Image style = {style_SI.img_logo}
                source = {assets.play_lg8} 
              />  
            </TouchableOpacity>
            <TouchableOpacity style = {style_SI.btt_img}
              onPress = {() => setar_Img(8)}
            >
              <Image style = {style_SI.img_logo}
                source = {assets.play_lg7} 
              />  
            </TouchableOpacity>  
          </View>
          <View style = {style_SI.linha}>
            <TouchableOpacity style = {style_SI.btt_img}
              onPress = {() => setar_Img(9)}
            >
              <Image style = {style_SI.img_logo}
                source = {assets.play_lg9} 
              />  
            </TouchableOpacity>
            <TouchableOpacity style = {style_SI.btt_img}
              onPress = {() => setar_Img(10)}
            >
              <Image style = {style_SI.img_logo}
                source = {assets.play_lg10} 
              />  
            </TouchableOpacity>  
          </View>
          <View style = {style_SI.linha}>
            <TouchableOpacity style = {style_SI.btt_img}
              onPress = {() => setar_Img(11)}
            >
              <Image style = {style_SI.img_logo}
                source = {assets.play_lg11} 
              />  
            </TouchableOpacity>
            <TouchableOpacity style = {style_SI.btt_img}
              onPress = {() => setar_Img(12)}
            >
              <Image style = {style_SI.img_logo}
                source = {assets.play_lg12} 
              />  
            </TouchableOpacity>  
          </View>
  
        </ScrollView>  
      </View>
    );
  }

  // Topo = 23% da altura da tela
  return (
    <View style = {style_SI.telaFull}>
      <Topo main = {false}/> 
      {render_grande()}
    </View>
  )
}
