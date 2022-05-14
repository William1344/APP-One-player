module.exports = class User_ScoresVar{
    constructor(tipo){
        this.type        = tipo  // pode ser 3x3 || 5x5 || SOMA    
        this.jogos       = 0;    // total de jogos
        this.vit         = 0;    // total de vitórias
        this.cluth       = 0;    // total de jogos finalizados 3x3
        this.total_pts   = 0;    // total de pts
        this.a_FG        = 0;    // Porcentagem de vitorias
        this.a_2pts      = 0;    // total 2 pts
        this.a_3pts      = 0;    // total 3 pts
        this.airB        = 0;    // total de air ball
        this.asst        = 0;    // total de assistencias
        this.block       = 0;    // total de tocos
        this.reb         = 0;    // total de rebotes
        this.roubo       = 0;    // total de roubos de bola
        this.total_PPG   = 0;    // total_pts / nº de jogos
        this.a_2PG       = 0;    // 2pts / nº de jogos
        this.a_3PG       = 0;    // 3pts / nº de jogos
        this.a_AirPG     = 0;    // airB / nº de jogos
        this.a_APG       = 0;    // ast / nº de jogos
        this.a_BPG       = 0;    // blk / nº de jogos
        this.a_RPG       = 0;    // reb / nº de jogos
        this.a_RouPG     = 0;    // rouB / nº de jogos
    }
} 
