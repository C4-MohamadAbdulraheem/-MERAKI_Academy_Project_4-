const express = require("express");
const {createNewCategory} = require("../controllers/category")

//create category router
const categoryRouter = express.Router();

//end points

categoryRouter.post("/create", createNewCategory);
module.exports = categoryRouter;
