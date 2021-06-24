const express = require("express");
const app = express();
const logger = require("morgan"); //logger package for nodejs
const bodyParser = require("body-parser");
const { mongoose } = require("./database");

const productRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/orders");

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CORS have to be before the routes
app.use((req, res, next) => {
  res.header("Acess-Control-Allow-Origin", "*");
  //star is to give acces to everything, we could restric it puting an specific url
  res.header(
    "Acess-Control-Allow-Headers",
    "Origin, X-Requested-With, Accept, Authorization"
  );
  if (req.mehtod === "OPTIONS") {
    //browsers will always send an options request after a post or put request
    res.header("Acess-Control-Allow-Methods", "PUT, POST, DELETE, PATCH, GET");
    return res.status(200).json({});
    //is an empty object because is already attached the answer in the header
  }
  next();
});

//Routes which should handle requests these are middlewares
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

//These two next block are te error handling
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
