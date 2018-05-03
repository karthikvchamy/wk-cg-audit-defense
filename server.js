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


console.log('CCH AI server is running on: ' + port);
