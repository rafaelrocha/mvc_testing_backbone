define([
  'backbone',
  'models/options'
],
function (Backbone, Options) {
  'use strict';

  var Question = Backbone.Model.extend({
    initialize: function(data) {
      this.set({
        description: data.description || '',
        optionns: data.optionns || new Options()
      });
    },

    correctAnswersInPercentage: function() {
    	var optionns = this.get("optionns");
    	var quantityOfOptions = optionns.length;
    	var rightAnswersCount = 0;
    	
    	_.each(optionns.models, function(option) {
    		if (option.isCorrect()) {
    			rightAnswersCount = rightAnswersCount + 1	
    		}
    	})

    	return  rightAnswersCount / quantityOfOptions;
    }

  });

  return Question;

});