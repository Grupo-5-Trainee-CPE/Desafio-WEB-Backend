const SessoesModel = require("../Models/SessoesModel");
const UsuarioModel = require("../Models/UsuarioModel");
const ProjetoModel = require("../Models/ProjetoModel"); // Importe o modelo de projeto

class SessoesController {

  async create(req, res) {
    try {
      const usuarioEncontrado = await UsuarioModel.findById(req.body.id_usuario);
      
      if (!usuarioEncontrado) return res.status(404).json({ message: "Usuário não encontrado!" });

      // Verifique se id_projeto está presente no corpo da requisição
      if (!req.body.id_projeto) return res.status(400).json({ message: "Id do projeto não fornecido!" });

      // Verifique se o projeto existe
      const projetoEncontrado = await ProjetoModel.findById(req.body.id_projeto);
      if (!projetoEncontrado) return res.status(404).json({ message: "Projeto não encontrado!" });

      const sessoes = await SessoesModel.create(req.body);
      return res.status(200).json(sessoes);

    } catch (error) {
      return res.status(500).json({ message: "Erro ao criar sessão", error: error.message });
    }
  }

  async read(req, res) {
    try {
      const sessoes = await SessoesModel.find()
        .populate('id_usuario', '-senha')
        .populate('id_projeto');

      const sessoesWithTime = sessoes.map(sessao => {
        const loginTime = sessao.createdAt;
        const currentTime = new Date();
        const timeLoggedIn = Math.floor((currentTime - loginTime) / (1000 * 60)); // tempo em minutos

        const formatTime = (date) => {
          const hours = String(date.getHours()).padStart(2, '0');
          const minutes = String(date.getMinutes()).padStart(2, '0');
          return `${hours}:${minutes}`;
        };

        const formatDuration = (durationInMinutes) => {
          const hours = String(Math.floor(durationInMinutes / 60)).padStart(2, '0');
          const minutes = String(durationInMinutes % 60).padStart(2, '0');
          return `${hours}:${minutes}`;
        };

        return {
          id: sessao._id,
          nome: sessao.id_usuario.nome,
          projeto: sessao.id_projeto ? sessao.id_projeto.nome : "Sem projeto",
          cargo: sessao.id_usuario.cargo,
          inicio: formatTime(loginTime),
          time: formatDuration(timeLoggedIn)
        };
      });

      return res.status(200).json(sessoesWithTime);

    } catch (error) {
      return res.status(500).json({ message: "Erro ao buscar sessões", error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id_usuario } = req.params;

      const sessaoEncontrada = await SessoesModel.findOne({ id_usuario }); 

      if (!sessaoEncontrada) return res.status(404).json({ message: "Sessão não encontrada" });

      await sessaoEncontrada.deleteOne();

      return res.status(200).json({ message: "Sessão deletada com sucesso!" });

    } catch (error) {
      return res.status(500).json({ message: "Erro ao deletar sessão", error: error.message });
    }
  }
}

module.exports = new SessoesController();
