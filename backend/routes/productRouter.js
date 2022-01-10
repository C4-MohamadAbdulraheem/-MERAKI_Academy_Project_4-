const express = require("express");
//create router
const productRouter = express.Router();
const { getAllProducts,deleteProductById } = require("../controllers/products");

//products endpoints
//create an endpoint to get all products("/")

productRouter.get("/", getAllProducts);

//create an endpoint to delete product by id
productRouter.delete("/delete/:id",deleteProductById) 

module.exports = productRouter;
