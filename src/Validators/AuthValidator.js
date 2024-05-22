const { z } = require("zod");
const { validateRequest } = require("zod-express-middleware");

const login = validateRequest({
    body: z.object({
        email: z.string().email({ required_error: "Email inválido"}).nonempty({ required_error: "Email não pode ser vazio"}),
        senha: z.string().nonempty({ required_error: "Senha não pode ser vazia"}),
    }),

});

module.exports = { login, };