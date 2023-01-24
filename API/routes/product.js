const express = require("express");
const productRouter = express.Router();
const {
  createProduct,
  getProducts,
  searchProduct,
} = require("../controllers/product");

productRouter.route("/").post(createProduct).get(getProducts);
productRouter.route("/:key").post(searchProduct);

module.exports = productRouter;
