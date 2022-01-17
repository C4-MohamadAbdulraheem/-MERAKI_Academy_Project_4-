const jwt = require("jsonwebtoken");

//create authentication function
const authentication = (req, res, next) => {
  try {
    //check the token if exist or not (the user login or not)
    if (!req.headers.authorization) {
      return res.status(403).json({
        success: false,
        message: `Forbidden error you have to login`,
      });
    }
    //check token if valid (expired  ) or not
    const token = req.headers.authorization.split(" ").pop();

    jwt.verify(token, process.env.SECRET, (err, result) => {
      if (err) {
        return res.status(403).json({
          success: false,
          message: `The token is invalid or expired`,
        });
      }
      req.token = result;
      console.log(result);
      next();
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
module.exports = { authentication };
