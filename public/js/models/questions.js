define([
  'backbone',
  'models/question'
],
function (Backbone, Question) {
  'use strict';

  var Questions = Backbone.Collection.extend({
	  model: Question
	});

	return Questions;

});