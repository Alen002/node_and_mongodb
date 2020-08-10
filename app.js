const express = require('express');
const mongoose = require('mongoose');
const port = 9000;
const url = 'mongodb://localhost/PersonDB';
const app = express();

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const con = mongoose.connection;

// Whenever connection is open, a callback function will be executed
con.on('open', () => console.log('Connected to mongodb'));

app.listen(port, (err) => { 
    if (err) console.log("Error in server setup"); 
    console.log("Server listening on Port", port);
});

// Routes
app.get('/', (req, res) => {         
    res.send('express is working');
});

