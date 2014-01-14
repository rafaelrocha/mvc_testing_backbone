/*global Backbone, jQuery, _, ENTER_KEY */
var app = app || {};
app.Views = app.Views || {};

(function ($) {
        'use strict';

        app.Views.Question = Backbone.View.extend({

                el: '#quizmain',

                events: {
                        'click #next': "clickNext",
                        'click #back': "clickBack",
                        'click #finish': "clickFinish",
                },

                initialize: function () {
                        var question1 = new app.models.Question({
                                id: 1,
                                description: "Qual a capital do Brasil?",
                                options: new app.collections.Options([ 
                                        new app.models.Option({
                                                id:1,
                                                description: "opcao 1",
                                                rightAnswer: true
                                        }),
                                        new app.models.Option({
                                                id:2,
                                                description: "opcao 2",
                                                rightAnswer: false
                                        }),
                                        new app.models.Option({
                                                id:3,
                                                description: "opcao 3",
                                                rightAnswer: true
                                        }),
                                        new app.models.Option({
                                                id:4,
                                                description: "opcao 4",
                                                rightAnswer: false
                                        }),
                                        new app.models.Option({
                                                id:5,
                                                description: "opcao 5",
                                                rightAnswer: false
                                        })
                                ])
                        });

                        var question2 = new app.models.Question({
                                id: 2,
                                description: "Qual a capital do US?",
                                options: new app.collections.Options([ 
                                        new app.models.Option({
                                                id:6,
                                                description: "opcao 1",
                                                rightAnswer: true
                                        }),
                                        new app.models.Option({
                                                id:7,
                                                description: "opcao 2",
                                                rightAnswer: false
                                        }),
                                        new app.models.Option({
                                                id:8,
                                                description: "opcao 3",
                                                rightAnswer: true
                                        }),
                                        new app.models.Option({
                                                id:9,
                                                description: "opcao 4",
                                                rightAnswer: false
                                        }),
                                        new app.models.Option({
                                                id:10,
                                                description: "opcao 5",
                                                rightAnswer: false
                                        })
                                ])
                        });
                        
                        var question3 = new app.models.Question({
                                id: 3,
                                description: "Qual a capital do Canada?",
                                options: new app.collections.Options([ 
                                        new app.models.Option({
                                                id:11,
                                                description: "opcao 1",
                                                rightAnswer: true
                                        }),
                                        new app.models.Option({
                                                id:12,
                                                description: "opcao 2",
                                                rightAnswer: false
                                        }),
                                        new app.models.Option({
                                                id:13,
                                                description: "opcao 3",
                                                rightAnswer: true
                                        }),
                                        new app.models.Option({
                                                id:14,
                                                description: "opcao 4",
                                                rightAnswer: false
                                        }),
                                        new app.models.Option({
                                                id:15,
                                                description: "opcao 5",
                                                rightAnswer: false
                                        })
                                ])
                        });

                        this.questions = new app.collections.Questions([question1, question2, question3]);
                        this.currentQuestionIndex = 0

                        this.render();
                },

                render: function () {
                        var data = this.questions.at(this.currentQuestionIndex).toJSON();
                        data.currentQuestionIndex = this.currentQuestionIndex + 1

                        var template = _.template($('#question-template').html(), data);
                        this.$el.html(template);

                        this.navigateButtonsVisibility();
                },

                clickNext: function() {
                        this.updateOptionsWithUserAnswers();
                        this.currentQuestionIndex = this.currentQuestionIndex + 1;
                        this.render();
                },

                clickBack: function() {
                        this.updateOptionsWithUserAnswers();
                        this.currentQuestionIndex = this.currentQuestionIndex - 1;
                        this.render();
                },

                clickFinish: function() {
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
                },

                updateOptionsWithUserAnswers: function() {
                    var that = this;
                    var optionsElem = $('.option');
                    optionsElem.each(function(index, optionElem) {
                        var question = that.questions.at(that.currentQuestionIndex);
                        var options = question.get("options");
                        var option = options.get($(optionElem).attr('id'));
                        
                        option.set("answered", $(optionElem).children().is(':checked'));
                    })
                }
                //$('.option').children('input').attr('checked', true);
        });
})(jQuery);