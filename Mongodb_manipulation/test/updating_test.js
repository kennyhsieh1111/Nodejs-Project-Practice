const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe our tests
describe('Updating records', function(){
    var char;
    // Add a character to the db before each tests
    beforeEach(function(done){
        char = new MarioChar({
            name: 'Mario',
            weight: 65
        });
        char.save().then(function(){
            done();
        });
    });

    it('Updates a record in the database', function(done){
        MarioChar.findOneAndUpdate({name: 'Mario'}, {name: 'Kenny'}).then(function(){
            MarioChar.findOne({_id: char._id}).then(function(result){
                assert(result.name === "Kenny");
                done();
            });
        });
    });


    it('Increments the weight of record in the database', function(done){
        // Take all the records, and plus 5 to each weights
        MarioChar.updateMany({}, {$inc: {weight: 5}}).then(function(){
            MarioChar.findOne({name: 'Mario'}).then(function(result){
                assert(result.weight === 70);
                done();
            });
        });
    });
});