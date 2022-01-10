const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, min: 1 },
  Comment:{type : mongoose.Schema.Types.ObjectId ,ref:"Comment"}
});
module.exports = mongoose.model("Product", productSchema);
