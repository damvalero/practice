const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  actors: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  //video
  rate: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true
  }
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
