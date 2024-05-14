const ProjetoModel = require("../Models/ProjetoModel");

class ProjetoController {

async create (req, res) {
   console.log (req.body) 
   const projeto = await ProjetoModel.create(req.body);
   return res.status(200).json(projeto);
}

async delete (req, res) {
    const {id} = req.params 
    await ProjetoModel.findByIdAndDelete(id) 
    return res.status(200).json({"mensagem": "Projeto deletado com sucesso!"});
}

async update (req, res) {
   const {id} = req.params 

   const projeto = await ProjetoModel.findByIdAndUpdate(id, req.body)

   return res.status(200).json(projeto);
}

async read (req, res) {
   const projetos = await ProjetoModel.find();
   return res.status(200).json(projetos);
}


}
module.exports = new ProjetoController(); 