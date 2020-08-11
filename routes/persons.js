
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

router.post('/', async(req, res) => {
        console.log('You have posted an object');
        const person = new Person ({
            name: req.body.name,
            tech: req.body.tech,
            subscription: req.body.subscription
        });

        try {
            const a1 = await person.save();
            res.json(a1);
        } 
        catch(err) {
        console.log('Could not create object');
        res.send('Error: Could not create object');
    };
});


module.exports = router;