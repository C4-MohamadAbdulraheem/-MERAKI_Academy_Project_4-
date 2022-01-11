const mongoose = require("mongoose");
const { userModel } = require("../database/models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//create function to login a user into website and get the token
const login = (req, res) => {
  const { email, password } = req.body;
  userModel
    .findOne({ email: email })

    .populate("role", "-_id -__v")
    .then(async (result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: "The email doesn't exist",
        });
      }
      const valid = await bcrypt.compare(password, result.password);
      if (!valid) {
        return res.status(403).json({
          success: false,
          message: `The password you’ve entered is incorrect`,
        });
      }
      console.log(result);
      const payLoad = {
        userId: result.userId,
        country: result.country,
        role: result.role,
      };
      const options = {
        expiresIn: "60m",
      };
      const secret = process.env.SECRET;
      const token = await jwt.sign(payLoad, secret, options);

      res.status(200).json({
        success: true,
        message: `Valid login credentials`,
        token: token,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server Error",
        err: err,
      });
    });
};

module.exports = { login };
