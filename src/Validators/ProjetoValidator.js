const { default: mongoose } = require("mongoose");
const {z} = require("zod");
const {validateRequest} = require("zod-express-middleware");
 //const { destroy } = require("../Controllers/SessoesController");



const create = validateRequest({
    body: z.object({
        descricao: z.string({require_error: "A decrição é obrigatório nesse campo!"}),  
        nome: z.string({require_error: "O nome é obrigatório nesse campo!"}),
    }), 
});



const destroy = validateRequest({
    params: z.object({
        id: z.custom(mongoose.isValidObjectId, "O Id não é válido!"),
    }),
 }); 



const update = validateRequest({
    body: z.object({
        descricao: z.string().optional(),  
        nome: z.string().optional(),
     }),
    params: z.object({}),
        id: z.custom(mongoose.isValidObjectId, "O Id não é válido!"),
}) 




module.exports = {
    create,
    destroy,
    update,
}; 

