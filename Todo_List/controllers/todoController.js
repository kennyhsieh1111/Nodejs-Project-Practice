// MVC Controller : passing app.js to this controller
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// Connect to cloud mongoose database : Mlab
require('dotenv').config();
var mlab_user = process.env.MLAB_USER;
var mlab_pwd = process.env.MLAB_PASSWORD;
mongoose.connect("mongodb://" + mlab_user + ":" + mlab_pwd + "@ds155313.mlab.com:55313/todolistproject");

// Create a Schema
var todoSchema = new mongoose.Schema({
    item: String
});

// Create a Model (Uppercase)
var Todo = mongoose.model('Todo', todoSchema);
// var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding class'}];

var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

app.get('/todo', function(req, res){
    // Retrieve data from mongodb and pass to MVC:View
    Todo.find({}, function(err, data){
        if (err) throw err;
        res.render('todo', {todos: data});
    })
});

app.post('/todo', urlencodedParser, function(req, res){
    // Retrieve data from the View and add to mongodb
    var newTodo = Todo(req.body).save(function(err, data){
        if (err) throw err;
        res.json(data);
    });
});

app.delete('/todo/:item', function(req, res){
    // Delete the requested item from mongodb
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
        if (err) throw err;
        res.json(data);
    });
});

};