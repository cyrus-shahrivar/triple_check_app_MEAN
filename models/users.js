var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  toDos: Array
});
var User = mongoose.model('User', UserSchema);

module.exports = User;
