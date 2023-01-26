const express = require("express");
const authRouter = express.Router();
const { register, login, refreshToken } = require("../controllers/auth");

authRouter.route("/register").post(register);
authRouter.route("/login").post(login);
authRouter.route("/refresh").post(refreshToken);

module.exports = authRouter;
