// Load required packages
var mongoose = require('mongoose');

// Define our beer schema
var GameSchema   = new mongoose.Schema({
  starts: Number,
  turn: Number,
  status: String,
  currentPlayer: mongoose.Schema.Types.ObjectId,
  players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

// Export the Mongoose model
module.exports = mongoose.model('Game', GameSchema);