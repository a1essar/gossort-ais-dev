var crypto = require('crypto');

var utils = {};

utils.hash = function(password, secret) {
    return crypto.createHmac('sha1', secret).update(password).digest('base64')
};

module.exports = utils;
