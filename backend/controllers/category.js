const mongoose = require("mongoose");

const catgoryModel = require("../database/models/categorySchema.js");

const createNewCategory = (req, res) => {
  const { category } = req.body;

  const newCategory = new catgoryModel({ category })
    .save()
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "Category Added",
        category: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server Error",
      });
    });
};

module.exports = { createNewCategory };
