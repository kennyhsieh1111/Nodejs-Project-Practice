const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create Schema
const MarioCharSchema = new Schema({
    name: String,
    weight: Number
});

// Create Model in the Collection
const MarioChar = mongoose.model('Mario', MarioCharSchema);

// Export the Model, thus it can be used on other js
module.exports = MarioChar;