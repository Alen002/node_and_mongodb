
const express = require('express');
const router = express.Router();

router.get('/', () => {  
    console.log('Persons requested');       
});

module.exports = router;