/*global Backbone */
var app = app || {};
app.models = app.models || {};

(function () {
  'use strict';

  app.models.Question = Backbone.Model.extend({
    defaults: {
      description: 'question 1',
      options: new app.collections.Options()
    },

    correctAnswersInPercentage: function() {
    	var options = this.get("options");
    	var quantityOfOptions = options.length;
    	var rightAnswersCount = 0;
    	
    	_.each(options.models, function(option) {
    		if (option.isCorrect()) {
    			rightAnswersCount = rightAnswersCount + 1	
    		}
    	})

    	return  rightAnswersCount / quantityOfOptions;
    }

  });

})();