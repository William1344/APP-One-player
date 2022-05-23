module.exports = class DestV{
    constructor(){
        this.jgd_Cluth      = {user : null, value    : 0, title: "Clutch", desc: "Decisivo nos momentos finais", rotulo : "decisivos"}; // cluth
        this.jgd_Fominha    = {user : null, value    : 0, title: "Fominha", desc: "Jogador com maior nº de jogos", rotulo : "jogos"}; // jogos
        this.jgd_Vencedor   = {user : null, value    : 0, title: "Vencedor", desc: "Jogador com maior nº de vitórias", rotulo : "vitórias"}; // vitorias
        this.jgd_Pontuador  = {user : null, value    : 0, title: "Pontuador", desc: "Jogador com maior pontuação", rotulo : "pontos"}; // Total de pontos
        this.jgd_2Pts       = {user : null, value    : 0, title: "DeRozan11", desc: "Jogador com mais cestas de 2 pontos", rotulo : "cestas de 2 pontos"}; // 2 pontos
        this.jgd_3Pts       = {user : null, value    : 0, title: "Curry30", desc: "Jogador com mais cestas de 3 pontos", rotulo : "cestas de 3 pontos"}; // 3 pontos
        this.jgd_Reboteiro  = {user : null, value    : 0, title: "Reboteiro", desc: "Jogador com maior nº de rebotes", rotulo : "rebotes"}; // Rebotes
        this.jgd_Assist     = {user : null, value    : 0, title: "Amigo", desc: "Jogador com maior nº de assistências", rotulo : "assistências"}; // Assitências
        this.jgd_Ladrao     = {user : null, value    : 0, title: "Batedor de carteiras", desc: "Jogador com maior nº de roubos de bola", rotulo : "roubos"}; // Roubos
        this.jgd_Bloker     = {user : null, value    : 0, title: "Aqui não", desc: "Jogador com maior nº de tocos", rotulo : "tocos"}; // Tocos
        this.jgd_AirBall    = {user : null, value    : 0, title: "Vamos treinar", desc: "Jogador com maior nº de air balls", rotulo : "air balls"}; // AirBall
        // medias
        this.jgd_FG         = {user : null, value    : 0, title: "Média de Vitórias", desc: "Jogador com maior média de vitórias", rotulo : "% média de vitórias"}; // FG 
        this.jgd_PPG        = {user : null, value    : 0, title: "Média de Pontos", desc: "Jogador com a maior média de pontos por jogo", rotulo : "pontos por jogo"}; // PPG
        this.jgd_2PPG       = {user : null, value    : 0, title: "Média 2PPG", desc: "Jogador com a maior média de cestas de 2 pontos ", rotulo : "cestas de 2 pontos por jogo"}; // 2PPG
        this.jgd_3PPG       = {user : null, value    : 0, title: "Média 3PPG", desc: "Jogador com a maior média de cestas de 3 pontos ", rotulo : "cestas de 3 pontos por jogo"}; // 3PPG
        this.jgd_APG        = {user : null, value    : 0, title: "Média Assistências", desc: "Jogador com a maior média assistências", rotulo : "assistências por jogo"}; // APG
        this.jgd_RPG        = {user : null, value    : 0, title: "Média Rebotes", desc: "Jogador com a maior média de rebotes por jogo", rotulo : "rebotes por jogo"}; // RPG
        this.jgd_BPG        = {user : null, value    : 0, title: "Média Tocos", desc: "Jogador com a maior média de tocos por jogo", rotulo : "tocos por jogo"}; // BPG
        this.jgd_RouPG      = {user : null, value    : 0, title: "Média Roubos", desc: "Jogador com a maior média de roubos por jogo", rotulo : "roubos por jogo"}; // rouPG
        this.jgd_AirBPG     = {user : null, value    : 0, title: "Média Air Balls", desc: "Jogador com a maior média de air balls por jogo", rotulo : "air balls por jogo"}; // AirBPG
    }
}