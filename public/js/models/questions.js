/*global Backbone */
var app = app || {};
app.collections = app.collections || {};

(function () {
  'use strict';

  app.collections.Questions = Backbone.Collection.extend({
	  model: app.models.Questions
	});

})();