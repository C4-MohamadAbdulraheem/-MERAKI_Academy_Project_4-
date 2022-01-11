const express = require("express");
const { createNewComment } = require("../controllers/comments");
const { authentication } = require("../middleware/authentication");
const { authorization } = require("../middleware/authorization");
//create commentRouter
const commentRouter = express.Router();

//end points for commentRouter

// end point to create new comment
commentRouter.post("/:id", authentication,authorization("Create_New_Comment"), createNewComment);
module.exports = commentRouter;
