const jwt = require("jsonwebtoken");
// const jwtdecode = require("jwt-decode");

const authorization = (permission) => {
  permission = permission.toLowerCase();
  return (req, res, next) => {
    let token = req.token;
    // token = jwtdecode(token);
    const mapOverpermissions = token.role.permissions.map((ele) => {
      return ele.toLowerCase();
    });
    if (mapOverpermissions.includes(permission)) {
      next();
    } else {
      res.status(403).json({
        success: false,
        message: "Un Authorized",
      });
    }
  };
};

module.exports = { authorization };
