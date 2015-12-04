var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var ToDos = require('./models/toDos.js');
var bodyParser = require('body-parser');
var app = express();

mongoose.connect('mongodb://localhost/toDoApp', function (err) {
  if(err){
    console.log(err);
  } else {
    console.log('connection successful - server');
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

//post to dos
app.post('/toDos', function (req, res) {
  var toDo = new ToDos(req.body);
  console.log(req.body);
  toDo.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('To Do saved');
      res.send(toDo);
    }
  });
});
