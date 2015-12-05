var mongoose = require('mongoose');

var DoneSchema = new mongoose.Schema({
  done: String
});
var Done = mongoose.model('Done', DoneSchema);

module.exports = Done;
