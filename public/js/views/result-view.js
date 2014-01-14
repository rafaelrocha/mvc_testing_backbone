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
                        this.render();
                },

                render: function () {
                        this.$el.html(this.resultTemplate);
                },

                start: function() {
                        console.log("start")
                }
        });
})(jQuery);