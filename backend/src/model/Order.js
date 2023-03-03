const mongoose = require("mongoose")

const Orderschema = mongoose.Schema({
    products:Array,
    email:String,
    status:{
        type:String,
        defalut:"Ready to pick up"
    },
    _id:String
},{ timestamps: true })
const Orders = mongoose.model("Order",Orderschema);

module.exports = Orders;
