const { Router } = require("express");
const ProjetoController = require("./Controllers/ProjetoController");
const UsuarioValidator = require("./Validators/UsuarioValidator");
const SessoesController = require("./Controllers/SessoesController");
const UsuarioController = require("./Controllers/UsuarioController");

const ProjetoValidators = require("./Validators/ProjetoValidator");

const rotas = Router();

//ProjetoS
rotas.post("/projetos", ProjetoValidators.create, ProjetoController.create); //ok
rotas.get("/projetos", ProjetoController.read); //não precisa de validação
rotas.delete(
  "/projetos/:id",
  ProjetoValidators.destroy,
  ProjetoController.delete
); // ok
rotas.put("/projetos/:id", ProjetoValidators.update, ProjetoController.update); // ok

//USUÁRIOS
rotas.post("/usuarios", UsuarioValidator.create, UsuarioController.create);
rotas.get("/usuarios", UsuarioController.read);
rotas.delete(
  "/usuarios/:id",
  UsuarioValidator.destroy,
  UsuarioController.delete
);
rotas.put("/usuarios/:id", UsuarioValidator.update, UsuarioController.update);

//SESSÕES
rotas.post("/sessoes", SessoesController.create);
rotas.get("/sessoes", SessoesController.read);
rotas.delete("/sessoes/:id", SessoesController.delete);

module.exports = rotas;
