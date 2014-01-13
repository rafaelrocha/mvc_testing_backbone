/*global Backbone */
var app = app || {};
app.models = app.models || {};

(function () {
  'use strict';

  app.models.Question = Backbone.Model.extend({
    defaults: {
      description: 'question 1',
      options: new app.collections.Options()
    }
  });

})();