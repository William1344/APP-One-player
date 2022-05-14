import { StyleSheet } from "react-native";
import { Cor, fonts, styles } from "../../../styles/index_S";

const stylesModal = StyleSheet.create({
    viewFullModal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    viewModal_newLiga: {
        justifyContent  : 'center',
        alignItems      : 'center',
        width           : '100%',
        height          : '70%',
        marginTop       : 25,
        backgroundColor : Cor.pri,
        borderRadius    : 30,
        ...styles.border3,        
    },
        title_modal:{
            ...styles.texts,
            alignItems: 'center',
            fontSize: 30,
            textAlign: 'center',
            marginTop: 7 
        },
        view_inputs:{
            justifyContent  : 'flex-start',
            alignItems: 'center',
            height : '80%',
            width: '100%',
        },
        keyBoard:{
            width: '100%',
            justifyContent: 'flex-start',
            alignItems: 'center',
        },
            
            txt_input:{
                ...styles.inputText,
                width: "80%",
                padding: 11,
                marginHorizontal: 15,
                marginTop: 15,
                marginBottom: 10
            },
            btt_Meio:{
                ...styles.btts,
                justifyContent: 'center',
                width: '60%',
                marginVertical: 5,
                padding: 7,
            },
            text_btt:{
                ...styles.text_btts,
                justifyContent: 'center',
                textAlign: 'center'
            },
            txt_aviso:{
                ...styles.texts,
                fontSize: 28,
            },
        viewInfor: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '70%',
            //...styles.border1,
        }

});
export default stylesModal;
