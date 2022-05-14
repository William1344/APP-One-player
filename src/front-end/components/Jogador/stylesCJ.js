import { StyleSheet } from "react-native";
import {fonts, styles, Cor} from '../../styles/index_S';

const stylesCJ = StyleSheet.create({
    compFull:{
        flex: 1,
        backgroundColor: Cor.btt
    },

    btt_fl:{
        height: 80,
        width: '98%',
        ...styles.border1
    }

}); export default stylesCJ;