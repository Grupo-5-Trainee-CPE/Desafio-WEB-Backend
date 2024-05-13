const express = require("express");
const rotas = require("./routes");
const app = express();

app.use(express.json()) 
app.use(rotas);

app.use("*", (req, res) => {

  res.status(404).json({ message:"Rota não encontrada"});
}); 

app.listen(8000, () => console.log("servidor rodando!"));
