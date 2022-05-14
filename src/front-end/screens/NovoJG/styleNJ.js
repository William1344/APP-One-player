import { StyleSheet } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { Cor, styles, fonts } from "../../styles/index_S";

const stylesNJ = StyleSheet.create({
    telaFull: {
        ...styles.tela,
        justifyContent  : 'flex-start',
        alignItems      : 'center',
    },
    viewTopo:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 5,
        alignItems: 'center',
        height: '7%',
        width: '100%',
    },
        imgPf:{
            width: 50,
            height: 50,
            borderRadius: 45,
            ...styles.border1,
            marginLeft: 10,
        },
        viewInfos:{
            justifyContent: 'center',
            alignItems: 'flex-start',
            height: '100%',
            width: '70%',
        },
        textInfos: {
            ...styles.texts,
            justifyContent: 'center',
            fontSize: 14,
            marginLeft: 10
        },
        bbtConf: {
            position    : "absolute", 
            top         : 5, 
            right       : 15,            
        },
    viewModo: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        height: '7%',
        width: '100%',
        marginTop: 10,
    },
        bttModo: {
            justifyContent: 'center',
            height: '95%',
            width: '15%',
            ...styles.btts_redondo,
            backgroundColor: Cor.btt
        },
        bttText:{
            ...styles.text_btts,
            textAlign: "center",
            fontSize: 20,
        },
        textModo: {
            height: '100%',
            width: '40%',
            marginHorizontal: 13,
            justifyContent: 'center',
            textAlignVertical: 'center',    
            ...styles.texts,
            fontSize: 20,
        },
    viewTimes:{
        flexDirection: "row",
        height: '30%',
        width: '100%',
        marginTop: 6,
    },
        viewTA:{
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: '100%',
            width: '49%',
            borderBottomRightRadius: 30,
            borderTopRightRadius: 30,
            ...styles.border1,
            marginRight: 3
        },
        viewTB:{
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: '100%',
            width: '49%',
            ...styles.border1,
            marginLeft: 3,
            borderBottomLeftRadius: 30,
            borderTopLeftRadius: 30,
        },
        textSub: {
            justifyContent: 'center',
            height: '12%',
            width: '100%',
            ...styles.texts,
            fontSize: 18,
            marginTop: 5 
        },
        textVT: {
            height: '12%',
            width: '100%',
            marginTop: 5,
            marginHorizontal: 13,
            justifyContent: 'center',
            textAlignVertical: 'center',
            ...styles.texts,
            fontSize: 18,
        },
        flatLT:{
            width: '100%',
            height: '88%',
            borderTopWidth: 1,
            borderColor: Cor.bord,
        },
            viewBttFL:{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                            
            },
            textName:{
                flex: 1,
                width: '100%',
                ...styles.texts,
                fontSize: 20 
            },
    viewJgdrs: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '42%',
        width: '100%',
        ...styles.border1,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        marginTop: 6,
    },
        flatLJgdrs:{
            width: '70%',
            height: '88%',
        },
        text: {
            height: '12%',
            width: '100%',
            ...styles.texts,
            fontSize: 20,
            ...styles.border1,
        },
    bttEnd:{
        justifyContent: 'center',
        alignItems: 'center',
        height: '7%',
        width: '40%',
        marginTop: 10,
        ...styles.btts,
        borderRadius: 30,
    },
    btt_text:{
        textAlign: "center",
        ...styles.texts, 
        fontSize: 14,
    },
    // componente jogador
    viewCompTime:{
        
        width: '98%',
        ...styles.border1
    },
    textTime:{
        textAlign: "center",
        ...styles.texts, 
        fontSize: 14,
    },
    btt_jgdr:{
        height: '12%',
        width: '100%',
    }
}); 


export default stylesNJ;
