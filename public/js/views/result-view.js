/*global Backbone, jQuery, _, ENTER_KEY */
var app = app || {};
app.Views = app.Views || {};

(function ($) {
        'use strict';

        app.Views.Result = Backbone.View.extend({

                el: '#quizmain',

                resultTemplate: _.template($('#result-template').html()),

                events: {
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
                                                rightAnswer: true,
                                                answered: true
                                        }),
                                        new app.models.Option({
                                                id:7,
                                                description: "opcao 2",
                                                rightAnswer: false,
                                                answered: false

                                        }),
                                        new app.models.Option({
                                                id:8,
                                                description: "opcao 3",
                                                rightAnswer: true,
                                                answered: true
                                        }),
                                        new app.models.Option({
                                                id:9,
                                                description: "opcao 4",
                                                rightAnswer: false,
                                                answered: false
                                        }),
                                        new app.models.Option({
                                                id:10,
                                                description: "opcao 5",
                                                rightAnswer: false,
                                                answered: false
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
                        
                        this.answeredQuestions = window.user.get("answers");
                        this.render();
                },

                render: function () {
                        var resultTemplate = _.template($('#result-template').html(), {"answeredQuestions": this.answeredQuestions.models});
                        this.$el.html(resultTemplate);
                },

                start: function() {
                        console.log("start")
                }
        });
})(jQuery);
