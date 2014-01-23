define([
	'backbone',
	'models/option'
],
function (Backbone, Option) {
  'use strict';

  var Options = Backbone.Collection.extend({
	  model: Option
	});

	return Options;  
});