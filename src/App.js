const express = require("express");
const app = express();

app.use(express.json());

module.exports = app;

/*
const express = require("express");

const app = espress();

app.get("", (req, res) => {
    return res.json({
        message: "Hello World!"
    })
})

app.listen(8000, () => console.log("servidor rodando!"));
*/