import React, {useState, useEffect} from 'react';
import { Text, View, TouchableOpacity, FlatList, Alert, TextInput, Image, StatusBar, 
    KeyboardAvoidingView, BackHandler
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import stylesNJ from './styleNJ3';
import { useNavigation } from '@react-navigation/native';
import { Cor, icons } from '../../styles/index_S';
import banco from '../../../back-end2/banco_local';
import assets from "../../../../assets/index_assets";
import { RetornaImg } from '../../functions/index';

    var timeA       = new Array();
    var timeB       = new Array();
    var list_subs   = new Array();
    var jogadores, timesL3, timesL5;

export default function Novo_Jg({route}){
    // variaveis de controle States
    
    function backAction(){
        navigation.replace("MainL",{
            liga    : route.params.liga,
            dest    : route.params.dest
        });
        return true;
    }

    const navigation                = useNavigation();
    const [state    , setState]     = useState(false);
    const [modo3x3  , setModo3x3]   = useState(false);
    const [modo5x5  , setModo5x5]   = useState(false);
    const [timesOK  , setTimesOK]   = useState(false);
    const [textIA   , setTextIA]    = useState("Time A");
    const [textIB   , setTextIB]    = useState("Time B");
    const [t_times  , setTimes]     = useState("Jogadores");
    const [cor3     , setCor3]      = useState(Cor.btt_sel);
    const [cor5     , setCor5]      = useState(Cor.btt);
    const [subs     , setSubs]      = useState(false);
    const [jgdr_time, setJT]        = useState(false);
    
    useEffect(() => { 
        jogadores   = route.params.liga.list_usersG.slice();
        timesL3     = route.params.liga.list_times3.slice();
        timesL5     = route.params.liga.list_times5.slice();
        setModo(true);
        //_zeraTimes();//
        setTimeout(()=>{
            setState(!state);
        }, 150);
        BackHandler.addEventListener("hardwareBackPress", backAction);
        return () => BackHandler.removeEventListener("hardwareBackPress", backAction);
    }, []);

// funções de controle::
    // zera os times
    function _zeraTimes(){
        timeA       = new Array();
        timeB       = new Array();
        list_subs   = new Array();
        timesL3     = route.params.liga.list_times3.slice();
        timesL5     = route.params.liga.list_times5.slice();
        jogadores   = route.params.liga.list_usersG.slice();
        
        setTimesOK(false);
        setSubs(false);
        setModo3x3(false);
        setModo5x5(false);       
    }
    function preencheJgdrs(){
        if(list_subs.length > 0){
            for(let jgd of list_subs){
                jogadores.push(jgd);
            }
            list_subs.splice(0, list_subs.length);
        }
    }
    // seta o modo de jogo
    function setModo(modo){
        _zeraTimes();
        if(modo){
            if(modo3x3) {
                setCor3(Cor.btt);
                setModo3x3(false);
                console.log("3x3 -> false");
            } else {
                setCor3(Cor.btt_sel);
                setCor5(Cor.btt);
                setModo3x3(true);
                setModo5x5(false);
                console.log("3x3 -> true ");
            }
        }
        else{
            if(modo5x5){
                setCor5(Cor.btt);
                setModo5x5(false);
            } else{
                //preenche_5x5();
                setTimesOK(false);
                setCor5(Cor.btt_sel);
                setCor3(Cor.btt);
                setModo5x5(true);
                setModo3x3(false);
                console.log("true 5x5");
            }
        }   
        setaComp();
    } 
    
    function verifyEstado(){
        if(timesOK){
            if(modo3x3)
                if(timeA.length != 3 || timeB.length != 3){
                    setTimesOK(false);
                    preencheJgdrs();
                    setaComp();
                }
            else
                if(timeA.length != 5 || timeB.length != 5){
                    setTimesOK(false);
                    preencheJgdrs();
                    setaComp();
                }   
        }
        
    }

    function ret_Jgdr(jgd){
        for(let jg of jogadores){
            if(jgd.Users_idUsers == jg.Users_idUsers){
                //console.log("jogador encontrado", jg, "->\n", jgd);
                return jogadores.indexOf(jg);
            }
        }
    }
    // adiciona e remove jogadores ao time, sempre cuidando modo de jogo
    // caso mude os times são zerados.
    function addTime(item){
        if(modo3x3){
            if(timeA.length < 3){
                //console.log("Jogador 0 W", jogadores[0])
                timeA.push(item);
                //console.log("Jogador veio", item);
                let pos = ret_Jgdr(item);
                //console.log("Posição", pos)
                //console.log("Encontrado", jogadores[pos]);
                jogadores.splice(pos, 1);
                setState(!state);
            } else if(timeB.length < 3){
                timeB.push(item);
                let pos = ret_Jgdr(item);
                jogadores.splice(pos, 1);
                setState(!state);
            }
            if((timeA.length == 3) && (timeB.length == 3) && !timesOK) {
                setListSubs();
                setJT(false)
                setTimesOK(true); 
                setTimes("Substitutos");
                console.log("TimesOK -> true")
            } 
            else if((timeA.length < 3 || timeB.length < 3) && timesOK) setTimesOK(false);
            else if(timesOK && (timeA.length == 3) && (timeB.length == 3)){
                list_subs.push(item);
                let pos = ret_Jgdr(item);
                jogadores.splice(pos, 1);
                setState(!state);
            }

        } else if(modo5x5){
            if(timeA.length < 5){
                timeA.push(item);
                let pos = ret_Jgdr(item);
                jogadores.splice(pos, 1);
                setState(!state);
            } else if(timeB.length < 5){
                timeB.push(item);
                let pos = ret_Jgdr(item);
                jogadores.splice(pos, 1);
                setState(!state);
            }
            if((timeA.length == 5) && (timeB.length == 5) && !timesOK){
                setListSubs();
                setJT(false)
                setTimesOK(true);
                setTimes("Substitutos");
                console.log("TimesOK -> true")
            } 
            else if((timeA.length < 5 || timeB.length < 5) && timesOK) setTimesOK(false);        
        }
    }
    // selecionando os times, só preenche se um dos times estiver vazio
    // se o time B estiver vazio, precisa verificar se 
    function _preencheTime(time){
        function removeTime(){
            if(modo3x3) {
                let p = timesL3.indexOf(time)
                timesL3.splice(p,1);
            } else if(modo5x5){
                let p = timesL5.indexOf(time)
                timesL5.splice(p,1);
            }
            setState(!state);
        }
        if(timeA.length == 0){ 
            for(let jgd of time) addTime(jgd);
            removeTime();
        } else if(timeB.length == 0 && ((modo3x3 && timeA.length == 3) ||(modo5x5 && timeA.length == 5))){
            for(let jgd of time){
                for(let jgdA of timeA){
                    if(jgd.Users_idUsers == jgdA.Users_idUsers) break;
                    else if(timeA.indexOf(jgdA) == timeA.length -1) addTime(jgd);
                }
            }
            removeTime();
        }
        

    }
    // preenche lista de subs após completar os times
    function setListSubs(){
        if(route.params.liga.confLiga.selSubs){
            for (let jgd of jogadores) list_subs.push(jgd);
            jogadores = new Array();
        }
    }
    // seta as variaveis para selecionar o componente certo (jgdrs || times || subs)
    function setaComp(){
        if(!jgdr_time)                  setTimes("Jogadores");
        else if(jgdr_time && !timesOK)  setTimes("Times");
        else if(jgdr_time && timesOK )  setTimes("Substitutos");
        setJT(!jgdr_time)
    }
    // remove time A
    function remTimeA(item){
        jogadores.push(item);
        let pos = timeA.indexOf(item);
        timeA.splice(pos, 1);
        setState(!state);
        verifyEstado();
    }
    // remove time B
    function remTimeB(item){
        jogadores.push(item);
        let pos = timeB.indexOf(item);
        timeB.splice(pos, 1);
        setState(!state);
        verifyEstado();
    }
    // remove subs
    function remSubs(item){
        jogadores.push(item);
        let pos = list_subs.indexOf(item);
        list_subs.splice(pos, 1);
        setState(!state);
    }

    // starta para a proxima tela, se modo de jogo 3x3 || 5x5 = true 
    // && timeA e timeB com 3 ou 5 jogadores conforme o modo de jogo
    function start_Game(){
        if(timesOK){
            console.log("timesOK -> true");
            // monta timeA com 3 ou 5 jogadores conforme o (timeN.length)
            if(modo3x3){
                let dt = new Date();
                let rotulo_jogo = "Modo 3x3 | Jogo: " + (route.params.liga.listJgs3x3.length + 1) + " | Data: " +
                ("" + dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear());  
               
                navigation.replace("Load3x3",{
                    nomeA   : textIA,
                    nomeB   : textIB,
                    tmA     : timeA.slice(),
                    tmB     : timeB.slice(),
                    tmS     : list_subs.slice(),
                    rotulo  : rotulo_jogo,
                    liga    : route.params.liga,
                    dest    : route.params.dest,               
                });
            } else if(modo5x5){
                let dt = new Date();
                let rotulo_jogo = "Modo 5x5 | Jogo: " + (route.params.liga.listJgs3x3.length + 1) + " | Data: " +
                ("" + dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear());
            
                navigation.replace("Load5x5",{
                    nomeA   : textIA,
                    nomeB   : textIB,
                    tmA     : timeA.slice(),
                    tmB     : timeB.slice(),
                    tmS     : list_subs.slice(),
                    rotulo  : rotulo_jogo,
                    liga    : route.params.liga,
                    dest    : route.params.dest,
                });
            }
            

        
        } else{
            Alert.alert("Complete os times conforme o modo de jogo para iniciar um jogo")
        }

        
    }

// funções renderizadoras
    // renderiza os FL para montar os times!
    function renderTJS(){
        if(jgdr_time)                   return rend_jogadores();
        else if(!jgdr_time && !timesOK) return rend_times();
        else if(!jgdr_time && timesOK) return rend_subs();
        
    }
    // Mostra o estado da tela montando, pronto
    function render_Modo(){
        if(timesOK){
            return(
                <TouchableOpacity style = {stylesNJ.bttEnd}
                    onPress = {() => {start_Game()}}
                >
                    <Text style = {stylesNJ.bttText}> Jogar </Text>
                </TouchableOpacity>
            );
        } else {
            return(
                <Text style = {stylesNJ.textModo}> - Modo - </Text>
            );
        }
    }
    //FL jogadores 
    function rend_jogadores(){
        return(
            <FlatList style = {stylesNJ.flatLJgdrs}
                data = {jogadores}
                renderItem = {compJogadores}
                keyExtractor = {(item) => {item.id}}
                //extraData={select_ID}
            />
        );
    } 
    // FL times
    function rend_times(){
        if(modo3x3){
          if(route.params.liga.list_times3.length > 0)
            return(             
                <FlatList style = {stylesNJ.flatLJgdrs}
                    data = {timesL3}
                    renderItem = {compTimes}
                    keyExtractor = {(item) => {item.id}}
                    //extraData={select_ID}
                />
            );
          else
          //console.log(timesL3)
            return(                
                <Text style = {{...stylesNJ.textModo, width: '90%'}}> 
                    Times Vazio
                </Text>
            );
        } else if(modo5x5){
          if(route.params.liga.list_times5.length > 0)
            return(
                <FlatList style = {stylesNJ.flatLJgdrs}
                    data = {timesL5}
                    renderItem = {compTimes}
                    keyExtractor = {(item) => {item.id}}
                    //extraData={select_ID}
                />
            );
          else 
            return(    
                <Text style = {{...stylesNJ.textModo, width: '90%'}}> Realize pelomenos 1 jogo 5x5 para ver times </Text>
            );
          
        }  else {
            return (
                <Text style = {{...stylesNJ.textModo, height: '60%', width: '60%'}}> 
                    Times vazio 
                </Text>
            );
        }
        
    }
    // FL subs
    function rend_subs(){
        return (
             
            <FlatList style = {stylesNJ.flatLJgdrs}
                data = {list_subs}
                renderItem = {compSubs}
                keyExtractor = {(item) => {item.id}}
            />
            
        )
    }
//componentes JSX.element
    // componentes do FlatList 
        // times
    function compTimes({item}) {
        return(
            <TouchableOpacity style = {{...stylesNJ.viewCompTime, marginBottom: 3, height: 'auto'}}
                onPress = {()=>{ _preencheTime(item)}}
            >
                <Text style = {stylesNJ.textTime}> Time </Text>
                <Text style = {stylesNJ.textTime}> {item[0].apelido} | {item[1].apelido} | {item[2].apelido}</Text>
                {modo5x5 &&
                    <Text style = {stylesNJ.textTime}> {item[3].apelido} | {item[4].apelido}</Text>
                }
            </TouchableOpacity>
        );
    }
        // jogadores
    function compJogadores({item}) {
        return(
            <TouchableOpacity style = {stylesNJ.viewBttFL}
                onPress = {() => {addTime(item)}}
            >
                <Text style = {stylesNJ.textName}>{item.apelido}</Text>
            </TouchableOpacity>
            );        
    };
        // time A
    function compTimeA({item}) {
        return(
            <TouchableOpacity style = {stylesNJ.viewBttFL}
                onPress = {() => {remTimeA(item)}}
            >
                <Text style = {stylesNJ.textName}> {item.apelido} </Text>
            </TouchableOpacity>
            )        
    };
        // time B
    function compTimeB({item}) {
        return(
            <TouchableOpacity style = {stylesNJ.viewBttFL}
                onPress = {() => {remTimeB(item)}}
            >
                <Text style = {stylesNJ.textName}>{item.apelido}</Text>
            </TouchableOpacity>
            )        
    };
        // substitutos
    function compSubs({item}) {
        return(
            <TouchableOpacity style = {stylesNJ.viewBttFL}
                onPress = {() => {remSubs(item)}}
            >
                <Text style = {stylesNJ.textName}>{item.apelido}</Text>
            </TouchableOpacity>
            )        
    };
    
//funções de teste    
    //teste -> função para preencher times com 5 jogadores e list subs.
    function preenche_5x5(){
        for(let x = 0 ; x < jogadores.length ; x++){
            if(timeA.length < 5)
                timeA.push(jogadores[x]);
            else if (timeB.length < 5)
                timeB.push(jogadores[x]);
            else
                list_subs.push(jogadores[x]);
        }
        jogadores.splice(0, jogadores.length);
    }

    return(
        <View style = {stylesNJ.telaFull}>
            <StatusBar
                hidden = {true}
                barStyle= 'light-content'
            />
            <View style = {stylesNJ.viewTopo}>
                <Image style = {stylesNJ.imgPf}
                    source = {RetornaImg(banco.userMaster.image)}
                    resizeMode="cover"
                />
                <TouchableOpacity style = {stylesNJ.bbtConf}>
                    <Icon
                        name = {icons.confgs}
                        size = {35}
                        color = {Cor.icons_cor}
                    />
                </TouchableOpacity>
                <View style = {stylesNJ.viewInfos}>
                    <Text style = {stylesNJ.textInfos}>
                        {banco.userMaster.nome} | FG: {banco.userMaster.scrT.a_FG.toFixed(2)} 
                    </Text>
                    <Text style = {stylesNJ.textInfos}>
                        Jgs: {banco.userMaster.scrT.jogos} || Pts: {banco.userMaster.scrT.total_pts}
                    </Text>
                </View>
                
            </View>
            <View style = {stylesNJ.viewMT}>
                <View style = {stylesNJ.viewModo}>
                    <TouchableOpacity style = {{
                        ...stylesNJ.bttModo,
                        backgroundColor: cor3
                    }}
                        onPress = {() => setModo(true)}
                    >
                        <Text style = {stylesNJ.bttText}> 3x3 </Text>
                    </TouchableOpacity>
                    
                    {render_Modo()}
                    
                    <TouchableOpacity style = {{
                        ...stylesNJ.bttModo,
                        backgroundColor: cor5
                    }}
                        onPress = {() => setModo(false)}
                    >
                        <Text style = {stylesNJ.bttText}> 5x5 </Text>
                    </TouchableOpacity>
                </View>

                <View style = {stylesNJ.viewTimes}>
                    <View style = {stylesNJ.viewTA} > 
                        <TextInput style = {stylesNJ.textVT}
                                value={textIA}
                                onChangeText={()=>{setTextIA()}}
                        />
                        <FlatList style = {stylesNJ.flatLT}
                            data = {timeA}
                            renderItem = {compTimeA}
                            keyExtractor = {(item) => {item.id}}
                        />
                    </View>
                    <View style = {stylesNJ.viewTB} > 
                        <TextInput style = {stylesNJ.textVT}
                            value={textIB}
                            onChangeText={()=>{setTextIB()}}
                        />
                        <FlatList style = {stylesNJ.flatLT}
                            data = {timeB}
                            renderItem = {compTimeB}
                            keyExtractor = {(item) => {item.id}}
                        />
                    </View>
                </View>
            </View>
                
            <View style = {stylesNJ.viewJgdrs}>
                <TouchableOpacity style = {{...stylesNJ.btt_jgdr, marginTop: 5}}
                    onPress = {() => {
                        setaComp(); 
                    }}
                >
                    <Text style = {{...stylesNJ.bttText, fontSize: 22}}>{t_times}</Text>
                </TouchableOpacity>
                <View style = {stylesNJ.viewFlats}>
                    {renderTJS()}
                </View>
            </View>
        </View>
    );

}
