const mongoose = require('mongoose');

const petSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
        min: 0,
    },
    breed: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Pet', petSchema);