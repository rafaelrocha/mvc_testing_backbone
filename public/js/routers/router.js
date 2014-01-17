/*global Backbone */
var app = app || {};

(function () {
  'use strict';

  app.Router = Backbone.Router.extend({
    routes: {
      '': 'index',
      'question': 'question',
      'result': 'result',
    },

    index: function() {
      new app.Views.QuizApp();
    },

    question: function() {
      new app.Views.Question();
    },

    result: function() {
      new app.Views.Result();
    }
  });

  app.quizRouter = new app.Router;
  Backbone.history.start();
})();