const mongoose = require('mongoose');

// Create a SCHEMA = a model
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    tech: {
        type: String,
        required: true
    },
    subscription: {
        type: Boolean,
        required: true,
        default: false
    }
});