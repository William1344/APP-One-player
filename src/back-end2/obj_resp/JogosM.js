module.exports = class JogoM{
    constructor(i, tp, nmA, nmB, tmA, tmB, tmS, pA, pB, rotulo, dd){
        this.idJogos     = i            // primare key
        this.dataCreate  = dd           // data do jogo
        this.nome        = rotulo       // toString do jogo
        this.tipo        = tp           // tipo do jogo 3x3 || 5x5
        this.plcA        = pA           // placar do time A
        this.plcB        = pB           // placar do time B
        this.nomeTA      = nmA          // time A
        this.nomeTB      = nmB          // time B
        this.timeA       = tmA;         // array time A com objetos User_Game
        this.timeB       = tmB;         // array time B com objetos User_Game
        this.timeS       = tmS;         // guarda os jgadores reserva
    }
};
