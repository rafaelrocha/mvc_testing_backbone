/*global Backbone, jQuery, _, ENTER_KEY */
var app = app || {};
app.Views = app.Views || {};

(function ($) {
        'use strict';

        app.Views.Question = Backbone.View.extend({

                events: {
                        'click #next': "clickNext",
                        'click #back': "clickBack",
                        'click #finish': "clickFinish",
                },

                initialize: function (container) {
                        var question1 = new app.models.Question({
                                id: 1,
                                description: "What are the two biggest cities from Brazil?",
                                optionns: new app.collections.Options([ 
                                        new app.models.Option({
                                                id:1,
                                                description: "São Paulo",
                                                rightAnswer: true
                                        }),
                                        new app.models.Option({
                                                id:2,
                                                description: "Salvador",
                                                rightAnswer: false
                                        }),
                                        new app.models.Option({
                                                id:3,
                                                description: "Brasília",
                                                rightAnswer: false
                                        }),
                                        new app.models.Option({
                                                id:4,
                                                description: "Belo Horizonte",
                                                rightAnswer: false
                                        }),
                                        new app.models.Option({
                                                id:5,
                                                description: "Divinópolis",
                                                rightAnswer: true
                                        })
                                ])
                        });

                        var question2 = new app.models.Question({
                                id: 2,
                                description: "Quais os melhores time do mundo?",
                                optionns: new app.collections.Options([ 
                                        new app.models.Option({
                                                id:6,
                                                description: "Atlético MG",
                                                rightAnswer: true
                                        }),
                                        new app.models.Option({
                                                id:7,
                                                description: "Guarani de Divinópolis",
                                                rightAnswer: true
                                        }),
                                        new app.models.Option({
                                                id:8,
                                                description: "Cruzeiro das Maria",
                                                rightAnswer: false
                                        })
                                ])
                        });

                        this.container = container;
                        this.questions = new app.collections.Questions([question1, question2]);
                        this.currentQuestionIndex = 0;
                },

                render: function (options) {
                        this.user = options.user;
                        this.currentQuestionIndex = options.questionId;

                        var data = this.questions.at(this.currentQuestionIndex).toJSON();
                        data.currentQuestionIndex = this.currentQuestionIndex + 1

                        var template = _.template($('#question-template').html(), data);
                        this.$el.html(template);

                        this.container.html(this.$el);
                        this.navigateButtonsVisibility();
                        this.syncUserInputsWithModel();

                        return this;
                },

                clickNext: function() {
                    this.syncModelWithUserInputs();
                    app.quizRouter.navigate("question/q" + (this.currentQuestionIndex + 1), true);
                },

                clickBack: function() {
                    this.syncModelWithUserInputs();
                    app.quizRouter.navigate("question/q" + (this.currentQuestionIndex - 1), true);
                },

                clickFinish: function() {
                    this.syncModelWithUserInputs();
                    this.user.set("answers", this.questions);
                    this.user.save();
                    app.quizRouter.navigate("result", true);
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
})(jQuery);