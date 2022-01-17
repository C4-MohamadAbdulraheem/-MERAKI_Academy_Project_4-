const mongoose = require("mongoose");
const { commentModel } = require("../database/models/commentSchema");
const { productModel } = require("../database/models/productSchema");

//create a function to create a new comment

const createNewComment = (req, res) => {
  const { comment } = req.body;
  const productId = req.params.id;

  let commenter = req.token.userId;
  console.log(req.token);
  const newComment = new commentModel({ comment, commenter });
  newComment
    .save()
    .then(async (comment) => {
      const comments = await productModel.updateOne(
        { _id: productId },
        { $push: { comment: comment } }
      );
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
