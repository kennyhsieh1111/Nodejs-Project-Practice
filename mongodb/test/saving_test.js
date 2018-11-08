const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe test cases
describe("Save records", function(){
    // Create test cases
    it("Save records to database", function(done){
        // Create new instance
        var char = new MarioChar({
            name: "Kenny",
            weight: "70"
        });

        // Asynchrous
        char.save().then(function(){
            // char.isNew true : create locally
            // char.isNew false : create & saved in db
            assert(char.isNew === false);

            // Alarm Mocha the test is completed
            done();
        });
    });
});