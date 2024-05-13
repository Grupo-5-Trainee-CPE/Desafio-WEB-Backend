const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProjetoSchema = new Schema({
  descricao: {
    type: String,
    unique: true,
  },
  nome: {
    type: String,
    unique: true,
  },
});

const ProjetoModel = mongoose.model("projetos", ProjetoSchema);

module.exports = ProjetoModel;