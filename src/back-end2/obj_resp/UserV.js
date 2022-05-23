const User_ScoresV = require("./User_ScoresV");
module.exports = class UserV{
    constructor(user){
        this.id             = user.id;
        this.PlanoId        = user.PlanoId;
        this.image          = user.image;
        this.nome           = user.nome;
        this.email          = user.email;
        this.password       = user.password;
        this.telefone       = user.telefone;
        this.altura         = user.altura;
        this.peso           = user.peso;
        this.envergadura    = user.envergadura;
        this.posicao        = user.posicao;
        this.numero         = user.num_camisa;
        this.createdAt      = new Date(user.createdAt);
        this.updatedAt      = new Date(user.updatedAt);
        this.pedidos_user   = new Array();
        this.scr3x3         = new User_ScoresV("tipo_3");
        this.scr5x5         = new User_ScoresV("tipo_5");
        this.scrT           = new User_ScoresV("tipo_T");
    }
};