import { StyleSheet } from "react-native";
import {Cor, styles, fonts} from '../../styles/index_S';

const styles5x5 = StyleSheet.create({
    telaFull: {
        ...styles.tela,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    viewTop:{
        height: "23%",
        width: '100%',
        flexDirection: 'row',
        ...styles.border2,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 3
    },
    viewCro:{
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%",
        width: '30%',
    },
            textCro:{
                height: '34%',
                width: '100%',
                fontSize: 20,
                color: Cor.font,
                fontWeight: "bold",
                textAlign: "center", 
            },
            view_Setings:{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '100%',
                height: '65%',
                
            },
            btt_modo:{
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
        height: "74%",
        width: '100%',
        ...styles.border2,
    },
        viewSelect_Time:{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            height: '17%',
            width: '100%',
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
            height: '82%',
            width: '100%',

        },
            viewCab: {
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: '20%',
                width: '100%',
               
            },
            viewJog: {
                justifyContent: 'flex-start',
                alignItems: 'center',
                height: '80%',
                width: '100%',
                
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
                    height: 35,
                },
                    bttNome:{
                        height: '100%',
                        width: '40%',
                        fontSize: 18,
                        color: Cor.font,
                        fontWeight: "bold",
                        textAlign: "center",
                        textAlignVertical: 'center', 
                        borderWidth: 1,
                        borderColor: Cor.bord   
                    },
                    textNome:{
                        flex: 1,
                        fontSize: 18,
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
                        fontSize: 18,
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
            ...styles.texts,
            alignItems: 'center',
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
                color: Cor.font,
            },
});
export default styles5x5