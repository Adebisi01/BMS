const express = require("express");
const productRouter = express.Router();
const { createProduct } = require("../controllers/product");

productRouter.route("/").post(createProduct);

module.exports = productRouter;
