import { StyleSheet } from "react-native";
import {Cor} from './colors';
import fonts from './fontsF';
import fontes from './fontes_App';

const styles = StyleSheet.create({
    tela: {
        flex            :   1,
        width           :   '100%',   
        backgroundColor :   Cor.pri,
    },
    
    inputText:{
        textAlign       : "left",
        fontSize        : 16,
        fontWeight      : "bold",
        borderWidth     : 2,
        borderColor     : Cor.bord,
        borderRadius    : 10,
        backgroundColor : Cor.sec,
        color           : Cor.black,
    }, 
    titles_tela:{
        fontSize    : 40,
        fontFamily  : fontes.title,
        textAlign   : "center",
        color       : Cor.font,
    },
    subTitles_tela:{
        fontSize    : 35,
        fontFamily  : fontes.subTitle,
        textAlign   : "center",
        color       : Cor.font,
    },
    texts: {
        fontSize            : 30,
        fontFamily          : fonts.infos,
        textAlignVertical   : "center",
        textAlign           : "center",
        color               : Cor.font,
    },
    btts: {
        alignItems      : "center",
        backgroundColor : Cor.btt,
        borderWidth     : 1,
        borderRadius    : 20,
        borderColor     : Cor.bord,
    },
    btts_redondo: {
        alignItems      : "center",
        backgroundColor : Cor.btt,
        borderWidth     : 1,
        borderRadius    : 45,
        borderColor     : Cor.bord,
    },
    text_btts: {
        fontSize            : 16,
        fontFamily          : fonts.btt_text,
        color               : Cor.btt_font,
        textAlignVertical   : "center",
    },
    border1:{
        borderColor : Cor.bord,
        borderWidth : 1,
    },
    border2:{
        borderColor : Cor.bord,
        borderWidth : 2,
    },
    border3:{
        borderColor : Cor.bord,
        borderWidth : 3,
    },
    borderRad:{
        borderColor : Cor.bord,
        borderWidth : 1,
        borderRadius: 30,
    },
    borderImg:{
        borderColor : Cor.bord,
        borderWidth : 2,
        borderRadius: 90,
    }
    

});
export default styles;
