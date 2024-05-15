const { Router } = require("express");
const ProjetoController = require("./Controllers/ProjetoController");
const SessoesController = require("./Controllers/SessoesController"); 

const ProjetoValidators = require("./Validators/ProjetoValidator");


const rotas = Router();

//ProjetoS
rotas.post('/projetos',ProjetoValidators.create, ProjetoController.create); //ok
rotas.get('/projetos', ProjetoController.read); //não precisa de validação  
rotas.delete('/projetos/:id',ProjetoValidators.destroy, ProjetoController.delete); // ok
rotas.put('/projetos/:id', ProjetoValidators.update, ProjetoController.update); // ok





module.exports = rotas;