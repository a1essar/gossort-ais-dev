// load external libs
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var compression = require('compression');
var serveStatic = require('serve-static');
var mongoose = require('mongoose');

// initial app
var env = process.env.NODE_ENV || 'dev';
var port = process.env.PORT || 8080;
var app = express();

// base
var config = require('./config')[env];
var utils = require('./utils');

// app components
var login = require('./login/login.router');

// configure DB
try {
    mongoose.connect('mongodb://localhost:27017/ais');
} catch (error) {
    console.log(error.message);
}

// base setup
app.use(compression({
    level: 1
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(cors());
app.use(serveStatic(config.path.serveStatic));

if (env === 'dev') {
    app.use('/bower_components', serveStatic('./bower_components'));
    app.use('/assets', serveStatic('./src/client/assets'));
}

// register routes
app.use('/api/login', login);

// start server
app.listen(port);
