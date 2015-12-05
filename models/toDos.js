var mongoose = require('mongoose');

var ToDosSchema = new mongoose.Schema({
  toDos: String,
  done: String
});
var ToDos = mongoose.model('ToDos', ToDosSchema);

module.exports = ToDos;
