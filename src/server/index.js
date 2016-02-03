// base setup
var env = process.env.NODE_ENV || 'dev';
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var compression = require('compression');
var serveStatic = require('serve-static');
var config = require('./config')[env];
var app = express();

var port = process.env.PORT || 8080;

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

// test app
var router = express.Router();

router.get('/entries', function(request, response) {
    response.json({'foo': 'bar'});
});

// register routes
app.use('/api', router);

// start server
app.listen(port);
