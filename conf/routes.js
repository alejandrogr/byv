var express = require('express');
var router = express.Router();
var gameController = require('../controllers/game');
var userController = require('../controllers/user');

module.exports = function(passport){

	/* Handle Registration POST */
	router.post('/signup', 
		passport.authenticate('signup'),
		function(req, res){
			res.status(200).json(req.user);
		}
	);

	/* Handle Login POST */
	router.post('/login', 
		passport.authenticate('login'), 
		function(req, res){
			res.status(200).json(req.user);
		}
	);

	router.get('/me/games', isAuthenticated, gameController.getUserGames);
	router.post('/games', isAuthenticated, gameController.createGame);

	return router;
}

var isAuthenticated = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler 
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	res.status(401).json({error:'nouser'});
}