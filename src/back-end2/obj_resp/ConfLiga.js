module.exports = class ConfLiga{
  constructor(cnfg){
    this.id                 = cnfg.id;
    this.Ligas_idLigas      = cnfg.Ligas_idLigas;    
    this.marc24s            = cnfg.marc24s;
    this.selSubs            = cnfg.selSubs;
    this.auto_troca         = cnfg.auto_troca;
    this.faltas             = cnfg.faltas;
    this.rebote             = cnfg.rebote;
    this.assist             = cnfg.assist;
    this.block              = cnfg.block;
    this.airB               = cnfg.airB;
    this.roubo              = cnfg.roubo;
    this.createdAt          = cnfg.createdAt;
    this.updatedAt          = cnfg.updatedAt;    
  }
};