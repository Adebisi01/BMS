const Shop = require("../models/shop");

const createShop = async (req, res) => {
  const { owner, name, category } = req.body;
  if (!owner || !name || !category) {
    res.status(400).json({ msg: "error" });
  } else {
    const result = await Shop.create(req.body);
    res.status(201).json({ msg: "Shop Succesfully created", date: result });
  }
};
const getShops = async (req, res) => {
  const limit = Number(req.body.limit) || 100;
  const result = await Shop.find(req.body).limit(limit);
  console.log(result);
  res.status(200).json({ msg: "Shop Fetch Successful", data: result });
};
const searchShop = async (req, res) => {
  const { key } = req.params;
  const limit = Number(req.body.limit) || 100;
  const result = await Shop.find({
    $or: [
      { name: { $regex: ".*" + key + ".*" } },
      { category: { $regex: ".*" + key + ".*" } },
    ],
  }).limit(limit);

  res.status(200).json({ msg: "Shop Fetch Successful", data: result });
};
module.exports = { createShop, getShops, searchShop };
