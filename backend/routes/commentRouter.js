const express = require("express");
const { createNewComment } = require("../controllers/comments");
const { authentication } = require("../middleware/authentication");
//create commentRouter
const commentRouter = express.Router();

//end points for commentRouter

// end point to create new comment
commentRouter.post("/:id", authentication, createNewComment);
module.exports = commentRouter;
