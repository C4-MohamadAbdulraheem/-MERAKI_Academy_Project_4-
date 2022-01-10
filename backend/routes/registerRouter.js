const express = require("express");
const { register } = require("../controllers/register.js");

//create router
const registerRouter = express.Router();

// userRouter endpoints

//create  endpoint to get all products("/")

registerRouter.get("/", register);

module.exports = registerRouter;
