// Load required packages
var Game = require('../models/game');

var GameStatus = {"WAITING":"WAITING","ENDED":"ENDED","PLAYING":"PLAYING"};

// Create endpoint /api/games for POST
exports.postGames = function(req, res) {
  // Create a new instance of the Game model
  var game = new Game();

  // Set the game properties that came from the POST data
  game.starts = new Date().getTime();
  game.turn = 0;
  game.status = GameStatus.WAITING; //req.body.quantity;
  game.currentPlayer = null;
  game.players = [req.user._id];

  // Save the game and check for errors
  game.save(function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Game added!', data: game });
  });
};

// Create endpoint /api/games for GET
exports.getGames = function(req, res) {
  // Use the Game model to find all game
  Game.find({ userId: req.user._id }, function(err, games) {
    if (err)
      res.send(err);

    res.json(games);
  });
};

// Create endpoint /api/games/:game_id for GET
exports.getGame = function(req, res) {
  // Use the Game model to find a specific game
  Game.find({ userId: req.user._id, _id: req.params.game_id }, function(err, game) {
    if (err)
      res.send(err);

    res.json(game);
  });
};

// Create endpoint /api/games/:game_id for PUT
exports.putGame = function(req, res) {
  // Use the Game model to find a specific game
  Game.update({ userId: req.user._id, _id: req.params.game_id }, { quantity: req.body.quantity }, function(err, num, raw) {
    if (err)
      res.send(err);

    res.json({ message: num + ' updated' });
  });
};

// Create endpoint /api/games/:game_id for DELETE
exports.deleteGame = function(req, res) {
  // Use the Game model to find a specific game and remove it
  Game.remove({ userId: req.user._id, _id: req.params.game_id }, function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Game removed from the locker!' });
  });
};