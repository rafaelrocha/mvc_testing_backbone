/*global Backbone */
var app = app || {};
app.collections = app.collections || {};

(function () {
  'use strict';

  app.collections.Options = Backbone.Collection.extend({
	  model: app.models.Option
	});

})();