const jwt = require("jsonwebtoken");

function verificarJwt(req, res, next) {
    
    const authHeader = req.headers.authorization || req.headers.Authorization;

    if (!authHeader) return res.status(403).json({ message: "Header de autorização não encontrado" });

    const [bearer, token] = authHeader.split(" ");

    if(!/^Bearer$/.test(bearer)) return res.status(403).json({ message: "Token mal formatado" });

    if (!token) return res.status(403).json({ message: "Token não encontrado" });

    jwt.verify(token, process.env.JWT_SECRET, (err, usuario) => {
        if (err) return res.status(403).json({ message: "Token inválido" });

        req.usuarioId = usuario.usuario._id;

        next();
    });
}

module.exports = verificarJwt;