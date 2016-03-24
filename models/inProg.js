var mongoose = require('mongoose');

var InProgSchema = new mongoose.Schema({
  inProg: String
});
var InProg = mongoose.model('InProg', InProgSchema);

module.exports = InProg;
