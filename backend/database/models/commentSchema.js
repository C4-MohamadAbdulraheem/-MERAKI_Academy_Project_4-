const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    comment:{type:required},
    commenter:{type:mongoose.Types.Schema.ObjectId , ref:"User"}
})
module.exports = mongoose.model("Comment",commentSchema)