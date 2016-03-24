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

  self.allStarted;
  self.newStarted = {};
  self.addStarted = addStarted;
  self.getStarted;
  self.deleteStarted = deleteStarted;
  getStarted();

  self.allInProg;
  self.newInProg = {};
  self.addInProg = addInProg;
  self.getInProg;
  self.deleteInProg = deleteInProg;
  getInProg();

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

  function getStarted() {
    //go to our data service
    $http
      .get('/started')
      .then(function (res) {
        self.allStarted = res.data;
      })
      .catch(function (res) {
        $log.error('failure',res);
      });
  }

  function getInProg() {
    //go to our data service
    $http
      .get('/inProg')
      .then(function (res) {
        self.allInProg = res.data;
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

  function addStarted(aDo) {
    $http
      .post('/started', {started: aDo})
      .then(function (response) {
        getStarted();
      })
      .catch(function (res) {
        $log.error('failure',res);
      });
    self.newStarted = {};
  }

  function addInProg(aDo) {
    $http
      .post('/inProg', {inProg: aDo})
      .then(function (response) {
        getInProg();
      })
      .catch(function (res) {
        $log.error('failure',res);
      });
    self.newInProg = {};
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

  function deleteStarted(aDo) {
    $log.log(aDo);
    $http
      .delete('/started/'+aDo._id)
      .then(function (response) {
        getStarted();
      })
      .catch(function (res) {
        $log.error('failure',res);
      });
  }
  function deleteInProg(aDo) {
    $log.log(aDo);
    $http
      .delete('/inProg/'+aDo._id)
      .then(function (response) {
        getInProg();
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
