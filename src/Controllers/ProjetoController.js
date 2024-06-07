const ProjetoModel = require("../Models/ProjetoModel");

class ProjetoController {
  async create(req, res) {
    try {
      const projeto = await ProjetoModel.create(req.body);
      return res.status(200).json(projeto);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      await ProjetoModel.findByIdAndDelete(id);
      return res
        .status(200)
        .json({ mensagem: "Projeto deletado com sucesso!" });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      const projeto = await ProjetoModel.findByIdAndUpdate(id, req.body);

      return res.status(200).json(projeto);
    } catch (error) {
      res.status(500).json({ message: "Erro", error: error.message });
    }
  }

  async read(req, res) {
    try {
      const projetos = await ProjetoModel.find();
      return res.status(200).json(projetos);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
}
module.exports = new ProjetoController();
