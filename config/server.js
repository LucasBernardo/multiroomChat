var express = require('express'); //import express module
var consign = require('consign'); //import consign module
var bodyParser = require('body-parser'); //import body-parser module
var expressValidator = require('express-validator'); //import express validator module (2.20.8)

var app = express(); //initializing express object

app.set('view engine', 'ejs'); //setting express view engine
app.set('views', './app/views'); //setting express views

app.use(express.static('./app/public')); //config express static for styles
app.use(bodyParser.urlencoded({extended: true})); //config body-parser

app.use(expressValidator()); //config express validator

consign() //initializing consign (for app autoload)
    .include('app/routes') //including routes to app
    .then('app/models') //including models to app
    .then('app/controllers') //including controllers to app
    .into(app)

module.exports = app; //export obejct app