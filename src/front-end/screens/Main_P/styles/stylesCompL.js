import { StyleSheet } from "react-native";
import { Cor, styles, fonts } from '../../../styles/index_S';

const stylesCompL = StyleSheet.create({
    view_compFull: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 130,
        width: '100%',
    },
    btt_comp_liga:{
        flexDirection       : 'row',
        justifyContent      : 'space-around',
        alignItems          : 'center',
        height              : '98%',
        width               : '98%',
        backgroundColor     : Cor.ter,
        ...styles.borderRad,
    },
        img_logo:{
            height : '70%',
            width: '29%',
            marginLeft: 2,
            borderRadius: 45,
            //...styles.border2,
        },
        viewInf:{
            justifyContent: 'center',
            alignItems: 'flex-start',
            height: '80%',
            width: '65%',
        }, 
            textTitle:{
                textAlign: 'justify',
                fontSize: 16,
                fontFamily: fonts.titlesN,
                marginLeft: 5,
                color: Cor.font,
            },
            textInfos:{
                textAlign: 'justify',
                fontSize: 14,
                fontFamily: fonts.infos,
                marginLeft: 5,
                color: Cor.font,
            },

    
}); export default stylesCompL;
