
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require('colors');
const users = require("./data/users");
const products = require("./data/products");

const app = express();

const User = require("./models/userModel");
const Product = require("./models/productModel");
const Order = require("./models/orderModel");
const connectDb = require('./config/db');

dotenv.config();

// connect to database
connectDb();

//modo maximilian
// listen server
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then((result) => {
//     const PORT = process.env.PORT || 4000;
//     app.listen(
//       PORT,
//       console.log(
//         `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
//       )
//     );
//   })
//   .catch((err) => {
//     console.log(err);
//   });


const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;
    const sampleProducts = products.map(product => {
      return {...product, user: adminUser}
    });

    await Product.insertMany(sampleProducts)

    console.log('Data Imported'.green.inverse);
    process.exit()
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data destroyed!'.red.inverse);
    process.exit()
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1)
  }
}

if(process.argv[2] === '-d'){
  destroyData()
}else {
  importData()
}