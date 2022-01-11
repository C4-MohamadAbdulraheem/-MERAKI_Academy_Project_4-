const mongoose = require("mongoose");

//cerate role schema
const roleSchema = new mongoose.Schema({
  role: { type: String, required: true },
  permissions: [{ type: String, required: true }],
});
module.exports = mongoose.model("Role", roleSchema);
