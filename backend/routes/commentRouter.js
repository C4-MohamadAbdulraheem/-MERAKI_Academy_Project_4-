const express = require("express");
const { createNewComment } = require("../controllers/comments");
//create commentRouter
const commentRouter = express.Router();

//end points for commentRouter

// end point to create new comment
commentRouter.post("/", createNewComment);
module.exports = commentRouter;
