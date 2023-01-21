require("dotenv").config();
const { request } = require("express");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const isExist = await User.findOne({ email: req.body.email });
  if (isExist !== null) {
    return res.status(200).json({ msg: "User already exists" });
  } else if (req.body.password === req.body.confirmPassword) {
    const result = await User.create(req.body);
    return res.status(200).json({ msg: "User succesfully created" });
  } else {
    return res.status(401).json({ msg: "Passwords do not match" });
  }
};
const login = async (req, res) => {
  console.log(process.env.JWT_SECRET);
  const { email, password } = req.body;
  const result = await User.findOne({ email: email });
  if (result === null) {
    return res
      .status(200)
      .json({ msg: "This user does not exist", data: result });
  } else if (bcrypt.compare(password, result.password)) {
    const token = jwt.sign(
      { username: result.name, userId: result._id },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );
    res.status(200).json({ msg: "Successful login", data: token });
  } else if (!bcrypt.compare(password, result.password)) {
  }
};

module.exports = { register, login };
