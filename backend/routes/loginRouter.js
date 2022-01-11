const express = require("express");
const { login } = require("../controllers/login");

//create router
const loginRouter = express.Router();

// userRouter endpoints

//create  endpoint to get all products("/")

loginRouter.post("/", login);
module.exports = loginRouter