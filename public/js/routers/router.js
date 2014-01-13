/*global Backbone */
var app = app || {};

(function () {
  'use strict';

  app.Router = Backbone.Router.extend({
      routes: {
          '': 'index',
          'question': 'question'
      },

      index: function(){
          new app.Views.QuizApp();
      },

      question: function(){
          new app.Views.Question();
      }
  });

  new app.Router;
  Backbone.history.start();
})();