import React, { useEffect, useState } from 'react';
import {
    Text, View, StatusBar, FlatList, SafeAreaView, 
    TouchableOpacity, BackHandler,
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import stylesVJ from './stylesVJ';
import { Topo } from '../../components/index_comps';
import { Cor, icons } from '../../styles/index_S';

export default function List_Jogos({route}){
    const navigation = useNavigation();
    const [sel_J, setSel_J] = useState(true);
    const [Cor1 , setCor1]  = useState(Cor.btt_sel);
    const [Cor2 , setCor2]  = useState(Cor.btt);
    
    useEffect(()=>{
        BackHandler.addEventListener("hardwareBackPress", backAction);
        return () => BackHandler.removeEventListener("hardwareBackPress", backAction);
    },[]);
    
    function backAction(){
        navigation.replace("MainL",{
            liga    : route.params.liga,
            dest    : route.params.dest,
        });
        return true;
    }

    function Comp_FL({item}){
        
        function render_times(){
            return (
                <>
                    <View style={stylesVJ.viewTimeX}>
                        <Text style={stylesVJ.textComp}> {item.timeA[0].apelido} </Text>
                        <Text style={stylesVJ.textComp}> {item.timeA[1].apelido} </Text>
                        <Text style={stylesVJ.textComp}> {item.timeA[2].apelido} </Text>
                    </View>
                    <View style={stylesVJ.viewTimeX}>
                        <Text style={stylesVJ.textComp}> {item.timeB[0].apelido} </Text>
                        <Text style={stylesVJ.textComp}> {item.timeB[1].apelido} </Text>
                        <Text style={stylesVJ.textComp}> {item.timeB[2].apelido} </Text>
                    </View>
                </>

            );
        }
        
        
        function next_ViewJogo(){
            //console.log(item)
            if(sel_J) // true => 3x3
                navigation.push("ViewJG3", {
                    game    : item,
                    de_onde : false,
                    liga    : route.params.liga,
                    dest    : route.params.dest
                });
            else //false => 5x5
                navigation.push("ViewJG5", {
                    game    : item,
                    de_onde : false,
                    liga    : route.params.liga,
                    dest    : route.params.dest
                });
        }
        
        return(
            <View style = {{
                justifyContent: 'flex-start',
                alignItems: 'center',    
            }}>
            <TouchableOpacity style = {stylesVJ.viewFL}
                onPress = {()=>next_ViewJogo()}
            >
                <View style = {stylesVJ.viewInfo}>
                    <Text style = {stylesVJ.textIn}>{item.nome}</Text>
                    <Text style = {{...stylesVJ.textComp, textAlign: 'center'}}>Time A |{item.plcA} x {item.plcB}| Time B</Text>
                </View>
                <View style = {stylesVJ.viewTimes}>
                    {render_times()}
                </View>
            </TouchableOpacity>
            </View>
        );
    };

    function sel_Jogos(){
        if(sel_J) return route.params.liga.listJgs3x3
        else      return route.params.liga.listJgs5x5
    }

    return(
        <View style = {stylesVJ.telaFull}>
            <StatusBar
                hidden = {true}
                barStyle="ligth-content"
                //backgroundColor={"#4169E1"} // royalbluee
            />
            <Topo/>
            <View style = {stylesVJ.viewInf}>
            <View style = {stylesVJ.view_sel}>
                <TouchableOpacity style = {{...stylesVJ.btt_selJogo, backgroundColor: Cor1}}
                    onPress = {() => {
                        setSel_J(true);
                        setCor1(Cor.btt_sel);
                        setCor2(Cor.btt);
                    }}
                >
                    <Text style = {stylesVJ.titleM}> Jogos 3x3 </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {{...stylesVJ.btt_selJogo, backgroundColor: Cor2}}
                    onPress = {() => {
                        setSel_J(false);
                        setCor1(Cor.btt);
                        setCor2(Cor.btt_sel);
                    }}
                >
                    <Text style = {stylesVJ.titleM}> Jogos 5x5 </Text>
                </TouchableOpacity>
            </View>
            <SafeAreaView style = {stylesVJ.viewInferioir}>
                <FlatList style = {stylesVJ.flatList}
                    data = {sel_Jogos()}
                    renderItem = {Comp_FL}
                    keyExtractor = {(item) => {item.idJogos}}
                />
            </SafeAreaView>
            </View>
        </View>
    );
}
