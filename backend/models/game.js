const mongoose = require("mongoose");

const gameSchema = mongoose.Schema({
  email: { type: String, required: true},
  password: { type: String, required: true }
});



module.exports = mongoose.model('Game', gameSchema);
