import { StyleSheet } from "react-native";
import { styles, Cor, fonts } from "../../styles/index_S";

const styles_Cad = StyleSheet.create({
    telaFull: {
        ...styles.tela,
        justifyContent  :   'space-between',
        alignItems      :   'center',
    },
    
    view_img_cad:{
        height          : '40%',
        width           : '100%',
        marginTop       : 20,
        alignItems      : 'center',
        marginBottom    : 5,
    },
        img:{
            height: '70%',
            width: '60%',
        },
        title_L:{
            ...styles.titles_tela,
            width: '80%',
        },
    cad_view:{
        height          :   '55%',
        width           :   '100%',
        justifyContent  :   'flex-start',
        alignItems      :   'center',
        marginTop       :   5,
    },
        keyBoard:{
            height          : '100%',
            width           : '100%',
            justifyContent  : 'flex-start',
            alignItems      : 'center',
            marginTop       : 30,
        },
            input:{
                ...styles.inputText,
                width           : "80%",
                padding         : 8,
                marginVertical  : 10,            
               
            },
            button: {
                ...styles.btts,
                padding             : 5,
                width               : '50%',
                justifyContent      : "center",
                marginVertical      : 10,
            },
            but_text: {
                ...styles.text_btts
            },
    //modal
    viewFullModal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    viewModal_Formulario: {
        justifyContent  : 'center',
        alignItems      : 'center',
        width           : '100%',
        height          : '70%',
        marginTop       : 25,
        backgroundColor : Cor.pri,
        borderRadius    : 30,
        ...styles.border3
    },
});
export default styles_Cad;
