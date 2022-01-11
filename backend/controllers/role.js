const mongoose = require("mongoose");
const { roleModel } = require("../database/models/roleSchema");
//create a function to create a new comment

const createNewRole = (req, res) => {
  const { role, permissions } = req.body;
  const NewRole = new roleModel({ role, permissions });
  NewRole.save()
    .then((addedRole) => {
      res.status(200).json({
        success: true,
        message: `Succeeded to add ${role} role`,
        role: addedRole,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    });
};

module.exports = { createNewRole };
