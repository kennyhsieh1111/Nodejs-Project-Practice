var express = require("express");

// Import the controller
var todoController = require('./controllers/todoController');


var app = express();

// Setup the view engine
app.set('view engine', 'ejs');

// Static File
app.use(express.static(__dirname + '/public'));


// Fire the controller
todoController(app);


// Listen to post
app.listen(3000);
console.log("Listening on port 3000");
