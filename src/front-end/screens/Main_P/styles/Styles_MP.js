import { StyleSheet } from "react-native";
import {styles, Cor, fonts} from '../../../styles/index_S';

const styles_MP = StyleSheet.create({
    telaFull: {
        ...styles.tela,
        alignItems: 'center',
        justifyContent: 'center',
    },
    // <Topo/> height : 25%
    viewLiga:{
        height: '74%',
        width: '99%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 2,
    },
        txt_TitleM:{
            alignItems: 'center',
            fontSize: 24,
            fontFamily: fonts.titlesN,
            textAlign: 'center',
            marginTop: 7,
            color: Cor.font,           
        },
        viewL: {
            justifyContent  : 'center',
            alignItems      : 'center',
            width           : '100%',
            height          : '70%',
        },
            textAviso:{
                width : '60%',
                textAlign: 'justify',
                fontSize: 18,
                fontFamily: fonts.infos,
                color: Cor.font,
            },
            flatLiga:{
                flex: 1,
                width: '99%',
            },   
    viewBttns:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 50,
        width: '100%',        
        marginBottom: 5,
        borderTopWidth: 1,
        borderColor: Cor.bord,
    },
        btt_new_liga:{
            justifyContent: 'center',
            alignItems: 'center',
            width : 55,
            height : 55,
        }, 
            btt_icon:{
                justifyContent: 'center',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 26,
                color: Cor.font,
            },
            btt_img_icon:{
                
            },
    viewFullModal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    viewModal_newLiga: {
        justifyContent  : 'flex-start',
        alignItems      : 'center',
        width           : '100%',
        height          : '90%',
        marginTop       : 10,
        backgroundColor : Cor.pri,
        borderRadius    : 30,
        ...styles.border3
    },
    viewModal_confLiga: {
        justifyContent  : 'flex-start',
        alignItems      : 'center',
        width           : '100%',
        height          : '50%',
        marginTop       : 25,
        backgroundColor : Cor.pri,
        borderRadius    : 30,
        borderColor     : Cor.bord,
        borderWidth     : 3,
    },
    
        title_modal:{
            alignItems: 'center',
            height: '8%',
            fontFamily: fonts.titlesN,
            fontSize: 24,
            textAlign: 'center',
            marginTop: 7,
            color: Cor.font,   
        },
        view_imputs:{
            justifyContent  : 'center',
            alignItems      : 'center',
            height          : '90%',
            width           : '100%',
        },
            viewImSup:{
                justifyContent  : 'center',
                alignItems      : 'center',
                height          : '88%',
                width           : '100%',
            },
            viewImBtts:{
                flexDirection   : 'row',
                justifyContent  : 'center',
                alignItems      : 'center',
                height          : '12%',
                width           : '100%',
            },
        keyBoard:{
            width           : '100%',
            justifyContent  : 'flex-start',
            alignItems      : 'center',
        },
            
        txt_input:{
            ...styles.inputText,
            width: "80%",
            padding : 8,
            marginVertical: 10,            
            marginHorizontal: 10,
        },
            btt_Modal:{
                ...styles.btts,
                justifyContent: 'center',
                width: '60%',
                marginVertical: 5,
                padding: 10,
            },
            btt_Meio:{
                justifyContent: 'center',
                alignItems: "center",
                width: '40%',
                height: '10%',
                borderRadius: 10,
                marginTop: 10,
                backgroundColor: Cor.btt,
                ...styles.border1,
            },
            text_btt:{
                justifyContent: 'center',
                textAlign: 'center',
                ...styles.text_btts,
                fontSize: 18,  
            },
    viewCompPesq:{
        justifyContent  : 'center',
        alignItems      : 'center',
        height          : '100%',
        width           : '90%',
        borderColor     : Cor.bord,
        borderWidth     : 1,
    }

});
export default styles_MP; 
