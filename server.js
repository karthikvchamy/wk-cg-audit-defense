var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./api/routes/mlRoutes'); //importing route
routes(app); //register the route

app.listen(port);

app.all(function (req, res, next) {
  // // Website you wish to allow to connect
  // res.setHeader('Access-Control-Allow-Origin', '*');
  // res.setHeader('Access-Control-Allow-Headers', '*');
  // // Request methods you wish to allow
  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // next();
  console.log("api hit");
  res.setHeader('Access-Control-Allow-Origin',  '*');
  res.setHeader('Access-Control-Allow-Methods',  'GET,PUT,POST,DELETE,OPTIONS');
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  if  ('OPTIONS'  ===  req.method)  {
    console.log(req);
    res.send(200);
  } else {
    next();
  }
});


console.log('todo list RESTful API server started on: ' + port);
