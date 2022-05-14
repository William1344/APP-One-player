import { StyleSheet } from "react-native";
import {fonts, styles, Cor} from '../../../styles/index_S';

const stylesCJ = StyleSheet.create({
    compFull:{
        justifyContent:'center',
        alignItems: 'center',
        flex: 1,
        marginBottom: 5,
    },

    btt_fl:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 80,
        width: '98%',
        ...styles.borderRad,

    },
        img:{
            height: "80%",
            width: "30%",
            ...styles.border2,
            borderRadius: 45,
            marginLeft: 8,
        },
        viewInfos:{
            justifyContent: 'center',
            alignItems: 'flex-start',
            height: '100%',
            width: '68%',
            marginLeft: 10,
        },
            text_infos:{
                ...styles.texts,
                fontSize: 16,
                textAlign: 'justify',
            },
    

}); export default stylesCJ;
