const mongoose = require("mongoose");

const AddressSchema = mongoose.Schema({
   address:{type:String,required:true},
   district:{type:String,required:true},
   pincode:{type:Number,required:true},
   state:{type:String,required:true},
})

const UserSchema = mongoose.Schema({
   name:{type:String ,required:true},
   password:{type:String ,required:true},
   email:{type:String ,required:true},
   phone:{type:String ,required:true},
   token:{type:String},
   address:[AddressSchema]
})

const User = mongoose.model("User",UserSchema);
module.exports = User;
