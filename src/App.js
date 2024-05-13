const express = require("express");
const rotas = require("./routes");
const app = express();

app.get("", (req, res) => {
    return res.json({
        message: "Hello World!"
    })
})
app.use(rotas);
app.listen(8000, () => console.log("servidor rodando!"));
