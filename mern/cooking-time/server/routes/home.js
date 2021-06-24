//import express
const express = require('express');

// put router
const router = express.Router();

// middleware
router.get('/', (req, res) => {
    console.log('You are in home');
    res.send('<h1>HOMEPAGE</h1>');
});
//export
module.exports = router;