const express = require('express');
const mongoose = require('mongoose');
const port = 9000;
const url = 'mongodb://localhost/PersonDB';
const app = express();

mongoose.connect(url)




app.listen(port, (err) => { 
    if (err) console.log("Error in server setup"); 
    console.log("Server listening on Port", port);
});

// Routes
app.get('/', (req, res) => {         
    res.send('express is working');
});

