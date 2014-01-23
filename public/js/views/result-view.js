define([
        'jquery',
        'backbone'
        ],
function ($, Backbone) {
        'use strict';

        var ResultView = Backbone.View.extend({

                initialize: function (options) {
                        this.container = options.container;
                        this.user = options.user;
                },

                render: function () {
                        this.answeredQuestions = this.user.get("answers");

                        var resultTemplate = _.template($('#result-template').html(), {"answeredQuestions": this.answeredQuestions.models});
                        this.$el.html(resultTemplate);
                        this.container.html(this.$el);
                        return this;
                },

                start: function() {
                        console.log("start")
                }
        });

        return ResultView;
});
