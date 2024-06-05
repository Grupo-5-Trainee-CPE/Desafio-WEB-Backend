const UsuarioModel = require("../Models/UsuarioModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class AuthController {
    async login(req, res) {
        try {
            const { email, senha } = req.body;
            console.log(email, senha);
            const usuarioEncontrado = await UsuarioModel.findOne({ email }).select("+senha");
            if (!usuarioEncontrado)
              return res.status(403).json({ message: "Email ou senha inválidos" });


            const senhaCorreta = await bcrypt.compare(senha, usuarioEncontrado.senha);
            console.log(senhaCorreta);
            if (!senhaCorreta)
              return res.status(403).json({ message: "Email ou senha inválidos" }); 
            
            const { senha: hashedSenha, ...usuario } = usuarioEncontrado.toObject();   

            const token = jwt.sign({ usuario }, process.env.JWT_SECRET , {expiresIn: process.env.JWT_EXPIRE_IN});
            console.log(token);
            res.status(200).json({ token });
          } catch (error) {
            console.log(error);
            return res.status(500).json({ message: error.message });

          }
    }

}

module.exports = new AuthController();