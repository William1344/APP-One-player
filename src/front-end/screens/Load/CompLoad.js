import {View, ImageBackground, ActivityIndicator} from 'react-native';
import assets from '../../../../assets/index_assets';

export default function CompLoad(){
  return (
    <View style = {{flex: 1, alignItems: 'center'}}>
      <ImageBackground
        style ={{
          justifyContent: "center",
          alignItems: 'center',
          width: '100%',
          height: '100%'}}  
        source={assets.load1}
        resizeMode="cover">
          <ActivityIndicator
            size = "large"
            color = "#FFF"
          />
      </ImageBackground>
            
    </View>
  );
}