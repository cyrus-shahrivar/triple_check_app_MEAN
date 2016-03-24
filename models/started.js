var mongoose = require('mongoose');

var StartedSchema = new mongoose.Schema({
  started: String
});
var Started = mongoose.model('Started', StartedSchema);

module.exports = Started;
