const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
// create an instance for userSchema

const userSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    age: { type: Number, max: 100, min: 8 },
    country: String,
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      maxlength: 25,
      minlength: 15,
    },
    password: { type: String, required: true, maxlength: 30, minlength: 6 },
    role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
    //read about timestamp
  },
  { timestamps: true }
);
const SALT = 10
userSchema.pre("save", async function(){
this.password = await bcrypt.hash(this.password,SALT)
})
const userModel = mongoose.model("User", userSchema);
module.exports = {userModel}
