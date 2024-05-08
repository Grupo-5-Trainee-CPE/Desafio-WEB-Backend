const startDB = require("./mongodb");

class Leaders{ 
    start(){
     startDB();
    }
}

module.exports = new Loaders();