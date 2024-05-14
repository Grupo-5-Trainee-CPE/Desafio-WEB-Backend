const { Router } = require("express");
const ProjetoController = require("./Controllers/ProjetoController");
const SessoesController = require("./Controllers/SessoesController"); 

const rotas = Router();

//ProjetoS
rotas.post('/projetos', ProjetoController.create);
rotas.get('/projetos', ProjetoController.read);
rotas.delete('/projetos/:id', ProjetoController.delete);
rotas.put('/projetos/:id', ProjetoController.update);





module.exports = rotas;