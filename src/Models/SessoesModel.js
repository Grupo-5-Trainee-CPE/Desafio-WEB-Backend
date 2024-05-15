const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SessoesSchema = new Schema({
    id_usuario: { 
        type: Schema.Types.ObjectId,
        ref: 'usuarios',
        unique: true,
    }

    /*id_projeto: { 
        type: Schema.Types.ObjectId,
        ref: 'projetos'
    }*/  //DESCOMENTAR QUANDO TIVER O MODELO DE PROJETOS
}, {
    timestamps: true //Tempo Login
});

const SessoesModel = mongoose.model('sessoes', SessoesSchema);

module.exports = SessoesModel;
