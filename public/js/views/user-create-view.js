/*global Backbone, jQuery, _, ENTER_KEY */
var app = app || {};
app.Views = app.Views || {};

(function ($) {
        'use strict';

        // The Application
        // ---------------

        // Our overall **AppView** is the top-level piece of UI.
        app.Views.QuizApp = Backbone.View.extend({

                // Instead of generating a new element, bind to the existing skeleton of
                // the App already present in the HTML.
                el: '#quizmain',

                // Our template for the line of statistics at the bottom of the app.
                userCreate: _.template($('#user-template').html()),

                events: {
                        'click .start': 'start',
                },

                // At initialization we bind to the relevant events on the `Todos`
                // collection, when items are added or changed. Kick things off by
                // loading any preexisting todos that might be saved in *localStorage*.
                initialize: function () {
                        this.render();
                },

                // Re-rendering the App just means refreshing the statistics -- the rest
                // of the app doesn't change.
                render: function () {
                        this.$el.html(this.userCreate);
                },

                start: function() {
                        console.log("start")
                }
        });
})(jQuery);