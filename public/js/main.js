requirejs.config({
    "baseUrl": "/js",
    "paths": {
      "jquery": "../lib/jquery/jquery",
      "underscore": "../lib/underscore/underscore",
      "backbone": "../lib/backbone/backbone",
      "fastclick": "../lib/foundation/js/vendor/fastclick",
      "foundation": "../lib/foundation/js/foundation",
      "backbone.stickit": "../lib/backbone.stickit/backbone.stickit",
      "handlebars": "../lib/handlebars/handlebars",
      "backbone.handlebars": "../lib/backbone.handlebars/dist/backbone.handlebars"
    },
    "shim": {
    	"jquery" : {
    		deps: [''],
    		exports: '$'
    	},
    	"underscore" : {
    		deps: ['jquery'],
    		exports: '_'
    	},
    	"backbone" : {
    		deps: ['underscore', 'jquery'],
    		exports: 'Backbone'
    	},
    	"foundation": {
    		deps: ["fastclick"]
    	},
    	"backbone.stickit": {
    		deps: ["underscore", "backbone"],
    		exports: "Backbone.Stickit"
    	},
    	"handlebars": {
    		exports: "Handlebars"
    	},
    	"backbone.handlebars": {
    		deps: ["backbone", "handlebars"]
    	}
    }
});


require(["app"]);

