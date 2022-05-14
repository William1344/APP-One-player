import { StyleSheet } from "react-native";
import {Cor, styles} from '../../styles/index_S';

const stylesMem = StyleSheet.create({
    telaFull: {
        alignItems: 'center',
        justifyContent: 'center',
        ...styles.tela,
    },
    // toto 23 %
    viewPedis:{
        
        height: '30%',
        width: '100%',
        //...styles.border1,
    },

    viewMembros:{
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10,
        //...styles.border1
    },
        //texte title
        titleM:{
            height: "13%",
            width: '100%',
            ...styles.texts,
            fontSize: 22,
        },
        // View Inferior
        viewInferioir: {
            width: '100%',
            height: "87%",
            justifyContent: 'center',
            alignItems: "center",
        },
            flatList: { //Flat List
                flex: 1,
                //height: '100%',
                width: '95%',
            },
        text_infos:{
            textAlign: 'justify',
            fontSize: 13,
            fontWeight: "bold",
            color: Cor.font,
        },
        text: {
            textAlign: "center",
            fontSize: 18,
            fontWeight: "bold",
            color: Cor.font,
        },
    
    
        
    // Comp para FlatList
        viewFL:{
            //height: '100%',
            width: '100%',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginVertical: 1,
            backgroundColor: Cor.ter, 
            borderWidth: 1,
            borderColor: Cor.bord, 
            borderRadius: 15
            
        },
            img_logoFL:{
                width: 70,
                height: 70,
                marginVertical: 15,
                marginLeft: 5,
                borderWidth: 2,
                borderRadius: 60,
                borderColor: Cor.bord,

            },
            viewInfos_FL: {
                flex: 7,
                marginLeft: 10,

            },
            
            txtN: {
                textAlign: "center",
                fontSize: 18,
                fontWeight: "bold",
                color: Cor.font,
            },
    // modal
    viewFullModal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    viewModal_confMembros: {
        justifyContent  : 'flex-start',
        alignItems      : 'center',
        width           : '100%',
        height          : '70%',
        marginTop       : 25,
        backgroundColor : Cor.pri,
        borderRadius    : 30,
        borderColor     : Cor.bord,
        borderWidth     : 3,
    },
        
        title_modal:{
            alignItems: 'center',
            ...styles.texts,
            fontSize: 26,
            marginTop: 7,
        },
        view_inputs:{
            justifyContent  : 'center',
            alignItems: 'center',
            height : '80%',
            width: '100%',
        },
        
            
            btt_Modal:{
                justifyContent: 'center',
                width: '60%',
                borderRadius: 10,
                marginVertical: 5,
                alignItems: "center",
                backgroundColor: Cor.btt,
                padding: 10,
                borderColor: Cor.bord,
                borderWidth: 1
            },
            btt_Meio:{
                justifyContent: 'center',
                width: '40%',
                borderRadius: 10,
                marginVertical: 5,
                alignItems: "center",
                backgroundColor: Cor.btt,
                padding: 7,
                borderColor: Cor.bord,
                borderWidth: 1
            },
            text_btt:{
                justifyContent: 'center',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 18,
                color: Cor.font,
            },

});
export default stylesMem;
