const express = require("express");
const rotas = require("./routes");
const app = express();

app.use(rotas);
app.use("*", (req, res) => {
  //após rodar o app.use(rotas), se uma rota não estiver definida, ele vai vir para essa linha, que captura qualquer rota restante (não definida) e fala que ela não foi encontrada
res.status(404).json({ message: "Rota não encontrada" });
});

app.listen(8000, () => console.log("servidor rodando!"));
