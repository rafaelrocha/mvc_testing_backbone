/*global Backbone */
var app = app || {};
app.models = app.models || {};

(function () {
  'use strict';

	app.models.User = Backbone.Model.extend({
		urlRoot: "http://localhost:4000/users",

        initialize: function(data) {
            this.set({
                  name: data.name || '',
                  email: data.email || '',
                  answers: new app.collections.Questions()
            });
        },

        alreadyAnsweredTheQuiz: function() {
        	if (this.get("answers") && this.get("answers").length > 0) {
        		return true;
        	}
        	return false;
        },

        fetchByEmail: function(email, options) {
          options = options || {};
          if (options.url === undefined) {
              options.url = this.urlRoot + "/email/" + email;
          }

          return Backbone.Model.prototype.fetch.call(this, options);
        },

        parse: function(response) {
            if (response) {
              var that = this;

              _.each(response.answers, function(answer) {
                var answerModel = new app.models.Question({description: answer.description});
               
                _.each(answer.optionns, function(option) {
                  answerModel.get("optionns").push(new app.models.Option(option));
                })
               
                that.get("answers").push(answerModel);
             });
          }
          return this.model;
        }
  });

})();