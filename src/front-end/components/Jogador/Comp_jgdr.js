import React from "react";
import stylesCJ from "./stylesCJ";
import {Text, View, Image, TouchableOpacity } from 'react-native';
import styles from "../../styles/styleS";

const Comp_jgdr = function({item}){
    return(
        <View style = {stylesCJ.compFull}>
        <TouchableOpacity style = {stylesCJ.btt_fl}>
            <Text style = {{...styles.texts}}> {item.nome}</Text>
            <Text style = {{...styles.texts}}> {item.nome}</Text>
        </TouchableOpacity>
        </View>
    );
}; export default Comp_jgdr;