const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe test cases
describe('Saving records', function(){

    // Create test cases
    it('Saves a record to the database', function(done){

    const char = new MarioChar({
        name: 'Mario'
    });

    // Asynchrous
    char.save().then(function(){
        // char.isNew true : create locally
        // char.isNew false : create & saved in db
        assert(!char.isNew);

        // Alarm Mocha the test is completed
        done();
    });

  });

});