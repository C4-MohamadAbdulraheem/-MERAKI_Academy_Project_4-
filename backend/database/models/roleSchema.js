const mongoose = require("mongoose");

//cerate role schema
const roleSchema = new mongoose.Schema({
  role: { type: String, required: true },
  permissions: [{ type: String, required: true }],
});
const roleModel = mongoose.model("Role", roleSchema);
module.exports = {roleModel}
