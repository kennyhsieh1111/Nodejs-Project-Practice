const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create Schema
const AlbumSchema = new Schema({
    title: String,
    tracks: Number
});

const SingerSchema = new Schema({
    name: String,
    age: Number,
    albums: [AlbumSchema]
});


// Create Model in the Collection
const Singer = mongoose.model('singer', SingerSchema);

// Export the Model, thus it can be used on other js
module.exports = Singer;