/*

 * Copyright (c) 2004-2017 by SurroundApps, Inc.

 * All Rights Reserved

 * SurroundApps Confidential

 */


var express = require("express");
var logger = require('morgan');
var app = express();
app.use(logger('dev'));

// Configuration
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Request-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, x-access-token,deviceNo,deviceType");
  next();
})

app.configure(function () {
  app.set('views', __dirname + '/app');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/app'));
  app.use(app.router);
  app.engine('html', require('ejs').renderFile);
});

app.get('/', function (request, response) {
  response.render('views/layouts/layout.html')
});


var port = process.env.PORT || 5010;
app.listen(port, function () {
  console.log("Listening on " + port);
});
