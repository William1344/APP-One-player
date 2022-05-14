module.exports = class JogoV{
    constructor(jg){
        this.idJogos     = jg.id        // primare key
        this.nome        = jg.rotulo       // toString do jogo
        this.tipo        = jg.tipo_Jogo // tipo do jogo 3x3 || 5x5
        this.plcA        = jg.plcA      // placar do time A
        this.plcB        = jg.plcB      // placar do time B
        this.nomeTA      = jg.nomeTA    // time A
        this.nomeTB      = jg.nomeTB    // time B
        this.createdAt   = jg.createdAt // data de criação
        this.timeA       = new Array(); // array time A com objetos User_Game
        this.timeB       = new Array(); // array time B com objetos User_Game
        this.timeS       = new Array(); // guarda os jgadores reserva
    }
};