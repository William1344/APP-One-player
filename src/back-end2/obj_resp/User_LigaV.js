const User_ScoresV = require("./User_ScoresV");
module.exports = class User_LigaV{
    constructor(users, lhu){
        this.idUsers     = users.id                     // id do usuário
        this.isUser_Liga = users.isUser_Anonimo         // se é um usuário anonimo da liga
        this.nome        = users.nome                   // nome do jogador 
        this.apelido     = lhu.apelido                  // apelido do jogador
        this.isAdmin     = lhu.isAdmin                  // se é admin da liga
        this.image       = users.image                  // image do usuário
        this.numero      = users.num_camisa             // numero da camisa do jogador
        this.posicao     = users.posicao                // posição do jogador
        this.altura      = users.altura                 // altura do jogador
        this.envergadura = users.envergadura            // envergadura do jogador
        this.peso        = users.peso                   // peso do jogador
        this.scr3x3      = new User_ScoresV("tipo_3");  // objeto dos scores3x3
        this.scr5x5      = new User_ScoresV("tipo_5");  // objeto dos scores5x5
        this.scrT        = new User_ScoresV("tipo_T");  // objeto com total de scores  
    }
}; 