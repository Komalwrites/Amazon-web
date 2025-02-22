const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    tagline : String,
    id: String,
    url: String,
    detailUrl: String,
    title:{
        shortTitle:String,
        longTitle:String,
    },
    price:{
        mrp: Number,
        cost: Number,
        discount:String,
    },
    description:{
        line1:String,
        line2:String,
        line3:String,
        line4:String,
        line5:String,
    }
});

const Products = new mongoose.model("products",productSchema);

module.exports = Products;