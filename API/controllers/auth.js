require("dotenv").config();
const { request } = require("express");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const refresh = (email, token) => {
  let decoded = jwt.verify(token, process.env.JWT_SECRET);
  return email === decoded.email;
};
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
  const { email, password } = req.body;
  const result = await User.findOne({ email: email });
  if (result === null) {
    return res
      .status(200)
      .json({ msg: "This user does not exist", data: result });
  } else if (bcrypt.compare(password, result.password)) {
    const token = jwt.sign(
      { username: result.name, email: result.email, userId: result._id },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );
    res
      .status(200)
      .json({ msg: "Successful login", data: token, userId: result._id });
  } else if (!bcrypt.compare(password, result.password)) {
    res.status(401).json({ msg: "Invalid Credentials" });
  }
};
const refreshToken = (req, res) => {
  const { email, refreshToken } = req.body;
  const validRefresh = refresh(email, refreshToken);
  if (!validRefresh) {
    return res.status(401).json({ msg: "Invalid refesh tokem" });
  } else {
    const token = jwt.sign(
      { username: result.name, email: result.email, userId: result._id },
      process.env.JWT_SECRET,
      { expiresIn: "5m" }
    );
    const refreshToken = jwt.sign(
      { username: result.name, email: result.email, userId: result._id },
      process.env.JWT_SECRET,
      { expiresIn: "30m" }
    );
    return res
      .status(201)
      .json({ msg: "Refresh Successful", token, refreshToken });
  }
};
module.exports = { register, login, refreshToken };
