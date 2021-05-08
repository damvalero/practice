// import libraries
const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

//express function
const app = express();

// import routes
const homeRoute = require('./routes/home');

//make parser
app.use(bodyParser.urlencoded({extended: false}));

//use routes
app.use(homeRoute);

// listen server
mongoose.connect(
    'mongodb+srv://daniboy:ukMKJgcRpWBpiefQ.@cluster0.nawqx.mongodb.net/cooking-time?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true } 
).then(result => {
    app.listen('3001')
}).catch(err => {
    console.log(err);
})