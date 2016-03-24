var ToDos = require('./models/toDos.js'),
    Done = require('./models/done.js'),
    Started = require('./models/started.js'),
    InProg = require('./models/inProg.js'),
    mongoose = require('mongoose');

//connect to mongo database
mongoose.connect('mongodb://localhost/toDoApp', function (err) {
  if(err){
    console.log(err);
  } else {
    console.log('connection successful - seed');
  }
});


var toDosSeed = new ToDos(
  {
    toDos:"run"
  }
);

var startedSeed = new Started(
  {
    started:"run"
  }
);

var inProg = new InProg(
  {
    inProg:"run"
  }
);

var doneSeed = new Done(
  {
    done: "walk"
  }
);

toDosSeed.save(function (err, docs) {
  if (err) {
      console.log(err);
  } else {
      console.info('todos seed was successfully stored.', docs.length);
  }
});

startedSeed.save(function (err, docs) {
  if (err) {
      console.log(err);
  } else {
      console.info('started seed was successfully stored.', docs.length);
  }
});

inProg.save(function (err, docs) {
  if (err) {
      console.log(err);
  } else {
      console.info('inProg seed was successfully stored.', docs.length);
  }
});

doneSeed.save(function (err, docs) {
  if (err) {
      console.log(err);
  } else {
      console.info('done seed was successfully stored.', docs.length);
  }
});
