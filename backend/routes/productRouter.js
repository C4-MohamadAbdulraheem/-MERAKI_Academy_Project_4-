const express = require("express");
//create router
const productRouter = express.Router();
const {
  getAllProducts,
  deleteProductById,
  updateProductById,
  createNewProduct,
  getProductById,
  getProductByCategory,
  getProductBytitle
} = require("../controllers/products");
const { authentication } = require("../middleware/authentication");
const { authorization } = require("../middleware/authorization");

//products endpoints
//create  endpoint to get all products("/")

productRouter.get("/", getAllProducts);

//create  endpoint to get product by id ("/:id")

productRouter.get("/:id", getProductById);

//create  endpoint to delete product by id
productRouter.delete(
  "/delete/:id",
  authentication,
  authorization("Delete_Product_ById"),
  deleteProductById
);

//create  endpoint to update product by id
productRouter.patch(
  "/update/:id",
  authentication,
  authorization("Update_Product_ById"),
  updateProductById
);

// create  endpoint to create product
productRouter.post(
  "/create",
  authentication,
  authorization("Create_New_Product"),
  createNewProduct
);
////////////
productRouter.get("/get/:category", getProductByCategory);

////////////
productRouter.get("/search/:title", getProductBytitle);

module.exports = productRouter;
