/*global Backbone, jQuery, _, ENTER_KEY */
var app = app || {};
app.Views = app.Views || {};

(function ($) {
        'use strict';

        app.Views.QuizApp = Backbone.View.extend({

                el: '#quizmain',

                userCreate: _.template($('#user-template').html()),

                events: {
                        'click #start': 'start',
                },

                initialize: function () {
                        this.render();
                },

                render: function () {
                        this.$el.html(this.userCreate);
                },

                start: function() {
                        var userData = {
                                id: $('#email').val(),
                                name: $('#name').val()
                        };

                        var user = new app.models.User(userData);
                        user.fetch({
                                success: function() {
                                        if (user.alreadyAnsweredTheQuiz()) {
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