const mongoose = require("mongoose");

const scoreSchema = mongoose.Schema({
  name: { type: String, required: true},
  cpm: { type: String, required: true},
  title: { type: String, required: true},
  date: { type: Date, required: true}
});

module.exports = mongoose.model('Score', scoreSchema);
