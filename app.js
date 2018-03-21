var express = require('express');
var app = express();
var db = require('./db');

var postControler = require('./post/postControler');
app.use('/api', postControler);

module.exports = app;
