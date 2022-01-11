const express = require("express");
//create router
const productRouter = express.Router();
const {
  getAllProducts,
  deleteProductById,
  updateProductById,
  createNewProduct,
  getProductById,
} = require("../controllers/products");

//products endpoints
//create  endpoint to get all products("/")

productRouter.get("/", getAllProducts);

//create  endpoint to get product by id ("/:id")

productRouter.get("/:id", getProductById);

//create  endpoint to delete product by id
productRouter.delete("/delete/:id", deleteProductById);

//create  endpoint to update product by id
productRouter.put("/update/:id", updateProductById);

// create  endpoint to create product
productRouter.post("/create", createNewProduct);

module.exports = productRouter;
