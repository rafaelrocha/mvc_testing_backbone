define([
    'jquery', 
    'backbone',
    'backbone.stickit'
],
function ($, Backbone) {
        'use strict';

        var UserView = Backbone.View.extend({

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
                        this.$el.html($('#user-template').html());
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
                                                        Backbone.Router.prototype.navigate("result", true);
                                                } else {
                                                        Backbone.Router.prototype.navigate("question/q0", true);
                                                }
                                        },
                                        error: function() {
                                                alert("Pauuuu, zico td!");
                                        }
                                });
                        }
                }
        });

        return UserView;
});