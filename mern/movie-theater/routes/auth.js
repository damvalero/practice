"use strict";

const { Router } = require("express");
const router = Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const User = require("../models/user");

router.post("/sigup", (req, res) => {
  bcrypt.hash(req.body.email, 6, (err, hash) => {
    if (err) {
      return res.status(500).json({
        error: err
      });
    } else {
      const user = new User({
        _id: new mongoose.Tupes.ObjectId(),
        email: req.body.email,
        password: hash
      });
      user
        .save()
        .then(result => {
          console.log(result);
          res.status(201).json({
            message: "User created"
          });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({
            error: err
          });
        });
    }
  });
});

module.exports = router;
