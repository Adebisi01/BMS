const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please provide a name "],
    maxlength: [100, "Name cannot be more than 100 characters "],
  },
  email: {
    type: String,
    trim: true,
    required: [true, "Please provide an email"],
    lowercase: true,
    maxlength: [100, "Email cannot be more than 100 characters"],
    lowercase: true,
  },
  phone: {
    type: String,
    required: true,
    maxlength: [15, "Phone number cannot be more than 15 characters"],
  },
  gender: {
    type: String,
    trim: true,
    enum: ["male", "female"],
    lowercase: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
    minlength: [8, "Password must be at least eight characters"],
  },
  shop: {
    type: String,
  },
});
UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
module.exports = mongoose.model("User", UserSchema);
