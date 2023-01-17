const Product = require("../models/products");

const createProduct = (req, res) => {
  console.log(req.body);
  const product = Product.create(req.body);
  res.status(201).json({ product });
};

module.exports = { createProduct };
