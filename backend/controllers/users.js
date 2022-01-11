const mongoose = require("mongoose");
const userModel = require("../database/models/userSchema");
//create a function to get all articles

const getAllusers = (req, res) => {
  userModel
    .find({})
    .then((users) => {
      if (!users.length) {
        res.status(404).json({
          success: false,
          message: "No users Yet",
        });
      }
      res.status(200).json({
        success: true,
        message: "All The Users",
        users: users,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server Error",
      });
    });
};

module.exports = { getAllusers };
