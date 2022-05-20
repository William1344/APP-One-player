import {StyleSheet} from 'react-native'; 
import { Cor, styles, fonts } from '../../styles/index_S';


const styleSI = StyleSheet.create({
  telaFull: {
    ...styles.telaFull,
    backgroundColor: Cor.pri,
  },
  tela: {
    height: '76%',
    width: '100%',
  },
  title:{
    height: '10%',
    ...styles.subTitles_tela,
    fontSize: 30,
  },
  scrool: {
    width: '100%',
  },
    linha: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%',
      marginVertical: 5,
    },
    btt_img:{
      width: 120,
      height: 120,
      marginLeft: 10,
    },
      img_logo:{
        height: '100%',
        width: '100%',
        ...styles.border2,
        borderRadius: 90,
      },
}); export default styleSI;