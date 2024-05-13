const ProjetoModel = require("../Models/ProjetoModel");

class ProjetoController {

async create (req, res) {
   console.log (req.body) 
   const projeto = await ProjetoModel.create(req.body);
   return res.status(200).json(projeto);
}

edit (req, res) {
    
}

async delete (req, res) {
    const {id} = req.params 
    await ProjetoModel.findByIdAndDelete(id) 
    return res.status(200).json({"mensagem": "Projeto deletado com sucesso!"});
}

update (req, res) {
    
}

async read (req, res) {
   const projetos = await ProjetoModel.find();
   return res.status(200).json(projetos);
}


}
module.exports = new ProjetoController(); 