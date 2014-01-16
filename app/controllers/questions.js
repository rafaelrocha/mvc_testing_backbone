'use strict';

var mongoose = require('mongoose'),
    Question = mongoose.model('Question'),
    _ = require('lodash');

exports.create = function(req, res) {
    var question = new Question(req.body);
    question.save(function(err) {
        if (err) {
            console.log(err);
            res.send(500);
        } else {
            res.send(202);
        }
    });
};


exports.all = function(req, res) {
    Question.find().sort('-created').exec(function(err, questions) {
        if (err) {
            console.log(err);
            res.send(500);
        } else {
            res.jsonp(questions);
        }
    });
};