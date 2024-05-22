const { Mongoose, default: mongoose } = require("mongoose");
const { z } = require("zod");
const { validateRequest } = require("zod-express-middleware");

const create = validateRequest({
    body: z.object({
        id_usuario: z.custom(mongoose.isValidObjectId, "ID do usuário é inválido"),
    }),
});

const destroy = validateRequest({
    params: z.object({
        id_usuario: z.custom(mongoose.isValidObjectId, "ID do usuário é inválido"),
    }),
});

module.exports = {create,destroy};