const mongoose = require("mongoose");
const {productModel} = require("../database/models/productSchema");

//create a function to get all articles

const getAllProducts = (req, res) => {
  //take the userid from the token
  productModel
    .find({})
    // .populate("comments")
    .then((products) => {
      if (products.length) {
        res.status(200).json({
          success: true,
          message: "All The Products",
          products: products,
        });
      }
      res.status(404).json({
        success: false,
        message: `No Articles Yet`,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
      });
    });
};
// cerate function to get product by id

const getProductById = (req, res) => {
  const productId = req.params.id;
  productModel
    .findById(productId)
    .populate("comment","comment")
    .then((product) => {
      if (!product) {
        return res.status(404).json({
          success: false,
          message: "The Product not found",
        });
      }
      res.status(200).json({
        success: true,
        message: `The Product ${productId} `,
        product: product,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server Error",
      });
    });
};
//create a function to delete product by id

const deleteProductById = (req, res) => {
  const productId = req.params.id;
  productModel
    .findByIdAndDelete(productId)
    .then((productDeleted) => {
      if (productDeleted) {
        res.status(200).json({
          success: true,
          message: `Succeeded to delete product with id: ${productId}`,
        });
      } else {
        res.status(404).json({
          success: false,
          message: `product not found`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
      });
    });
};

//create a function to update product by id

const updateProductById = (req, res) => {
  const productId = req.params.id;
  const { title, description, price, comment, relaeaseAt } = req.body;
  productModel
    .findByIdAndUpdate(
      productId,
      { title, description, price, comment, relaeaseAt },
      { new: true }
    )

    .then((updatedProduct) => {
      if (!updatedProduct) {
        res.status(404).json({
          success: false,
          message: `product not found`,
        });
      }
      res.status(200).json({
        success: true,
        message: `Succeeded to update product with id: ${productId}`,
        updatedProduct: updatedProduct,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server Error",
      });
    });
};

//create a function to create product

const createNewProduct = (req, res) => {
  const { title, description, price, comment, relaeaseAt } = req.body;
  const newProduct = new productModel({
    title,
    description,
    price,
    comment,
    relaeaseAt,
  });
  newProduct
    .save()
    .then((product) => {
      res
        .status(201)
        .json({ success: true, message: "Product Created", product: product });
    })
    .catch((err) => {
      res.status(404).json({
        success: false,
        message: err.message,
      });
    });
};

module.exports = {
  getAllProducts,
  deleteProductById,
  updateProductById,
  createNewProduct,
  getProductById,
};
