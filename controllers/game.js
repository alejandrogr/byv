// Load required packages
var Game = require('../models/game');

// Create endpoint /api/games for POST
exports.createGame = function(req, res) {
  var game = new Game({players:[req.user._id]});
  
  game.save(function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Game added!', data: game });
  });
};

// Create endpoint /api/me/games for GET
exports.getUserGames = function(req, res) {
  // Use the Game model to find all games
  Game.find({ players: req.user._id }, function(err, games) {
    if (err)
      res.send(err);

    res.json(games);
  });
};

// Create endpoint /api/games/:game_id for GET
exports.getGame = function(req, res) {
  // Use the Game model to find a specific game
  Game.find({ players: req.user._id, _id: req.params.game_id }, function(err, game) {
    if (err)
      res.send(err);

    res.json(game);
  });
};

// Create endpoint /api/games/:game_id for PUT
/*exports.putGame = function(req, res) {
  // Use the Game model to find a specific game
  Game.update({ userId: req.user._id, _id: req.params.game_id }, { quantity: req.body.quantity }, function(err, num, raw) {
    if (err)
      res.send(err);

    res.json({ message: num + ' updated' });
  });
};*/

// Create endpoint /api/games/:game_id for DELETE
/*exports.deleteGame = function(req, res) {
  // Use the Game model to find a specific game and remove it
  Game.remove({ userId: req.user._id, _id: req.params.game_id }, function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Game removed from the locker!' });
  });
};*/