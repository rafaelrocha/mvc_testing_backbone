'use strict';

module.exports = function(app, passport, auth) {

    //User Routes
    var users = require('../app/controllers/users');
    app.post('/users', users.create);

    //Question Routes
    var questions = require('../app/controllers/questions');
    app.get('/questions', questions.all);
    app.post('/questions', questions.create);

    //Home route
    var index = require('../app/controllers/index');
    app.get('/', index.render);
};
