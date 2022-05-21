import assets from '../../../assets/index_assets';

export default function RetornaImg(value){
       if(value == 0)  return assets.liga_lg;
  else if(value == 1)  return assets.liga_lg1;
  else if(value == 2)  return assets.liga_lg2;
  else if(value == 3)  return assets.liga_lg3; 
  else if(value == 4)  return assets.liga_lg4;
  else if(value == 5)  return assets.liga_lg5;
  else if(value == 6)  return assets.liga_lg6;
  else if(value == 7)  return assets.liga_lg7;
  else if(value == 8)  return assets.liga_lg8;
  else if(value == 9)  return assets.liga_lg9;
  else if(value == 10) return assets.liga_lg10;
  else if(value == 11) return assets.liga_lg11;
  else                 return assets.liga_lg12;

}