/*global Backbone, jQuery, _, ENTER_KEY */
var app = app || {};
app.Views = app.Views || {};

(function ($) {
        'use strict';

        app.Views.User = Backbone.View.extend({

                userFormTemplate: _.template($('#user-template').html()),

                events: {
                        'click #start': 'start',
                },

                bindings: {
                        '#email': 'email',
                        '#name': 'name',
                        '#nameInvalid': {
                                observe: 'nameInvalid',
                                visible: function() { 
                                  return !this.model.isNameValid();
                                },
                                updateView: true
                        },
                        '#emailInvalid': {
                                observe: 'emailInvalid',
                                visible: function() { 
                                  return !this.model.isEmailValid();
                                },
                                updateView: true
                        }
                        
                },

                initialize: function (options) {
                        this.container = options.container;
                },

                render: function () {
                        this.$el.html(this.userFormTemplate);
                        this.container.html(this.$el);

                        this.stickit();
                        return this;
                },

                start: function() {
                        var that = this;
                        if (that.model.isValid()) {
                                that.model.fetchByEmail(that.model.get("email"), {
                                        success: function() {
                                                if (that.model.alreadyAnsweredTheQuiz()) {
                                                        app.quizRouter.navigate("result", true);
                                                } else {
                                                        app.quizRouter.navigate("question/q0", true);
                                                }
                                        },
                                        error: function() {
                                                alert("Pauuuu, zico td!");
                                        }
                                });
                        }
                }
        });
})(jQuery);