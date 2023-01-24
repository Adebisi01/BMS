const express = require("express");
const shop = require("../models/shop");
const shopRouter = express.Router();
const { createShop, getShops, searchShop } = require("../controllers/shop");

shopRouter.route("/").post(createShop).get(getShops);
shopRouter.route("/:key").post(searchShop);

module.exports = shopRouter;
