'use strict';
module.exports = function (app) {
    var todoList = require('../controllers/mlController');

    // Routes

    app.route('/train')
    .post(todoList.train);


    app.route('/assess')
    .post(todoList.assess);
};