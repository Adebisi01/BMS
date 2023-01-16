const express = require("express");
const authRouter = express.Router();
const { authController } = require("../controllers/auth");

authRouter.route("/").get(authController);

module.exports = authRouter;
