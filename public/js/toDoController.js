'use strict';

app.controller("toDoAppCtrl", ["$http","$log", toDoAppCtrl]);

function toDoAppCtrl($http, $log) {
  $log.info("I'm inside the controller");
  var self = this;
  self.title = "Triple Check";
  self.subTitle = "Making You More Efficient, Three Checks At a Time";
  self.allToDos;
  self.newToDo = {};
  self.addToDos = addToDos;
  self.getToDos;
  getToDos();

  function getToDos() {
    //go to our data service
    $log.log("i'm inside getToDos")
    $http
      .get('/toDos')
      .then(function (res) {
        self.allToDos = res.data;
        $log.log(res.data);
      })
      .catch(function (res) {
        $log.error('failure',res);
      })
  }

  function addToDos() {
    $log.log(self);
    $http
      .post('/toDos', self.newToDo)
      .then(function (response) {
        getToDos();
      })
      .catch(function (res) {
        $log.error('failure',res);
      })
    self.newToDo = {};
  }
}
