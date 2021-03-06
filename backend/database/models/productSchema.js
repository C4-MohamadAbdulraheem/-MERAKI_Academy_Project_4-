const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: {type:String },
    price: { type: String },
    ammount:{type:String},
    image:{type:String},
    comment: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: true }
);
const productModel = mongoose.model("Product", productSchema);
module.exports = { productModel };
