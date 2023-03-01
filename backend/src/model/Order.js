const mongoose = require("mongoose")

const Orderschema = mongoose.Schema({
    products:Array,
    address : Object,
    email:String,
    _id:String
})
const Orders = mongoose.model("Order",Orderschema);

module.exports = Orders;
