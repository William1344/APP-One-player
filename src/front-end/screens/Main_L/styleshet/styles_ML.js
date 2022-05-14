import {StyleSheet} from "react-native";
import { Cor, styles, fonts} from "../../../styles/index_S";
const Styles_ML = StyleSheet.create({
    telaFull: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: Cor.pri,
        alignItems: 'center',
    },
        viewS: {
            justifyContent: 'center',
            alignItems: "center",
            flexDirection: 'row',
            width: '98%',
            height: '25%',
            
        },
            img_logo:{
                height: 140,
                width: 140,
                marginLeft: 20,
                ...styles.borderImg,
            },
            view1_infos:{
                justifyContent: 'center',
                alignSelf: 'center',
                height: '80%',
                width: '60%',
                marginLeft: 10,
            },
            text: {
                ...styles.texts,
                textAlign: 'justify',
                fontSize: 16
            },
        view_infer:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            width: '98%',
            height: "75%",
        },
        
            viewBtt: {
                justifyContent: 'space-around',
                alignItems: "center",
                width: '32%',
                height: "100%",
                borderBottomLeftRadius: 30,
                //...styles.border1
            },
                btt_opacit: {
                    width: '85%',
                    marginHorizontal: 10,
                    marginVertical: 5,
                    alignItems: "center",
                    backgroundColor: Cor.btt,
                    padding: 7,
                    ...styles.borderRad
                },
                btt_text:{
                    textAlign: "center",
                    ...styles.texts, 
                    fontSize: 14,
                },
                btt_reload:{
                    height: 80, 
                    width: 80, 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    position : "absolute", 
                    top : 80, 
                    right: 2,
                },
                btt_pedidos:{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '20%',
                    width: '75%'
                },
            view_Comps:{
                justifyContent: 'flex-start',
                alignItems: 'center',
                height  : '100%',
                width   : '66%', 
                
            },  
                linha:{
                    width:'100%',
                    height: '1%',
                    borderTopWidth: 1,
                    borderColor: Cor.bord
                },
                // Componente Destaques
                comp_destaques:{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '95%',
                    height: '81%',
                    ...styles.borderRad,
                    
                },
                    view1CompDest:{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '95%',
                        height: '45%',
                    },
                        imgCompDest:{
                            width: '35%',
                            height: '100%',
                            ...styles.borderImg,
                            marginRight: 10,
                        },
                        viewInfosCompDest:{
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            width: '60%',
                            height: '100%',
                        },
                            textsInfos:{
                                ...styles.texts,
                                fontSize: 16,
                                textAlign: 'justify',
                            },
                    view2CompDest:{
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        width: '95%',
                    },
                view_jgdrs:{
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    height: '50%',
                    width: '100%',
                },
                flat_List:{
                    flex: 1,
                    width: '96%',
                }
}); export default Styles_ML;
