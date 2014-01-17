/*global Backbone, jQuery, _, ENTER_KEY */
var app = app || {};
app.Views = app.Views || {};

(function ($) {
        'use strict';

        app.Views.Result = Backbone.View.extend({

                resultTemplate: _.template($('#result-template').html()),

                events: {
                },

                initialize: function () {                        
                },

                render: function () {
                        this.answeredQuestions = window.user.get("answers");

                        var resultTemplate = _.template($('#result-template').html(), {"answeredQuestions": this.answeredQuestions.models});
                        this.$el.html(resultTemplate);
                        return this;
                },

                start: function() {
                        console.log("start")
                }
        });
})(jQuery);
