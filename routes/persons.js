
const express = require('express');
const router = express.Router();
const Person = require('../models/person');

// Displays all collections in the db
router.get('/', async(req, res) => {  
    try {
        console.log('All persons in the db requested');  
        const persons = await Person.find();
        res.json(persons);
    } 
    catch(err) {
        console.log('There has been an error');
        res.send('There has been an error');
    }
});

// Displays one collection in the db
router.get('/:id', async(req, res) => {  
    try {
        console.log('Single person requested from the db');  
        const person = await Person.findById(req.params.id);
        res.json(person);
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
    }
});

router.patch('/:id', async(req, res) => {
    try {
        const person = await Person.findById(req.params.id);
        person.subscription = req.body.subscription;
        const a1 = await person.save();
        res.json(a1);
    }
    catch(err) {
        console.log('No update possible');
        res.send('Could not update the person');
    }
});

router.delete('/:id', async(req, res) => {
    try {
        const person = await Person.findById(req.params.id);
        const a1 = await person.delete();
        res.json(a1);
    }
    catch(err) {
        console.log('No delete possible');
        res.send('Could not delete the person');
    }
});




module.exports = router;