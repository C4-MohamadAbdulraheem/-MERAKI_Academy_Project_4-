const mongoose = require("mongoose");
const { userModel } = require("../database/models/userSchema");
// create a function to register a new user

const register = (req, res) => {
  const { firstName, lastName, age, country, email, password, role } = req.body;
  const user = new userModel({
    firstName,
    lastName,
    age,
    country,
    email,
    password,
    role,
  });
  user
    .save()
    .then((user) => {
      res.status(200).json({
        success: true,
        message: "Success user Added",
        user: user,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: err.message,
        err: err,
      });
    });
};

module.exports = { register };
