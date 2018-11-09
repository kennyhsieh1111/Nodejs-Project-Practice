const assert = require("assert");
const mongoose = require("mongoose");
const Singer = require("../models/singer");


// Describe the test
describe("Nesting recors", function(){

    beforeEach(function(done){
        mongoose.connection.collections.singers.drop(function(){
            done();
        });
    });

    // Create test case
    it("Create an author with sub-documents", function(done){
        var tay = new Singer({
            name: "Taylor Swift",
            albums: [
                {title: "Speak now", tracks: 13},
                {title: "Red", tracks: 17}]
        });

        tay.save(function(){
            Singer.findOne({name: "Taylor Swift"}).then(function(result){
                assert(result.albums.length === 2);
                done();
            });
        });
    });

    it("Adds a album to a singer", function(){
        var tay = new Singer({
            name: "Taylor Swift"
        });

        tay.save(function(){
            Singer.findOne({name: "Taylor Swift"}).then(function(record){
                record.albums.push({title: "1989", tracks: 15});
                record.save().then(function(){
                    Singer.findOne({name: "Taylor Swift"}).then(function(result){
                        assert(result.albums.length === 3);
                        done();
                    });
                });
            });
        });
    });
    
});