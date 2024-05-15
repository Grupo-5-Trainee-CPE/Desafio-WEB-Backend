const { Router } = require("express");
const ProjetoController = require("./Controllers/ProjetoController");
const UsuarioValidator = require("./Validators/UsuarioValidator");
const SessoesController = require("./Controllers/SessoesController");
const UsuarioController = require("./Controllers/UsuarioController");

const rotas = Router();

//ProjetoS
rotas.post("/projetos", UsuarioValidator.create, ProjetoController.create);
rotas.get("/projetos", ProjetoController.read);
rotas.delete("/projetos/:id", ProjetoController.delete);
rotas.put("/projetos/:id", ProjetoController.update);

//USUÁRIOS
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
