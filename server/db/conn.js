const mongoose = require("mongoose");
const DB = process.env.DATABASE;

mongoose.connect(DB).then(()=>console.log("DB connection is successfully done")).catch((error)=>console.log("error hai" + error.message));