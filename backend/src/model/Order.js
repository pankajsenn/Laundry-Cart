const mongoose = require("mongoose")

const Orderschema = mongoose.Schema({
    products:Array,
    email:String,
    status:{
        type:String,
        default:"Ready to pick up"
    },
    _id:String,
    total_price:Number
},{ timestamps: true })
const Orders = mongoose.model("Order",Orderschema);

module.exports = Orders;
