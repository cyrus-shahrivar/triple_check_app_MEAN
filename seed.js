var User = require('./models/users.js'),
    mongoose = require('mongoose');

//connect to mongo database
mongoose.connect('mongodb://localhost/toDoApp', function (err) {
  if(err){
    console.log(err);
  } else {
    console.log('connection successful - seed');
  }
});


var arrayOfUsers = [{
    username: "cyrus",
    password: "nope",
    toDos:["eat breakfast", "eat lunch", "eat dinner"]
  },
  {
    username: "courtney",
    password: "nope",
    toDos:["run","eat breakfast", "eat lunch", "eat dinner", "run again"]
  }

];

User.collection.insert(arrayOfUsers, onUsersInsert);
function onUsersInsert(err, docs) {
  if (err) {
      console.log(err);
  } else {
      console.info('users seed was successfully stored.', docs.length);
  }
}
