const express = require('express');
const port = 9000;
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());


// MongoDB configuration
const mongoose = require('mongoose');
const url = 'mongodb://localhost/PersonDB';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const con = mongoose.connection;

// Whenever connection is open, a callback function will be executed
con.on('open', () => console.log('Connected to mongodb'));

const personRouter = require('./routes/persons');
app.use('/persons', personRouter);

// Run server
app.listen(port, (err) => { 
    if (err) console.log("Error in server setup"); 
    console.log("Server listening on Port", port);
});