var ToDos = require('./models/toDos.js'),
    mongoose = require('mongoose');

//connect to mongo database
mongoose.connect('mongodb://localhost/toDoApp', function (err) {
  if(err){
    console.log(err);
  } else {
    console.log('connection successful - seed');
  }
});


var toDosSeed = [
  {
    toDos:["run","eat breakfast", "eat lunch", "eat dinner", "run again"]
  }
];

ToDos.collection.insert(toDosSeed, onUsersInsert);
function onUsersInsert(err, docs) {
  if (err) {
      console.log(err);
  } else {
      console.info('todos seed was successfully stored.', docs.length);
  }
}
