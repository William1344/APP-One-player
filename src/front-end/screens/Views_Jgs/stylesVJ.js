import { StyleSheet }           from "react-native";
import { styles, Cor, fonts}    from "../../styles/index_S";

const stylesVJ = StyleSheet.create({
    telaFull: {
        ...styles.tela,
        alignItems: 'center',
        justifyContent: 'center'
    },

    viewInf:{
        height: '76%',
        width: '99%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        
    },
    view_sel:{
        flexDirection : 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height : '10%',
        width :  '100%',
        marginTop: 10
    },
    btt_selJogo:{
        justifyContent: 'center',
        alignItems: 'center',
        height: '80%',
        width: '45%',
        ...styles.border1,
        borderRadius: 30,
        
    },
    // texte title
    titleM:{
        ...styles.text_btts,
        textAlign: 'center',
        fontSize: 22,
    }, 
// View Inferior
viewInferioir: {
    width: '100%',
    height: "88%",
    justifyContent: 'center',
    alignItems: "center",
    

},
    flatList: { //Flat List
        flex: 1,
        width: '100%', 

        
    },
        // view componente flat list
        viewFL:{
            //backgroundColor: '#faf',
            height: 160,
            width: '93%',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginVertical: 4, 
            ...styles.border1,
            borderRadius: 20
        },
            viewInfo:{
                justifyContent: 'center',
                alignItems: 'center',
                width: '90%',
                height: '40%',

            },
                textIn:{
                    ...styles.texts,
                    textAlign: "center",
                    fontSize: 16,
                },
            viewTimes:{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '100%',
                height: '50%', 
            },
                viewTimeX:{
                    justifyContent: 'center',
                },
                textComp:{
                    width: '100%',
                    ...styles.texts,
                    textAlign: 'justify',
                    fontSize: 18,
                },

    // View jogos 3x3 e 5x5
    viewTop:{
        height: "24%",
        width: '100%',
        borderWidth: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderColor: Cor.bord,
        marginTop: 2
    },
        
            textPla:{
                width: '100%',
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
                    ...styles.texts,
                    fontSize: 24,
                    textAlignVertical: 'center',
                    ...styles.border1,   
                },
                textVP_: {
                    height: "100%",
                    width: '10%',
                    ...styles.texts,
                    textAlignVertical: 'center',
                    fontSize: 22,
                    borderWidth: 1,
                    borderColor: Cor.bord,  
                },

    viewTime:{
        height: "60%",
        width: '100%',
        borderWidth: 1,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderColor: Cor.bord,
    },
    viewTime5:{
        height: "74%",
        width: '100%',
        ...styles.border1,
    },
        viewSelect_Time:{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            height: '17.5%',
            width: '100%',
        },
            btt_SelTime:{
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '50%',
                ...styles.border1,
            },
            textBtt:{
                width: '100%',
                ...styles.text_btts,
                textAlign: 'center',
                fontSize: 26,      
            },
        viewTabJog: {
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: '82.5%',
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
                    height: 34,
                },
                    bttNome:{
                        height: '100%',
                        width: '40%',
                        fontSize: 18,
                        color: Cor.font,
                        fontWeight: "bold",
                        textAlign: "center",
                        textAlignVertical: 'center', 
                        ...styles.border1, 
                    },
                    textNome:{
                        flex: 1,
                        fontSize: 18,
                        color: Cor.font,
                        fontWeight: "bold",
                        textAlign: "center",
                        textAlignVertical: 'center',    
                    },
                    bttScorC:{
                        height: '100%',
                        width: '10%',
                        fontSize: 18,
                        color: Cor.font,
                        fontWeight: "bold",
                        textAlignVertical: 'center', 
                        textAlign: "center",
                        borderWidth: 1,
                        borderColor: Cor.bord ,  
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
                        borderColor: Cor.bord,
                        

                    },
                    textScor:{
                        flex: 1,
                        fontSize: 18,
                        color: Cor.font,
                        fontWeight: "bold",
                        textAlignVertical: 'center', 
                        textAlign: "center",
                            
                    },
    bttFim:{
        justifyContent: 'center',
        alignItems: 'center',
        height: '11%',
        width: '25%',
        borderWidth: 1,
        borderRadius: 30,
        borderColor: Cor.bord,
        backgroundColor: Cor.btt,
        marginTop: 5,
    },
    textBttFim:{
        flex: 1,
        fontSize: 20,
        color: Cor.font,
        fontWeight: "bold",
        textAlign: "center",
            
    },
});
export default stylesVJ;