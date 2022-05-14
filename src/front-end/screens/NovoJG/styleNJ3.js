import { StyleSheet } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { Cor, styles, fonts } from "../../styles/index_S";

const stylesNJ = StyleSheet.create({
    telaFull: {
        ...styles.tela,
        justifyContent  : 'space-between',
        alignItems      : 'center',
    },
    viewTopo:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 5,
        alignItems: 'stretch',
        height: '10%',
        width: '100%',
    },
        imgPf:{
            width: 50,
            height: 50,
            position:   'absolute',
            top: 5,
            left:  6,
            borderRadius: 45,
            ...styles.border1,
            
        },
        viewInfos:{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '70%',
        },
        textInfos: {
            ...styles.texts,
            textAlign: 'justify',
            width: '95%',
            justifyContent: 'center',
            fontSize: 14,
            marginLeft: 10
        },
        bbtConf: {
            position    : "absolute", 
            top         : 15, 
            right       : 15,            
        },
    viewMT:{
        
        height: '40%',
        width: '100%',
    }, 
    viewModo: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '20%',
        width: '100%',
        borderWidth: 0,
        borderBottomWidth:0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderColor: Cor.bord,
    },
        bttEnd:{
            justifyContent: 'center',
            alignItems: 'center',
            height: '70%',
            width: '35%',
            alignSelf: 'center',
            ...styles.btts,
            borderRadius: 30,
        },
        bttModo: {
            justifyContent: 'center',
            marginHorizontal: 15,
            height: '70%',
            width: '17.5%',
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
            fontSize: 24,
        },
     
    viewTimes:{
        flexDirection: "row",
        height: '80%',
        width: '100%',
        
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
        height: '48%',
        width: '100%',
        ...styles.border1,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        marginTop: 6,
    },
    viewFlats:{
        justifyContent: 'center',
        alignItems: 'center',
        height: '80%',
        width: '99%',
    },
        flatLJgdrs:{
            width: '98%',
            height: '88%',
        },
        text: {
            height: '12%',
            width: '100%',
            ...styles.texts,
            fontSize: 20,
            ...styles.border1,
        },
    
    // componente jogador
    viewCompTime:{
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: '70%',
        height: 60,
        ...styles.border1,
        borderRadius: 20
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
