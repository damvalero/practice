//import express
const express = require("express");
// const products = require('../data/products');
const Product = require("../models/productModel");

// put router
const router = express.Router();

// From this line comes the middlewares

//@desc     Fect all the products
//@route    GET /api/products/
//@access   Public
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.log(`Error getting the products, ${error}`);
  }
});

//@desc     Fect single products
//@route    GET /api/products/:id
//@access   Public
router.get("/:id", async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    console.log("showing id");
    res.json(product);
  } catch (error) {
    res.status(404);
    console.log(`Error getting the id product, ${error}`);
    next(error);
  }
});

//export
module.exports = router;
