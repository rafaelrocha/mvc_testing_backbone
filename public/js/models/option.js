define([
  'backbone'
],
function (Backbone) {
  'use strict';

  var Option = Backbone.Model.extend({
    defaults: {
      description: 'option 1',
      rightAnswer: false,
      answered: false,
    },

    isCorrect: function() {
    	return this.get("rightAnswer") === this.get("answered");
    }
  });

  return Option;
});