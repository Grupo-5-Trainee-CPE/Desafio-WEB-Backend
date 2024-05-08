const SessoesModel = require("../Models/SessoesModel");
const UsuarioModel = require("../Models/UsuarioModel");

class SessoesController {
  async create(req, res) {
    try {
      const { id_usuario } = req.body;
      const usuarioEncontrado = await UsuarioModel.findOne({ _id: id_usuario });

      if (usuarioEncontrado == null)
        return res.status(404).json({
          message: "Usuário com id " + id_usuario + " não encontrado! Não é possível iniciar a sessão",
        });

      const sessao = await SessoesModel.create(req.body);

      res.status(200).json(sessao);
    } catch (error) {
      res.status(500).json({ message: "ERRO", error: error.message });
    }
  }

  async read(req, res) {
    try {
      const sessao = await SessoesModel.find().populate("id_usuario", "-senha");

      res.status(200).json(sessao);
    } catch (error) {
      res.status(500).json({ message: "ERRO", error: error.message });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;
      const sessaoEncontrada = await SessoesModel.findOne({ id_usuario: id });
      if (!sessaoEncontrada)
        return res.status(404).json({
          message: "Usuário com id " + id + " não encontrado nas sessões!",
        });

      const sessao = await sessaoEncontrada.deleteOne();

      res
        .status(200)
        .json({
          mensagem: "Sessão do usuário com id " + id + " deletado com sucesso!",
        });
    } catch (error) {
      res.status(500).json({ message: "ERRO", error: error.message });
    }
  }
}

module.exports = new SessoesController();