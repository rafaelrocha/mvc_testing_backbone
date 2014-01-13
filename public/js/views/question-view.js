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
                        
                },

                initialize: function () {
                        this.render();
                },

                render: function () {
                        this.$el.html(this.questionTemplate);
                }
        });
})(jQuery);