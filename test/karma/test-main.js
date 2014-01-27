var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/-spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/public/js',

    paths: {
        'jquery': '../lib/jquery/jquery',
        'underscore': '../lib/underscore/underscore',
        'backbone': '../lib/backbone/backbone'
    },

    shim: {
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
        }
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});