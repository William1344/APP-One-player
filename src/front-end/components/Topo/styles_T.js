import { StyleSheet } from "react-native";
import {Cor, styles, fonts} from '../../styles/index_S';

const stylesT = StyleSheet.create({
    viewSuperior:{
        flexDirection: 'row',
        height: '23%',
        width: "99%",
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 3,
    },
        btt_img:{
            flex : 3.5,
            height: '80%',
            marginLeft: 10,
        },
            img_logo:{
                height: '100%',
                width: '100%',
                ...styles.border2,
                borderRadius: 90,
            }, 
        view1_infos:{
            flex: 6.5,
            alignItems: 'stretch',
            alignSelf: 'center',
            marginLeft: 10,
        },
            text_infos:{
                textAlign: 'justify',
                fontSize: 16,
                fontFamily: fonts.infos,
                color: Cor.font,
            },
        barra:{
            width: '100%',
            ...styles.border2,
        }

}); export default stylesT;