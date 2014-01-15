'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OptionSchema = new Schema({
    _question: {type: Number, ref: 'Question'},

    description: {
        type: String,
        default: '',
        trim: true
    },

    rightAnswer: {
    	type: Boolean
    }
});

/**
 * Validations
 */
OptionSchema.path('description').validate(function(description) {
    return description.length;
}, 'Description cannot be blank');

mongoose.model('Option', OptionSchema);
