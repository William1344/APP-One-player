import assets from '../../../assets/index_assets';

export default function RetornaImg(value){
  if(value == 0){
    return assets.liga_lg;
  } else if(value == 1){
    return assets.liga_lg1;
  } else {
    return assets.liga_lg2;
  }
}