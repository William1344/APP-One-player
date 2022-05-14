import { StyleSheet } from "react-native";
import {Cor, fonts, styles} from '../../styles/index_S';

const styleR = StyleSheet.create({
    telaFull:{
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: Cor.pri
    },
    
    viewTopo:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '20%',
        width: '98%',
        
        
    },
        viewTopoL:{
            flexDirection: 'row',
            height : '100%',
            width: '25%',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'flex-start',
        },
        imgLiga:{
            height: 55,
            width: 55,
            borderRadius: 45,
            ...styles.border1,
        },
        viewIN:{
            justifyContent: 'center',
            alignItems: 'flex-start',
            height: '100%',
            width: '60%',
        },
            textInf: {     
                ...styles.texts,
                fontSize: 12,
                marginLeft: 5
            },
        view_bttRankSelc:{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '100%',
            width: '75%',
            
        },
            btt_Tipo:{
                justifyContent: 'center',
                alignItems: 'center',
                height: '60%',
                width: '12%',
                borderRadius: 30,
                marginHorizontal: 1,
                ...styles.border1,
                
            },
            btt_Modo:{
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'flex-end',
                height: '60%',
                width: '18%', 
                ...styles.border2,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                borderBottomWidth: 0,
            },
                text_btt:{
                    ...styles.text_btts,
                    fontSize: 15,

                },
    viewRank: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '79%',
        width: '99%',
        //...styles.border1,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,    
    },
        
        viewRank_Cab:{
            justifyContent: 'space-around',
            alignItems: 'flex-start',
            height: '10%',
            width: '100%',
            marginLeft: 20
        },
        viewFlat:{
            justifyContent: 'space-around',
            alignItems: 'flex-start',
            height: '85%',
            width: '100%',
            marginLeft: 20
        },
        flatL: {
            height: '100%',
            width: '100%',
        },

    // Componente View Ranking
    compFull: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    textCabN:{
        height: '100%',
        width: '27%',
        justifyContent: 'center',
        ...styles.texts,
        textAlignVertical: 'center',
        textAlign: 'justify',
        fontSize: 14,
        ...styles.border1
    },    
    textCab:{
        height: '100%',
        width: '10%',
        justifyContent: 'center',
        ...styles.texts,
        textAlignVertical: 'center',
        fontSize: 14,
        ...styles.border1,  
    }
}); export default styleR