/*global Backbone, jQuery, _, ENTER_KEY */
var app = app || {};
app.Views = app.Views || {};

(function ($) {
        'use strict';

        app.Views.QuizApp = Backbone.View.extend({

                userCreate: _.template($('#user-template').html()),

                events: {
                        'click #start': 'start',
                },

                initialize: function (container) {
                        window.user = undefined;
                        this.container = container;
                },

                render: function () {
                        this.$el.html(this.userCreate);
                        this.container.html(this.$el);
                        return this;
                },

                start: function() {
                        var userData = {
                                email: $('#email').val(),
                                name: $('#name').val()
                        };

                        window.user = new app.models.User(userData);
                        window.user.fetchByEmail(userData.email, {
                                success: function() {
                                        if (window.user.alreadyAnsweredTheQuiz()) {
                                                app.quizRouter.navigate("result", true);
                                        } else {
                                                app.quizRouter.navigate("question", true);
                                        }
                                },
                                error: function() {
                                        alert("Pauuuu, zico td!");
                                }
                        });
                }
        });
})(jQuery);