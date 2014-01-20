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

                initialize: function () {
                        window.user = undefined;
                },

                render: function () {
                        this.$el.html(this.userCreate);
                        return this;
                },

                start: function() {
                        console.log("Start bind" + this.cid);

                        var userData = {
                                email: $('#email').val(),
                                name: $('#name').val()
                        };

                        window.user = new app.models.User(userData);
                        user.fetch({
                                data: {email: userData.email}
                                ,success: function() {
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