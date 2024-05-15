const SessoesModel = require("../Models/SessoesModel");

class SessoesController {

async create (req, res) {
  try
  {
    const sessoes = await SessoesModel.create(req.body);
    return res.status(200).json(sessoes);

  } catch (error) 
  {
    return res.status(500).json({ message: error.message }); 
  }
}

async read (req, res) {
  try
  {
    const sessoes = await SessoesModel.find().populate('id_usuario', '-senha');
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