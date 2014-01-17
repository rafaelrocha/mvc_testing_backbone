/*global Backbone */
var app = app || {};
app.models = app.models || {};

(function () {
  'use strict';

	app.models.User = Backbone.Model.extend({
		urlRoot: "http://localhost:4000/users",

		url: function() {
			return this.urlRoot + "/" + this.id;
		},

        initialize: function(data) {
            this.set({
                  id: data.id || '',
                  name: data.name || '',
                  answers: new app.collections.Questions()
            });
        },

        alreadyAnsweredTheQuiz: function() {
        	if (this.get("answers") && this.get("answers").length > 0) {
        		return true;
        	}
        	return false;
        },

    parse: function(response) {
        console.log("User parseing");
        console.log(response);
        if (response) {
        	var that = this;

        	_.each(response.answers, function(answer) {
        		var answerModel = new app.models.Question({description: answer.description});
        		
        		_.each(answer.optionns, function(option) {
        			answerModel.get("options").push(new app.models.Option(option));
        		})
        		
        		that.get("answers").push(answerModel);
        	});
    	}
    	return this.model;
    }
  });

})();