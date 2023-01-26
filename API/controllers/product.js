const Product = require("../models/products");

const createProduct = async (req, res) => {
  console.log(req.body);
  const product = await Product.create(req.body);
  res
    .status(201)
    .json({ msg: "You Successfully created a product ", data: product });
};
const getProducts = async (req, res) => {
  const limit = Number(req.body.limit) || 100;
  const result = await Product.find(req.body).limit(limit);
  console.log(result);
  res.status(200).json({ msg: "Product Fetch Successful", data: result });
};
const searchProduct = async (req, res) => {
  const { key } = req.params;
  console.log(key);
  const limit = Number(req.body.limit) || 100;
  const result = await Product.find({
    $or: [
      { name: { $regex: ".*" + key + ".*" } },
      { category: { $regex: ".*" + key + ".*" } },
      { description: { $regex: ".*" + key + ".*" } },
    ],
  }).limit(limit);

  res.status(200).json({ msg: "Product Fetch Successful", data: result });
};
module.exports = { createProduct, getProducts, searchProduct };
