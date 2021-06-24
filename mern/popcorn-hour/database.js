const mongoose = require("mongoose");
const uri = "mongodb://localhost/popcorn-hour"; //this is the route for a local mongodb

mongoose
  .connect(uri)
  .then(db => console.log("DB is connected", db))
  .catch(err => console.error("Error connecting to DB", err));

module.exports = mongoose;
