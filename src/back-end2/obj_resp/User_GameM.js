module.exports = class User_GameM{
    constructor(usG){
        this.Users_idUsers      =   usG.Users_idUsers   // id do user principal       
        this.apelido            =   usG.apelido         // nome do jogador
        this.numero             =   usG.num_camisa      // numero utilizado !se utilizado 
        this.a_2pts             =   usG.a_2pts          // cesta de 2 pts no jogo
        this.a_3pts             =   usG.a_3pts          // cesta de 3 pts no jogo
        this.reb                =   usG.reb             // rebotes no jogo (se utilizado)
        this.asst               =   usG.asst            // assistencias no jogo (se utilizado)
        this.blk                =   usG.blk             // tocos no jogo   (se utilizado)
        this.roub               =   usG.roubo           // roubo de bolas no jogo   (se utilizados)
        this.airB               =   usG.airB            // air ball no jogo (se utilizado)
        this.bool_dec           =   usG.bool_dec        // venceu -> true || perdeu -> false
        this.bool_cluth         =   usG.bool_cluth      // se decidiu o jogo.
        this.bool_jogou         =   true                // se jogou! na hora de salvar no banco, só salva se jogou == true    }
    }
}; 