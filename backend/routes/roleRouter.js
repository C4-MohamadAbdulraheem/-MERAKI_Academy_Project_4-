const express = require("express");
const { createNewRole } = require("../controllers/role");

//create commentRouter

const roleRouter = express.Router();

//end points for commentRouter

// end point to create new comment

roleRouter.post("/create", createNewRole);

module.exports = roleRouter;
