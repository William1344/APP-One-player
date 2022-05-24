import { StyleSheet } from "react-native";
import { Cor, styles, fonts } from '../../styles/index_S';

const stylesVP = StyleSheet.create({
    telaFull: {
        justifyContent  : 'center',
        alignItems      : 'center',
        ...styles.tela,
    },
 
    viewS:{
        flexDirection   : 'row',
        justifyContent  : 'center',
        alignItems      : 'center',
        height          : '32%',
        width           : '98%',
        
    },
        viewIMG:{
            justifyContent  : 'center',
            alignItems      : 'center',
            height          : '70%',
            width           : '28%',
            marginRight     : 10,
            borderRadius    : 45,
            ...styles.border1,
        },
            icon:{
                justifyContent  : 'center',
                alignItems      : 'center',
                borderRadius    : 45,
            },
            img:{
                height          : '100%',
                width           : '100%',
                borderRadius    : 45,
            },
        viewInfosP:{
            justifyContent      : 'center',
            alignItems          : 'flex-start',
            height              : '90%',
            width               : '65%',
        },
            texts:{
                ...styles.texts,
                fontSize         : 20,
            },

    viewL: {
        justifyContent      : 'center',
        alignItems          : 'center',
        height              : '68%',
        width               : '98%',
    },
        viewBtt:{
            flexDirection   : 'row',
            justifyContent  : 'space-around',
            height          : '10%',
            width           : '95%',
            marginTop       : 10,
        },
            btt_modo:{
                justifyContent  : 'center',
                alignItems      : 'center',
                height          : '98%',
                width           : '45%',
                borderRadius    : 20,
                ...styles.border1,
            },
        viewR:{
            justifyContent      : 'flex-start',
            alignItems          : 'center',
            height              : '95%',
            width               : '95%',
        },
            btt_title:{
                flexDirection   : 'row',
                justifyContent  : 'center',
                alignItems      : 'center',
                height          : '12%',
                width           : '70%',
            },

          scrollV:{
            height              : '85%',
            width               : '100%',
          },
            viewEsc:{
                justifyContent  : 'flex-start',
                alignItems      : 'center',
                width           : '100%',
                height          : '100%',
            },
                viewLinha:{
                    flexDirection   : 'row',
                    justifyContent  : 'center',
                    alignItems      : 'center',
                    height          : 35,
                    width           : '100%',
                },
                textScor:{
                    height              : '100%',
                    width               : '48%',
                    textAlignVertical   : 'center',
                    ...styles.texts,
                    ...styles.border1,
                    fontSize            : 18, 
                },
});
export default stylesVP;
