/*global Backbone, jQuery, _, ENTER_KEY */
var app = app || {};
app.Views = app.Views || {};

(function ($) {
        'use strict';

        // The Application
        // ---------------

        // Our overall **AppView** is the top-level piece of UI.
        app.Views.Question = Backbone.View.extend({

                el: '#quizmain',

                questionTemplate: _.template($('#question-template').html()),

                events: {
                        click: "next"
                },

                initialize: function () {
                        var question1 = new app.models.Question({
                                id: 1,
                                description: "Qual a capital do Brasil?",
                                options: new app.collections.Options([ 
                                        new app.models.Option({
                                                description: "opcao 1",
                                                isCorrect: true
                                        }),
                                        new app.models.Option({
                                                description: "opcao 2",
                                                isCorrect: false
                                        }),
                                        new app.models.Option({
                                                description: "opcao 3",
                                                isCorrect: true
                                        }),
                                        new app.models.Option({
                                                description: "opcao 4",
                                                isCorrect: false
                                        }),
                                        new app.models.Option({
                                                description: "opcao 5",
                                                isCorrect: false
                                        })
                                ])
                        });

                        var question2 = new app.models.Question({
                                id: 2,
                                description: "Qual a capital do US?",
                                options: new app.collections.Options([ 
                                        new app.models.Option({
                                                description: "opcao 1",
                                                isCorrect: true
                                        }),
                                        new app.models.Option({
                                                description: "opcao 2",
                                                isCorrect: false
                                        }),
                                        new app.models.Option({
                                                description: "opcao 3",
                                                isCorrect: true
                                        }),
                                        new app.models.Option({
                                                description: "opcao 4",
                                                isCorrect: false
                                        }),
                                        new app.models.Option({
                                                description: "opcao 5",
                                                isCorrect: false
                                        })
                                ])
                        });

                        this.questions = new app.collections.Questions([question1, question2]);
                        this.currentQuestionIndex = 0
                        this.render();
                },

                render: function () {
                        var data = this.questions.at(this.currentQuestionIndex).toJSON();
                        data.currentQuestionIndex = this.currentQuestionIndex + 1

                        var template = _.template($('#question-template').html(), data);
                        this.$el.html(template);
                },

                next: function() {
                        this.currentQuestionIndex = this.currentQuestionIndex + 1;
                        this.render();
                }
        });
})(jQuery);