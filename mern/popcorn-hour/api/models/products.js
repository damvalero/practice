const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  _id: Schema.Types.ObjectId, //like a serial ID
  name: String,
  price: Number
});
module.exports = mongoose.model("Product", productSchema);
