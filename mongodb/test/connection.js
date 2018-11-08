const mongoose = require('mongoose');

// ES6 Promises
mongoose.Promise = global.Promise;

// Connect to db before tests run (Run Once)
before(function(done){
    // Connect to mongodb (Async)
    mongoose.connect("mongodb://localhost/mongopra");
    mongoose.connection.once('open', function(){
        console.log("Connection has been made...");
        done();
    }).on('error', function(error){
        console.log("Connection Error...")
    });
})


// Drop the collections before each test (Run Everytime)
beforeEach(function(done){
    // Drop the collection
    mongoose.connection.collections.marios.drop(function(){
        done();
    });
});