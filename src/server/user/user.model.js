var mongoose = require('mongoose');
var config = require('../config');
var utils = require('../utils');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    login: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: false
    },
    role: {
        type: String,
        required: true,
        unique: false,
        default: 'user'
    },
    perms: {
        type: Number,
        required: true,
        unique: false,
        default: 1111111111111111
    }
});

UserSchema.pre('save', function(next) {
    this.password = utils.hash(this.password, config.secret);

    next();
});

module.exports = mongoose.model('User', UserSchema);
