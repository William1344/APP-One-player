module.exports = class User_GameV{
    constructor(userG, apelido){
        this.Users_idUsers      =   userG.id     // id do user principal
        this.apelido            =   apelido                 // nome do jogador
        this.numero             =   userG.numero        // numero utilizado !se utilizado 
        this.a_2pts             =   0                       // cesta de 2 pts no jogo
        this.a_3pts             =   0                       // cesta de 3 pts no jogo
        this.reb                =   0                       // rebotes no jogo (se utilizado)
        this.asst               =   0                       // assistencias no jogo (se utilizado)
        this.blk                =   0                       // tocos no jogo   (se utilizado)
        this.roubo              =   0                       // roubo de bolas no jogo   (se utilizados)
        this.airB               =   0                       // air ball no jogo (se utilizado)
        this.bool_dec           =   false                   // venceu -> true || perdeu -> false
        this.bool_cluth         =   false                   // se decidiu o jogo.
        this.bool_jogou         =   false                   // se jogou! na hora de salvar no banco, só salva se jogou == true
    }
};