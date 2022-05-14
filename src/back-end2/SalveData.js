import AsyncStorage from '@react-native-async-storage/async-storage';


async function _salveData(banco){
  try{
      const jsonBD = JSON.stringify(banco);
      await AsyncStorage.setItem("Banco", jsonBD);
  } catch(e){
      console.log("Erro ao salvar dados");
  }
}; export default _salveData;