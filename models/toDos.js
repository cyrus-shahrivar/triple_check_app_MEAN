var mongoose = require('mongoose');

var ToDosSchema = new mongoose.Schema({
  toDos: Array
});
var ToDos = mongoose.model('ToDos', ToDosSchema);

module.exports = ToDos;
