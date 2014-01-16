'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema

var OptionSchema = new Schema({
    description: {
        type: String,
        default: '',
        trim: true
    },

    rightAnswer: {
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

mongoose.model('Question', QuestionSchema);





var AnswerSchema = new Schema({
    optionn: {type: Schema.ObjectId, ref: OptionSchema},
    answered: {
    	type: Boolean
    }
});


var UserSchema = new Schema({
    name: {
        type: String,
        default: '',
        trim: true
    },

    email: {
        type: String,
        default: '',
        trim: true
    },

    answers: [{
    	question: {type: Schema.ObjectId, ref: QuestionSchema},
    	answers: [AnswerSchema]
    }]
});

mongoose.model('User', UserSchema);