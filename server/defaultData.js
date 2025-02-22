const productdata = require("./constant/Productdata");
const products = require("./models/productSchema");


const DefaultData = async()=>{
    try {
        await products.deleteMany({});
        const storeData = await products.insertMany(productdata);
        // console.log(storeData);
    }
    catch (error) {
        console.log("error" + error.message);
    }
};
module.exports = DefaultData;