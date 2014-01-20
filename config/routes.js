'use strict';

module.exports = function(app, passport, auth) {

    //User Routes
    var users = require('../app/controllers/users');
    app.get('/users?filters', users.findByEmail);
    app.get('/users/:id', users.find);
    app.get('/users', users.all);
    app.post('/users', users.create);

    //Home route
    var index = require('../app/controllers/index');
    app.get('/', index.render);
};
