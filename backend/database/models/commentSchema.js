const mongoose = require("mongoose");

const comment = new mongoose.Schema({
    comment:{type:required},
    commenter:{type:mongoose.Types.Schema.ObjectId , ref:"User"}
})