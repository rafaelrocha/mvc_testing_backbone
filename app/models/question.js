'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var QuestionSchema = new Schema({
		description: {
        type: String,
        default: '',
        trim: true
    },

    optionns: [{type: mongoose.Schema.Types.ObjectId, ref: 'Option'}]
});

mongoose.model('Question', QuestionSchema);
