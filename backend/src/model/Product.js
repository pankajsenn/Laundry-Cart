const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    title:String,
    price:Number,
    imageurl:String,
    description:String
})

const Products = mongoose.model("Product",ProductSchema);
module.exports = Products;