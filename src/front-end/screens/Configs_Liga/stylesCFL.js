import { StyleSheet } from "react-native";
import {Cor, fonts, styles} from '../../styles/index_S';

const stylesCFL = StyleSheet.create({
  telaFull:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: Cor.pri
  },
  // componente do jogador!
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
  text_title:{
    alignItems: 'center',
    height: '8%',
    fontFamily: fonts.titlesN,
    fontSize: 24,
    textAlign: 'center',
    marginTop: 7,
    color: Cor.font,   
  },
  scrooll:{
    flex: 1,
    width: '99%',
    //...styles.border1,
  }, 
    viewScrool:{
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    viewLinha:{
      flexDirection: "row",
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '98%',
      height: 50,
      backgroundColor : Cor.ter,
      marginVertical: 2,
      //...styles.border1,
    },
    text:{
      ...styles.texts,
      fontSize: 22,
      textAlign: 'justify',
      width: '50%',
      //...styles.border1,
    },
    textMeno:{
      ...styles.texts,
      fontSize: 20,
      width: '20%',
      //...styles.border1,
    },
    checkBox:{
      flex: 1,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'flex-end',
    },
  bttSave:{
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: '60%',
    marginVertical: 5,
    ...styles.btts,
  },
  btt_text:{
    ...styles.text_btts,
    fontSize: 22,
  }
    



});export default stylesCFL;

