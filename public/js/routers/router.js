/*global Backbone */
var app = app || {};

(function () {
  'use strict';

  var routerManager = function() {
    var that = {};

    var quizMainContainer = $("#quizmain");
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
      currentView.delegateEvents();
      currentView.render();
      
    }
    
    that.index = function() {
      showView(new app.Views.QuizApp(quizMainContainer));
    }

    that.question = function() {
      showView(new app.Views.Question(quizMainContainer));
    }

    that.result = function() {
      showView(new app.Views.Result(quizMainContainer));
    }

    return that;
  }

  app.Router = Backbone.Router.extend(routerManager())

  app.quizRouter = new app.Router;
  Backbone.history.start();
})();