var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

  bodyParser = require('body-parser');

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  var routes = require('./api/routes/mlRoutes'); //importing route
  routes(app); //register the route

  app.listen(port);

  app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
  });



  console.log('todo list RESTful API server started on: ' + port);
