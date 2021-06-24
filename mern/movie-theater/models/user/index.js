"use strict";

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  passwordHash: {
    type: String,
    required: true
  }
  // role: {
  //   type: String,
  //   required: true,
  //   enum: ["user", "editor", "admin"],
  //   default: "user"
  // }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
