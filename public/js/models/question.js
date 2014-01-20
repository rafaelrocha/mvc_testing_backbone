/*global Backbone */
var app = app || {};
app.models = app.models || {};

(function () {
  'use strict';

  app.models.Question = Backbone.Model.extend({
    initialize: function(data) {
      this.set({
        description: data.description || '',
        options: data.options || new app.collections.Questions()
      });
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