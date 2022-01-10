const mongoose = require("mongoose");

//cerate role schema
const roleSchema = new mongoose.Schema({
  role: String,
  Permissions: [String],
});
module.exports = mongoose.model("Role", roleSchema);
