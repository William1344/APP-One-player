module.exports = class PedidosV{
    constructor(pd, userP){
        this.id                 = pd.id;                // id do pedido
        this.Ligas_idLigas      = pd.Ligas_idLigas;     // id da liga
        this.Users_idUsers      = pd.Users_idUsers;     // id do user
        this.user_do_pedido     = userP;                // user (obj UserLiga) que realizou o pedido
        this.aceite             = pd.aceite;            // aceite do pedido true = aceite, false = não aceite
        this.solicitante_User   = pd.solicitante_User;  // solicitante do pedido true = user, false = liga
        this.apelido            = pd.apelido;           // apelido do pedido
        this.createdAt          = pd.createdAt;         // data de criação do pedido
        this.updatedAt          = pd.updatedAt;         // data de atualização do pedido
    }
};
