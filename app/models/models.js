'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema

var OptionSchema = new Schema({
		_id: Number,

    description: {
        type: String,
        default: '',
        trim: true
    },

    rightAnswer: {
    	type: Boolean
    },

    answered: {
    	type: Boolean
    }
});

var QuestionSchema = new Schema({
		description: {
        type: String,
        default: '',
        trim: true
    },

    optionns: [OptionSchema]
});

var UserSchema = new Schema({
    email: {
        type: String,
        trim: true
    },
    name: {
        type: String,
        default: '',
        trim: true
    },

    answers: [QuestionSchema]
});

mongoose.model('User', UserSchema);