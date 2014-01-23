requirejs(['jquery', 'backbone', "foundation", "routers/router"], 

function($, Backbone, a, Router) {
  $(document).foundation();
  
  var Router = new Router();
  Backbone.history.start();
});