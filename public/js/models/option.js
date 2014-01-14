/*global Backbone */
var app = app || {};
app.models = app.models || {};

(function () {
  'use strict';

  app.models.Option = Backbone.Model.extend({
    defaults: {
      description: 'option 1',
      rightAnswer: false,
      answered: false,
    },

    isCorrect: function() {
    	return this.get("rightAnswer") === this.get("answered");
    }
  });

})();