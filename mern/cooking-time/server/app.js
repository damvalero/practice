// import libraries
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/db");
const {notFound, errorHandler} = require('./middleware/errorMiddleware');

dotenv.config();

// database connection
connectDB();

//express function
const app = express();

// import routes
const homeRoute = require("./routes/home");
const productsRoute = require("./routes/products");

//make parser
app.use(bodyParser.urlencoded({ extended: false }));

//use routes
app.use('/api/products',productsRoute);
app.use(homeRoute);


//error messages
  //404
app.use(notFound)
  //general
app.use(errorHandler)


// const MONGO_URI = process.env.MONGO_URI;

// listen server
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then((result) => {
    const PORT = process.env.PORT || 4000;
    app.listen(
      PORT,
      console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
      )
    );
  // })
  // .catch((err) => {
  //   console.log(`Error:${err}`.red.underline.bold);
  // });
