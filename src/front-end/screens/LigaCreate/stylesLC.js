import { StyleSheet } from 'react-native';
import { Cor, styles, fonts } from '../../styles/index_S';

const stylesLC = StyleSheet.create({
  telaFull: {
    ...styles.tela,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Topo 23%
  viewInf:{ 
    height: '75%',
    width: '100%',
    //...styles.border1,
  },
  view_bars:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '12%',
    //...styles.border1,
  },
    btt_bar:{
      justifyContent: 'center',
      width: '32%',
      borderRadius: 10,
      marginVertical: 5,
      alignItems: "center",
      backgroundColor: Cor.btt,
      padding: 7,
      ...styles.border1,
    },
      text_btt:{
        justifyContent: 'center',
        textAlign: 'center',
        ...styles.text_btts,
        fontSize: 16,  
      },
    title_imputs:{
      alignItems: 'center',
      height: '8%',
      fontFamily: fonts.titlesN,
      fontSize: 24,
      textAlign: 'center',
      marginTop: 7,
      color: Cor.font,   
    },
    viewImSup:{
      justifyContent  : 'center',
      alignItems      : 'center',
      height          : '79%',
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
    flatLiga:{
      flex: 1,
      width: '99%',
      //...styles.border1,
    },   
    // componente imput
    viewCompImput:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '80%',
      height: 35,
      //...styles.border1,
      backgroundColor: Cor.sec,
      borderRadius: 10,
      marginVertical: 5,
    },
      txt_inputComp:{
        ...styles.inputText,
        borderWidth: 0,
        width: "80%",
        height: '100%',
        marginLeft: 10,
      },
      btt_inputComp:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%',
        height: '100%',
      },
}); 
export default stylesLC;
