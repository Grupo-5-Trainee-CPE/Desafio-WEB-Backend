const mongoose = require("mongoose");

async function startDB(){
    await mongoose.connect("mongodb+srv://henriqueandrade:ZJ66kd3QUFpefzkM@cluster0.4w3sgmb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
}

module.exports = startDB;