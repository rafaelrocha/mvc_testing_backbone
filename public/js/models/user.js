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

            this.on('change:name', this.validateName, this);
            this.on('change:email', this.validateEmail, this);
        },

        alreadyAnsweredTheQuiz: function() {
        	if (this.get("answers") && this.get("answers").length > 0) {
        		return true;
        	}
        	return false;
        },

        validateName: function() {
          if (!this.get("name")) {
            this.set("nameInvalid", "Please fill out your name.");
          } else {
            this.set("nameInvalid", "");
          }
        },

        isNameValid: function() { 
          return this.get("nameInvalid") != undefined && this.get("nameInvalid").length == 0;
        },

        isValid: function() {
          //improve these validation methods
          this.validateName();
          this.validateEmail();
          return this.isEmailValid() && this.isNameValid();
        },

        validateEmail: function() {
          if (!this.get("email")) {
            this.set("emailInvalid", "Please fill out your email.");
          } else {
            var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
            if (String(this.get("email")).search (filter) == -1) {
              this.set("emailInvalid", "Invalid email.");
            } else {
              this.set("emailInvalid", "");
            }
          }
        },

        isEmailValid: function() {
          return this.get("emailInvalid") != undefined && this.get("emailInvalid").length == 0;
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