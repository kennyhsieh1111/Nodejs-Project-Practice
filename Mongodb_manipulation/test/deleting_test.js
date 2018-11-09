const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe our tests
describe('Deleting records', function(){
    var char;
    // Add a character to the db before each tests
    beforeEach(function(done){
        char = new MarioChar({
            name: 'Kenny'
        });
        char.save().then(function(){
            done();
        });
    });

    // Create tests
    it('Delete one record from database', function(done){
        MarioChar.findOneAndDelete({name: 'Kenny'}).then(function(){
            MarioChar.findOne({name: 'Kenny'}).then(function(result){
                assert(result === null);
                done();
            });
        });
    });
});