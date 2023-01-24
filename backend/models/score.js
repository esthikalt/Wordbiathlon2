const mongoose = require("mongoose");

const scoreSchema = mongoose.Schema({
  Name: { type: String, required: true},
  CPM: { type: String, required: true},
  Date: { type: Date, required: true}
});

module.exports = mongoose.model('score', scoreSchema);
