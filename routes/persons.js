
const express = require('express');
const router = express.Router();
const Person = require('../models/person');

router.get('/', async(req, res) => {  
    try {
        console.log('Persons requested');  
        const persons = await Person.find();
        res.json(persons);
    } 
    catch(err) {
        console.log('There has been an error');
        res.send('There has been an error');
    }
});

module.exports = router;