const { Mongoose, default: mongoose } = require("mongoose");
const { z } = require("zod");
const { validateRequest } = require("zod-express-middleware");

const create = validateRequest({
  body: z.object({
    nome: z
      .string({ required_error: "Nome inválido" })
      .nonempty({ required_error: "Nome não pode ser vazio" }),
    cargo: z
      .string({ required_error: "Cargo inválido" })
      .nonempty({ required_error: "Cargo não pode ser vazio" }),
    email: z
      .string()
      .email({ required_error: "Email inválido" })
      .nonempty({ required_error: "Email não pode ser vazio" }),
    senha: z.string().nonempty({ required_error: "Senha não pode ser vazia" }),
  }),
});

const update = validateRequest({
  body: z.object({
    nome: z.string().optional(),
    cargo: z.string().optional(),
    email: z.string().email({ required_error: "Email inválido" }).optional(),
    senha: z.string().optional(),
    nivel: z.boolean().optional(),
  }),
  params: z.object({
    id: z.custom(mongoose.isValidObjectId, "ID inválido"),
  }),
});

const destroy = validateRequest({
  params: z.object({
    id: z.custom(mongoose.isValidObjectId, "ID inválido"),
  }),
});

module.exports = { create, update, destroy };
