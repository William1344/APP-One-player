import { StyleSheet } from "react-native";
import {Cor, styles, fonts} from '../../styles/index_S';

const styles3x3 = StyleSheet.create({
    telaFull: {
        ...styles.tela,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    viewTop:{
        height: "25%",
        width: '100%',
        flexDirection: 'row',
        ...styles.border2,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 2
    },
        viewCro:{
            justifyContent: 'center',
            alignItems: 'center',
            height: "100%",
            width: '30%',
        },
            viewNume:{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: "35%",
                width: '100%',
                ...styles.border1,
                borderWidth: 0,
                borderBottomWidth: 1, 
            },
            textCro:{
                ...styles.texts,
                fontSize: 22,
                width: '99%',
            },
            view_Setings:{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '100%',
                height: '65%',
                ...styles.border1
            },
            button_S:{
                alignItems: 'center',
                justifyContent: 'center',
                width: '30%',
                height: '90%',
            },
        viewPlacar:{
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: "100%",
            width: '70%',
            borderLeftWidth: 2,
            borderColor: Cor.bord
        },
            textPla:{
                width: '100%',
                height: '35%',
                ...styles.texts,
                fontSize: 22,
            },
            viewP:{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: "65%",
                width: "100%",
                borderTopWidth: 1,
                borderColor: Cor.bord
            },
                textVP_times: {
                    height: "100%",
                    width: '35%',
                    textAlignVertical: 'center',
                    ...styles.border1,    
                    ...styles.texts,
                    fontSize: 26,
                },
                textVP_: {
                    height: "100%",
                    width: '10%',
                    ...styles.texts,
                    ...styles.border1,
                    textAlignVertical: 'center',
                    fontSize: 24,
                },

    viewTime:{
        height: "60%",
        width: '100%',
        ...styles.border2,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
        viewSelect_Time:{
            flexDirection: 'row',
            height: '20%',
            width: '100%',
            justifyContent: 'space-around',
            alignItems: 'center',
        },
            btt_SelTime:{
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '50%',
                ...styles.border1
            },
            textBtt:{
                width: '100%',
                ...styles.texts,
                fontSize: 26,      
            },
        viewTabJog: {
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: '80%',
            width: '100%',

        },
            viewCab: {
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: '25%',
                width: '100%',
               
            },
            viewJog: {
                justifyContent: 'flex-start',
                alignItems: 'center',
                height: '75%',
                width: '100%',
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
            },
            viewT:{
                height: '100%',
                width: '100%',
                justifyContent: 'flex-start',
                alignItems: 'center',

            },
                viewComp: {
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    flex: 1,
                },
                    bttNome:{
                        height: '100%',
                        width: '40%',
                        fontSize: 20,
                        color: Cor.font,
                        fontWeight: "bold",
                        textAlign: "center",
                        textAlignVertical: 'center', 
                        borderWidth: 1,
                        borderColor: Cor.bord   
                    },
                    textNome:{
                        flex: 1,
                        fontSize: 20,
                        color: Cor.font,
                        fontWeight: "bold",
                        textAlign: "center",
                        textAlignVertical: 'center',    
                    },
                    bttScor:{
                        height: '100%',
                        width: '10%',
                        fontSize: 18,
                        color: Cor.font,
                        fontWeight: "bold",
                        textAlignVertical: 'center', 
                        textAlign: "center",
                        borderWidth: 1,
                        borderColor: Cor.bord    
                    },
                    textScor:{
                        flex: 1,
                        fontSize: 20,
                        color: Cor.font,
                        fontWeight: "bold",
                        textAlignVertical: 'center', 
                        textAlign: "center",
                            
                    },
    // style --> Modal -- 
    viewFullModal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    viewModal_subsT: {
        justifyContent  : 'flex-start',
        alignItems      : 'center',
        width           : '50%',
        height          : '85%',
        backgroundColor : Cor.pri,
        borderRadius    : 30,
        borderColor     : Cor.bord,
        borderWidth     : 3,
    },
        title_modal:{
            alignItems: 'center',
            ...styles.texts,
            fontSize: 24,
            marginTop: 7,
        },
        viewFlat:{
            flex: 1,
            width: '98%',
        },
            btt_FL:{
                justifyContent: 'center',
                width: '100%',
                alignItems: "center",
                padding: 4,
            },
            textFL:{
                justifyContent: 'center',
                ...styles.texts,
                fontSize: 20,
                
            },

    bttFim:{
        justifyContent: 'center',
        alignItems: 'center',
        height: '11%',
        width: '25%',
        ...styles.border1,
        borderRadius: 30,
        backgroundColor: Cor.btt,
        marginTop: 5,
    },
    textBttFim:{
        flex: 1,
        ...styles.text_btts,
        fontSize: 24,
    },
});
export default styles3x3
