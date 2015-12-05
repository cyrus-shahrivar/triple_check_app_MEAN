'use strict';

app.controller("toDoAppCtrl", ["$http","$log", toDoAppCtrl]);

function toDoAppCtrl($http, $log) {
  $log.log("controller is connected");
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
  self.newDone = {};
  self.addDone = addDone;
  self.getDone;
  self.deleteDone = deleteDone;
  getDone();

  function getDone() {
    //go to our data service
    $http
      .get('/done')
      .then(function (res) {
        self.allDone = res.data;
      })
      .catch(function (res) {
        $log.error('failure',res);
      });
  }

  function getToDos() {
    //go to our data service
    $http
      .get('/toDos')
      .then(function (res) {
        self.allToDos = res.data;
      })
      .catch(function (res) {
        $log.error('failure',res);
      });
  }

  function addToDos() {
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

  function addDone(aDone) {
    $log.log("i'm inside addDone");
    $http
      .post('/done', {done: aDone})
      .then(function (response) {
        getDone();
      })
      .catch(function (res) {
        $log.error('failure',res);
      });
  }

  function deleteToDos(aDo) {
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
