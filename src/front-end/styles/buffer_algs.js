const {Users} = require('./models');
const multer  = require('multer');
const upload  = multer({ 
  storage : multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './uploads/');
    }
  }),
  fileFilter: function (req, file, cb) {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpg' && file.mimetype !== 'image/jpeg') {
      return cb(new Error('Arquivo não suportado'));
    }
    cb(null, true);
  }
});
const path    = require('path');

routes.post('/salvar_image_user', upload.single('photo'), async (req, res) => {
  if(!req.file){
    return res.send({status : false, msg : "Sem arquivos enviados"});
  }
  try {
    console.log("Entrou aqui!! williams");
    //console.log("ReqFile",req.file);
    console.log("File -> \n", req.file);
    
    const img_encode = base64_encode(req.file);
    const user = await Users.findOne({where : {id : req.body.userId}});
    console.log("ReqBody ->\n",user);
    user.update({
      image : img_encode,
    });
    user.save();
    
    return res.send({status: true, msg: "Imagem salva com sucesso"});
  } catch(err) {
    return res.send({status : false, msg : "Erro ao salvar imagem (cathc)"});
  }
  
});