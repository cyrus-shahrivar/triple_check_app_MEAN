var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var ToDos = require('./models/toDos.js');
var Done = require('./models/done.js');
var Started = require('./models/started.js');
var InProg = require('./models/inProg.js');
var bodyParser = require('body-parser');
var app = express();

mongoose.connect('mongodb://localhost/toDoApp', function (err) {
  if(err){
    console.log(err);
  } else {
    console.log('connection successful to DATABASE: "toDoApp"');
  }
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('combined'));

// serve static files from the public directory
app.use(  express.static(__dirname+'/public'));


app.listen(3000, function () {
  console.log("you are running on port 3000");
});

// set up a default route
app.get('/', function(req,res){
  res.sendFile(__dirname+'/public/index.html');
});

//test route
app.get('/test', function (req, res) {
  res.send("hi test is working");
});

//get to dos
app.get('/toDos', function(req, res) {
  ToDos.find().exec(function (err, toDos) {
    res.send(toDos);
  });
});

//get started
app.get('/started', function(req, res) {
  Started.find().exec(function (err, started) {
    res.send(started);
  });
});

//get inProg
app.get('/inProg', function(req, res) {
  InProg.find().exec(function (err, inProg) {
    res.send(inProg);
  });
});

//get done
app.get('/done', function(req, res) {
  Done.find().exec(function (err, done) {
    res.send(done);
  });
});


//post to dos
app.post('/toDos', function (req, res) {
  var toDo = new ToDos(req.body);
  toDo.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('To Do saved');
      res.send(toDo);
    }
  });
});

//post started
app.post('/started', function (req, res) {
  var started = new Started(req.body);
  started.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('To Do saved');
      res.send(started);
    }
  });
});

//post inProgs
app.post('/inProg', function (req, res) {
  var inProg = new InProg(req.body);
  inProg.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('To Do saved');
      res.send(inProg);
    }
  });
});

//post done
app.post('/done', function (req, res) {
  var done = new Done(req.body);
  done.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Done saved');
      res.send(done);
    }
  });
});

//delete to dos
app.delete('/toDos/:id', function (req, res) {
  ToDos.remove({_id: req.params.id}).exec(function (err, toDos) {
    res.send(toDos);
  });
});

//delete to dos
app.delete('/started/:id', function (req, res) {
  Started.remove({_id: req.params.id}).exec(function (err, started) {
    res.send(started);
  });
});

//delete to dos
app.delete('/inProg/:id', function (req, res) {
  InProg.remove({_id: req.params.id}).exec(function (err, inProg) {
    res.send(inProg);
  });
});

//delete done
app.delete('/done/:id', function (req, res) {
  Done.remove({_id: req.params.id}).exec(function (err, done) {
    res.send(done);
  });
});
