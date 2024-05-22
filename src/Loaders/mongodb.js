const mongoose = require("mongoose");

async function startDB(){
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
}

module.exports = startDB;