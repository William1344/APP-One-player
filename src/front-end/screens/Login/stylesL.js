import { StyleSheet } from "react-native";
import {Cor} from '../../styles/colors';
import styles from '../../styles/styleS';

const stylesL = StyleSheet.create({
    telaFull : {
        ...styles.tela,
        justifyContent  :   'flex-start',
        alignItems      :   'center',
          
    },
    view_img:{
        height: '35%',
        width: '100%',
        marginTop: 20,
        alignItems: 'center',
        marginBottom: 5,
    }, 
        img:{
            height: '80%',
            width: '60%',
        },
        title_L:{
            ...styles.titles_tela,
            width: '80%',
        },
    login_view:{
        height: '60%',
        width: '100%',
        alignItems: 'center',
        marginTop: 15,
    },
        keyBoard:{
            height: '50%',
            width: '100%',
            justifyContent: 'flex-start',
            alignItems: 'center',
        },
            input:{
                ...styles.inputText,
                width: "80%",
                padding : 8,
                marginVertical: 10,            
                marginHorizontal: 10,
            },
            buttonEnt: {
                ...styles.btts,
                padding             : 5,
                width               : '50%',
                justifyContent      : "center",
                marginVertical      : 10,
            },    
        buttonCad: {
            ...styles.btts,
            padding             : 5,
            width               : '50%',
            justifyContent      : "center",
            marginVertical      : 10,
        },
            textN: {
                ...styles.text_btts,
            },
});
export default stylesL;