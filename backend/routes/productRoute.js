const express = require("express");
//create router
const productRoute = express.Router();

//products endpoints
//create a route to get all products
productRoute.get("/",getAllProducts)




module.exports = productRoute