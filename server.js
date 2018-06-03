// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

console.log("Sup Bros");

require('./app/routing/apiroutes.js')(app); 
require('./app/routing/htmlroutes.js')(app);



app.listen(PORT, function() {
    console.log("Broing out on PORT " + PORT);
  });