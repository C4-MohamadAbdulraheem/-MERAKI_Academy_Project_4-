const mongoose = require("mongoose");
const commentModel = require("../database/models/commentSchema");

//create a function to create a new comment

const createNewComment = (req, res) => {
  const { comment, commenter } = req.body;
  const newComment = new commentModel({ comment, commenter });
  newComment
    .save()
    .then((comment) => {
      res.status(201).json({
        success: true,
        message: `The new comment added`,
        comment: comment,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
      });
    });
};

module.exports = { createNewComment };
