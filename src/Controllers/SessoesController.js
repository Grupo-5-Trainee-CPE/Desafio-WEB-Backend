const SessoesModel = require("../Models/SessoesModel");

class SessoesController {

async create (req, res) {
  try
  {
    const sessoes = await SessoesModel.create(req.body);
    return res.status(200).json(sessoes);// Retorna status 200 (OK) e a lista de sessões como JSON.

  } catch (error) 
  {
    return res.status(500).json({ message: "Já existe essão ativa para esse usuario", error: error.message }); 
  }
}

async read (req, res) {
  try
  {
    const sessoes = await SessoesModel.find().populate('id_usuario', '-senha'); // Varre todas as sessões no database e preenche o campo id_usuario com os dados do usuário logado e tbm exclui a senha para nao aparecer
    return res.status(200).json(sessoes);

  } catch (error) 
  {
    return res.status(500).json({ message: error.message }); 
  }
    
}

async delete (req, res) {
  try
  {
    const { id } = req.params;
    await SessoesModel.findByIdAndDelete(id); 
    return res.status(200).json({ message: "Sessão deletada com sucesso!" });

  } catch (error) 
  {
    return res.status(500).json({ message: error.message }); 
  }
}
}

module.exports = new SessoesController(); 