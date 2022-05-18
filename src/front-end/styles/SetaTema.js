import Cor from './colors';
import banco from '../../back-end2/banco_local';
import SalveDado from '../../back-end2/SalveData';

function SetaTema(){
  if(banco.tema){
    banco.tema = false;
    Cor.pri = Colors.White;
    Cor.sec = Colors.Black;
    Cor.ter = Colors.Aquamarine;
    Cor.qua = Colors.White;
    Cor.bord = Colors.CinzaDark;
    Cor.font = Colors.Black;
    Cor.icons_cor = Colors.Black;
  } else {
    Cor.pri = Colors.Black;
    Cor.sec = Colors.White;
    Cor.ter = Colors.CinzaDark;
    Cor.qua = Colors.Black;
    Cor.bord = Colors.Aquamarine;
    Cor.font = Colors.White;
    Cor.icons_cor = Colors.White;
  }
  SalveDado(banco);
  return true;
} 
export default SetaTema;

const Colors = {
  Aquamarine      :       "#7FFFD4",
  Black           :       "#000",
  Cinza           :       "#363636",
  CinzaDark       :       "#2F4F4F",
  DarkBlue        :       "#00008B",
  DarkCyan        :       "#008B8B",
  DarkGreen       :       "#006400",
  DeepPink        :       "#FF1493",
  DarkRed         :       "#8B0000",
  MidnightBlue    :       "#191970",
  Red             :       "#FF0000",
  RoyalBlue       :	      "#4169E1",
  Thistle         :       "#D8BFD8",
  White           :       "#FFF",
  Yellow          :       "#FFFF00",
};