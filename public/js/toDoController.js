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
  self.deleteToDos = deleteToDos;
  getToDos();

  self.allDone;
  self.addDone = addDone;
  self.getDone;
  self.deleteDone = deleteDone;
  getDone();

  function getDone() {
    //go to our data service
    $log.log("i'm inside getDone");
    $http
      .get('/done')
      .then(function (res) {
        self.allDone = res.data;
        $log.log(res.data);
      })
      .catch(function (res) {
        $log.error('failure',res);
      });
  }

  function getToDos() {
    //go to our data service
    $log.log("i'm inside getToDos");
    $http
      .get('/toDos')
      .then(function (res) {
        self.allToDos = res.data;
        $log.log(res.data);
      })
      .catch(function (res) {
        $log.error('failure',res);
      });
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
      });
    self.newToDo = {};
  }

  function addDone() {
    $log.log(self);
    $http
      .post('/done', self.newDone)
      .then(function (response) {
        getToDos();
      })
      .catch(function (res) {
        $log.error('failure',res);
      });
    self.newDone = {};
  }

  function deleteToDos(aDo) {
    $log.log("inside delete todos");
    $log.log(aDo);
    $http
      .delete('/toDos/'+aDo._id)
      .then(function (response) {
        getToDos();
      })
      .catch(function (res) {
        $log.error('failure',res);
      });
  }

  function deleteDone(aDo) {
    $log.log("inside delete todos");
    $log.log(aDo);
    $http
      .delete('/done/'+aDo._id)
      .then(function (response) {
        getDone();
      })
      .catch(function (res) {
        $log.error('failure',res);
      });
  }

}
