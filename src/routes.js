const { Router } = require("express");
const ProjetoController = require("./Controllers/ProjetoController");
const UsuarioValidator = require("./Validators/UsuarioValidator");
const AuthController = require("./Controllers/AuthController");
const SessoesController = require("./Controllers/SessoesController"); // Importa o controlador SessoesController do arquivo './Controllers/SessoesController'.
const UsuarioController = require("./Controllers/UsuarioController");
const AuthValidator = require("./Validators/AuthValidator");
const ProjetoValidators = require("./Validators/ProjetoValidator");
const SessoesValidator = require("./Validators/SessoesValidator");
const verificarJwt = require("./Middlewares/verificarJwt");
const verificarUsuario = require("./Middlewares/verificarUsuario");

const rotas = Router();

//PROJETOS
rotas.post("/projetos", ProjetoValidators.create, ProjetoController.create); //ok
rotas.get("/projetos", ProjetoController.read); //não precisa de validação
rotas.delete("/projetos/:id", ProjetoValidators.destroy, ProjetoController.delete); // ok
rotas.put("/projetos/:id", ProjetoValidators.update, ProjetoController.update); // ok

//USUÁRIOS
rotas.post("/usuarios", UsuarioValidator.create, UsuarioController.create);
rotas.get("/usuarios", verificarJwt, UsuarioController.read);
rotas.delete("/usuarios/:id", verificarJwt, verificarUsuario, UsuarioValidator.destroy, UsuarioController.delete);
rotas.put("/usuarios/:id", verificarJwt, verificarUsuario, UsuarioValidator.update, UsuarioController.update);

//SESSÕES
rotas.post("/sessoes", verificarJwt, verificarUsuario, SessoesValidator.create, SessoesController.create);// define a rota POST para criar uma nova sessão, usando o método create do Controller.
rotas.get("/sessoes", verificarJwt, SessoesController.read);//define a rota get 
rotas.delete("/sessoes/:id_usuario", verificarJwt, verificarUsuario, SessoesValidator.destroy, SessoesController.delete);//define delete para uma sessão ESPECIFICADA pelo Id

//AUTH
rotas.post("/login", AuthValidator.login, AuthController.login);



module.exports = rotas; // Exporta rotas 
