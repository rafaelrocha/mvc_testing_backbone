define([
    'jquery',
    'backbone',
    'handlebars',
    'backbone.handlebars',
    'models/question',
    'models/questions',
    'models/option',
    'models/options'
],
function ($, Backbone, Handlebars, BackboneHandlerbars, Question, Questions, Option, Options) {
    'use strict';

    var QuestionView = Backbone.View.extend({
        events: {
            'click #next': "clickNext",
            'click #back': "clickBack",
            'click #finish': "clickFinish",
        },

        initialize: function (container) {
            var question1 = new Question({
                id: 1,
                description: "What are the two biggest cities from Brazil?",
                optionns: new Options([ 
                    new Option({
                        id:1,
                        description: "São Paulo",
                        rightAnswer: true
                    }),
                    new Option({
                        id:2,
                        description: "Salvador",
                        rightAnswer: false
                    }),
                    new Option({
                        id:3,
                        description: "Brasília",
                        rightAnswer: false
                    }),
                    new Option({
                        id:4,
                        description: "Belo Horizonte",
                        rightAnswer: false
                    }),
                    new Option({
                        id:5,
                        description: "Divinópolis",
                        rightAnswer: true
                    })
                ])
            });

            var question2 = new Question({
                id: 2,
                description: "Quais os melhores time do mundo?",
                optionns: new Options([ 
                    new Option({
                        id:6,
                        description: "Atlético MG",
                        rightAnswer: true
                    }),
                    new Option({
                        id:7,
                        description: "Guarani de Divinópolis",
                        rightAnswer: true
                    }),
                    new Option({
                        id:8,
                        description: "Cruzeiro das Maria",
                        rightAnswer: false
                    })
                ])
        });

            this.container = container;
            this.questions = new Questions([question1, question2]);
            this.currentQuestionIndex = 0;
        },

        render: function (options) {
            this.user = options.user;
            this.currentQuestionIndex = options.questionId;

            var question = this.questions.at(this.currentQuestionIndex);

            var template = Handlebars.compile($('#question-template').html());
            this.$el.html(template(question));

            this.container.html(this.$el);
            this.navigateButtonsVisibility();
            this.syncUserInputsWithModel();

            return this;
        },

        clickNext: function() {
            this.syncModelWithUserInputs();
            Backbone.Router.prototype.navigate("question/q" + (this.currentQuestionIndex + 1), true);
        },

        clickBack: function() {
            this.syncModelWithUserInputs();
            Backbone.Router.prototype.navigate("question/q" + (this.currentQuestionIndex - 1), true);
        },

        clickFinish: function() {
            this.syncModelWithUserInputs();
            this.user.set("answers", this.questions);
            this.user.save();
            Backbone.Router.prototype.navigate("result", true);
        },

        navigateButtonsVisibility: function() {
            this.$finish = $('#finish');
            this.$back = $('#back');
            this.$next = $('#next');

            this.$finish.hide();
            this.$next.show();
            this.$back.show();
            
            if (this.currentQuestionIndex === this.questions.length - 1) {
                this.$next.hide();
                this.$finish.show();
            }
            if (this.currentQuestionIndex === 0) {
                this.$back.hide();
            }
            this.delegateEvents();
        },

        syncModelWithUserInputs: function() {
            var that = this;
            var optionsElem = $('.option');
            optionsElem.each(function(index, optionElem) {
                var question = that.questions.at(that.currentQuestionIndex);
                var optionns = question.get("optionns");
                var option = optionns.get($(optionElem).attr('id'));
                
                option.set("answered", $(optionElem).children().is(':checked'));
            })
        },

        syncUserInputsWithModel: function() {
            var question = this.questions.at(this.currentQuestionIndex);
            question.get("optionns").each(function(option) {
                var optionElem = $('#' + option.get("id") + ' input');
                optionElem.prop( "checked", option.get("answered"));
            })
        }
    });

    return QuestionView;
});