var express = require('express');
var router = express.Router();

var config = require('../config');
var utils = require('../utils');

var User = require('../user/user.model.js');

// todo: add session
router.post('/', function(request, response) {
    if (!request.body.login) {
        response.json({'error': {'message': 'ошибка'}});
        return false;
    }

    if (!request.body.password) {
        response.json({'error': {'message': 'ошибка'}});
        return false;
    }

    User.findOne({ login : request.body.login}, function(error, data) {
        if (error) {
            console.log(error.message);
        }

        if (data.password === utils.hash(request.body.password, config.secret)) {
            response.json({'success': {'message': 'авторизация прошла успешно'}});
        } else {
            response.json({'error': {'message': 'неправильный пароль'}});
        }

        return true;
    });
});

module.exports = router;

/*
 var User = require('./user/user.model.js');
 var user = new User();
 user.login = 'foo';
 user.password = 'bar';

 user.save(function(error) {
 if (error) {
 console.log(error);
 }
 });

 User.findOne({ login : 'foo'}, function(error, data) {
 if (error) {
 console.log(error);
 }

 console.log(data.password === utils.hash('bar', config.secret));
 });
 */
