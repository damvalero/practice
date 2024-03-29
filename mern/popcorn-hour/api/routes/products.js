const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Product = require("../models/products");

// we dont put again /products because is already in the app.js
// all of these codes are asyncronus
router.get("/", (req, res, next) => {
  Product.find() //all the objects
    .then(data => {
      console.log("have the data", data);
      res.json({ data }); // this products will be shown in the front
    })
    .catch(err => {
      console.log("An error happened:", err);
    });
  // res.status(200).json({
  //   message: "Handling GET request to /products"
  // });
});

router.post("/", (req, res, next) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price
  });
  product
    .save() // method from mongoose, this will allow to store this in the data base
    .then(result => {
      console.log(result);
    })
    .catch(err => console.log(err));
  res.status(201).json({
    message: "Handling POST request to /products",
    createdProduct: product
  });
});

router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  if (id == "special") {
    res.status(200).json({
      message: "You discovered the special ID",
      id: id
    });
  } else {
    res.status(200).json({
      message: "You passed an ID"
    });
  }
});

router.patch("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "Updated product!"
  });
});

router.delete("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "Product deleted!"
  });
});

module.exports = router;
