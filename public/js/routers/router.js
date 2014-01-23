define([
  'jquery',
  'backbone',
  'models/user',
  'views/user-view',
  'views/question-view',
  'views/result-view'
],
function ($, Backbone, User, UserView, QuestionView, ResultView) {
  'use strict';

  var routerManager = function() {
    var that = {};

    var quizMainContainer = $("#quizmain");
    var currentView;

    var userModel = new User({});
    var quizView = new QuestionView(quizMainContainer);

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
      userModel = new User({}); //restart user state
      quizView = new QuestionView(quizMainContainer); //restart quizview state  
      
      showView(new UserView({
        model: userModel,
        container: quizMainContainer
      }));
    }

    that.question = function(id) {
       showView(quizView, {
         user: userModel,
         questionId: Number.valueOf()(id)
       });
    }

    that.result = function() {
       showView(new ResultView({
         container: quizMainContainer,
         user: userModel
       }));
    }

    return that;
  }

  return Backbone.Router.extend(routerManager());;
});