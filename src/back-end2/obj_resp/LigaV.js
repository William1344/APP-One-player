const DestV = require("./DestV");

module.exports = class LigaV{
  constructor(buffer, conf){
    this.id          =   buffer.id          // id da liga
    this.local       =   buffer.local       // local da lica cidade-estado
    this.img_log     =   buffer.img_liga    // guarda a referencia da imagem da liga.
    this.nome        =   buffer.nome        // nome da liga
    this.criador     =   buffer.criador     // quem criou a liga
    this.confLiga    =   conf               // configurações da liga
    this.total_pts   =   0                  // total de pontos na liga 
    this.createdAt   =   buffer.createdAt   // data em que foi criada
    this.updatedAt   =   buffer.updatedAt   // data em que foi modificada
    this.pedidoIsOn  =   false              // se tem pedidos ativos
    this.pedid       =   false              // se o objeto é um pedido
    this.pedidos     =   new Array()        // lista de pedidos da liga
    this.list_users  =   new Array()        // array de user_liga
    this.list_usersG =   new Array()        // guarda os jogadores me formato de jogo
    this.ids_adms    =   new Array()        // array de jogadores adms da liga
    this.list_times3 =   new Array()        // array de times3x3
    this.list_times5 =   new Array()        // array de times5x5
    this.listJgsNxN  =   new Array()        // array de Jogos nxn  
    this.listJgs3x3  =   new Array()        // array de Jogos 3x3
    this.listJgs5x5  =   new Array()        // array de Jogos 5x5
    this.destaques   =   new DestV()        // objeto com os destaques
  }
};
