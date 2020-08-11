
const express = require('express');
const router = express.Router();

router.get('/', async(req, res) => {  
    try {
        console.log('Persons requested');  
        res.send('Person route is working'); 
    } 
    catch(err) {
        console.log('There has been an error');
        res.send('There has been an error');
    }
});

module.exports = router;