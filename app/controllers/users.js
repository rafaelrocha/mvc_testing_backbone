'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    _ = require('lodash');

exports.find = function(req, res) {
    User.findOne({ '_id': req.params.id }, function (err, user) {
        if (err) {
            console.log(err);
            res.send(500);
        } else {
            res.jsonp(user);
        }
    })
};

exports.findByEmail = function(req, res) {
    User.findOne({'email': req.params.email}, function (err, user) {
        if (err) {
            console.log(err);
            res.send(500);
        } else {
            console.log(user);
            res.jsonp(user);
        }
    })
};

exports.create = function(req, res) {
    var user = new User(req.body);
    
    user.save(function(err) {
        if (err) {
            console.log(err);
            res.send(500);
        } else {
            res.send(202);
        }
    });
};

exports.all = function(req, res) {
    User.find()
        .sort('-created')
        .exec(function(err, users) {
            if (err) {
                console.log(err);
                res.send(500);
            } else {
                res.jsonp(users);
            }
    });
};

