/**
 * Created by AmyDuan on 16/08/16.
 */
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodeauth');

var db = mongoose.connection;

var UserSchema = mongoose.Schema({
    username: {
        type: String,
        index: true
    },

    password: {
        type: String
    },

    email: {
        type: String
    },

    name: {
        type: String
    }
});

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function (newUser, callback) {
    newUser.save(callback);
};

module.exports.getUserByUsername = function (username, callback) {
    var query = {username: username};
    User.findOne(query, callback);
};

module.exports.getUserById = function (id, callback) { 
    User.findById(id, callback);
};

module.exports.comparePassword = function (candidatePassword, hash, callback) {
    callback(null, candidatePassword === hash);
};