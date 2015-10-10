// Load required packages
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var conf = require('./conf/conf.local');
var initPassport = require('./passport/init');

// Connect to the gamelocker MongoDB
mongoose.connect(conf.url);

// Create our Express application
var app = express();

app.use(bodyParser.json());
// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());

// Use the passport package in our application
app.use(expressSession({secret: 'thebuilderSecret_2910471827'}));
app.use(passport.initialize());
app.use(passport.session());

initPassport(passport);

var routes = require('./conf/routes')(passport);
app.use('/api', routes);

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        console.log('error', {
            message: err.message,
            error: err
        });
        res.json(err);
    });
}

// Start the server
app.listen(3000);