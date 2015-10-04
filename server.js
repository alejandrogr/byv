// Load required packages
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var gameController = require('./controllers/game');
var userController = require('./controllers/user');
var authController = require('./controllers/auth');

// Connect to the gamelocker MongoDB
mongoose.connect('mongodb://localhost:27017/thebuilder');

// Create our Express application
var app = express();

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
  extended: true
}));

// Use the passport package in our application
app.use(passport.initialize());

// Create our Express router
var router = express.Router();

// Create endpoint handlers for /games
router.route('/games')
  .post(authController.isAuthenticated, gameController.postGames)
  .get(authController.isAuthenticated, gameController.getGames);

// Create endpoint handlers for /games/:game_id
router.route('/games/:game_id')
  .get(authController.isAuthenticated, gameController.getGame)
  .put(authController.isAuthenticated, gameController.putGame)
  .delete(authController.isAuthenticated, gameController.deleteGame);

// Create endpoint handlers for /users
router.route('/users')
  .post(userController.postUsers)
  .get(authController.isAuthenticated, userController.getUsers);

// Register all our routes with /api
app.use('/api', router);

// Start the server
app.listen(3000);