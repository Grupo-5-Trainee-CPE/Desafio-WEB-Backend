const UsuarioModel = require("../Models/UsuarioModel");

class UsuarioController {

async create (req, res) {
   console.log (req.body) 
  //    const usuario = await UsuarioModel.create(req.body);//

   return res.status(200).json();
}

edit (req, res) {
    
}

delete (req, res) {
    
}

update (req, res) {
    
}

read (req, res) {
    
}




}

module.exports = new UsuarioController(); 