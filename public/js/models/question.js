/*global Backbone */
var app = app || {};
app.models = app.models || {};

(function () {
  'use strict';

  app.models.Question = Backbone.Model.extend({
    initialize: function(data) {
      this.set({
        description: data.description || '',
        optionns: data.optionns || new app.collections.Questions()
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

})();