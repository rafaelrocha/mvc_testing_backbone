/*global Backbone */
var app = app || {};

(function () {
  'use strict';

  var routerManager = function() {
    var that = {};

    var currentView;

    that.routes = {
      '': 'index',
      'question': 'question',
      'result': 'result'
    }

    var showView = function(view) {
      if (currentView) {
        currentView.remove();
        currentView.unbind();
      }

      currentView = view;
      var el = currentView.render().el;
      currentView.delegateEvents();
      $("#quizmain").html(el);
    }
    
    that.index = function() {
      showView(new app.Views.QuizApp());
    }

    that.question = function() {
      showView(new app.Views.Question());
    }

    that.result = function() {
      showView(new app.Views.Result());
    }

    return that;
  }

  app.Router = Backbone.Router.extend(routerManager())

  app.quizRouter = new app.Router;
  Backbone.history.start();
})();