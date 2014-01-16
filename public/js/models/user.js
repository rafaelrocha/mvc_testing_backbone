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
      name: ''
    },

    alreadyAnsweredTheQuiz: function() {
    	console.log(this.get("answers"));
    	if (this.get("answers")) {
    		return true;
    	}
    	return false;
    }

  });

})();