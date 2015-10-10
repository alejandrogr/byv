// Load required packages
var mongoose = require('mongoose');

const WAITING = 'WAITING';
const STARTED = 'STARTED';
const ENDED = 'ENDED';
const CANCELED = 'CANCELED';

// Define our game schema
var GameSchema   = new mongoose.Schema({
  start: Number,
  end: Number,
  create: { type: Number, default: new Date().getTime() },
  turn: Number,
  status: { type: String, default: WAITING },
  currentPlayer: mongoose.Schema.Types.ObjectId,
  players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true }],
});

// Export the Mongoose model
module.exports = mongoose.model('Game', GameSchema);