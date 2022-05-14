import { StyleSheet } from "react-native";
import { Cor, styles, fonts } from "../../styles/index_S";

const stylesForm = StyleSheet.create({
  telaFull: {
    ...styles.tela,
    justifyContent  :   'flex-start',
    alignItems      :   'center',
  },
    btt_img:{
      marginVertical: 20,
      height: 170,
      width: 170,
    },
    img:{
      height: '100%',
      width: '100%',
      ...styles.border1,
      borderRadius: 90,
    },
    viewForm:{
      justifyContent: 'center',
      alignItems: 'center',
      height: '65%',
      width: '99%',
    },
    viewPicker:{
      height: '100%',
      width: '40%',
    },
      picker:{
        width: '100%',
        color: Cor.pri,
        backgroundColor: Cor.sec,
      },
    keyBoard:{
      marginTop: 5,
      height: '60%',
      width: '100%',
      justifyContent  : 'flex-start',
      alignItems      : 'center',
    },
      viewLinha: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginTop: 10,
          width: '100%',
          height: '10%',
      },
      title:{
        marginTop : 10,
        ...styles.texts,
        color: Cor.font,
        fontSize: 25,
      },
      texts:{
        width: '45%',
        ...styles.texts,
        fontSize: 22,
        textAlign: 'justify',
      },
      txt_input:{
          ...styles.inputText,
          textAlign: 'center',
          height: "100%",
          width: "40%",  
      },
      btts:{
        ...styles.btts,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '45%',
        marginTop: 10,
      },
      btts_text:{ 
        ...styles.text_btts,
        fontSize: 20,
      }

      
});
export default stylesForm;