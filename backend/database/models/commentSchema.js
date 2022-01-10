const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  comment: { type: required },
  commenter: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});
module.exports = mongoose.model("Comment", commentSchema);