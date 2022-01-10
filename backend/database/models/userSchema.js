const mongoose = require("mongoose")


// create an instance for userSchema

const userSchema = new mongoose.Schema({
    firstName:String,
    lastName :String,
    age:{type:Number , max:100 , min:8},
    country:String,
    email:{ type:String,unique:true,required:true,toLowerCase:true , maxlength:25 ,minlength:15},
    password:{type:String,required:true, maxlength:30 ,minlength:10}
})