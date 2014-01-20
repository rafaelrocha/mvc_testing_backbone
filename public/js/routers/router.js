/*global Backbone */
var app = app || {};

(function () {
  'use strict';

  var routerManager = function() {
    var that = {};

    var quizMainContainer = $("#quizmain");
    var currentView;

    var quizView = new app.Views.Question(quizMainContainer);

    that.routes = {
      '': 'index',
      'question/q:id': 'question',
      'result': 'result'
    }

    var showView = function(view, renderParam) {
      if (currentView) {
        currentView.remove();
        currentView.unbind();
      }

      currentView = view;
      currentView.delegateEvents();
      currentView.render(renderParam);
    }
    
    that.index = function() {
      quizView = new app.Views.Question(quizMainContainer); //restart quizview state  
      showView(new app.Views.QuizApp(quizMainContainer));
    }

    that.question = function(id) {
      showView(quizView, Number.valueOf()(id));
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