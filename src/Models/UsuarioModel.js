const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
  nome : { type: String, unique: true, },
  cargo : String,
  email : { type: String, unique: true, },
  senha : String,
  nivel : Boolean
});

const UsuarioModel = mongoose.model("usuarios", UsuarioSchema);

module.exports = UsuarioModel;