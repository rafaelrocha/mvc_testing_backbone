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

		defaults: {
			id: '',
      name: '',
      answers: new app.collections.Questions()
    },


    alreadyAnsweredTheQuiz: function() {
    	if (this.get("answers")) {
    		return true;
    	}
    	return false;
    },

    parse: function(response) {
    	var that = this;
        console.log("parse");
    	_.each(response.answers, function(answer) {
            console.log("answer");
    		var answerModel = new app.models.Question({description: answer.description});
    		
    		_.each(answer.optionns, function(option) {
                console.log("options");
    			answerModel.get("options").push(new app.models.Option(option));
    		})
    		
    		that.get("answers").push(answerModel);
    	});
    	
    	return this.model;
    }
  });

})();