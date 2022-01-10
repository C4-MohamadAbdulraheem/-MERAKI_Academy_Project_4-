const express = require("express");
const { getAllusers } = require("../controllers/users");

//create router
const userRouter = express.Router();

// userRouter endpoints

//create  endpoint to get all products("/")

userRouter.get("/", getAllusers);

module.exports = userRouter;
