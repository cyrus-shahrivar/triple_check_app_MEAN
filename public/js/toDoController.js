'use strict';

app.controller("toDoAppCtrl", ["$http","$log", toDoAppCtrl]);

function toDoAppCtrl($http, $log) {
  $log.info("I'm inside the controller");
  var self = this;
  self.title = "Triple Check";
  self.subTitle = "Making You More Efficient, Three Checks At a Time";
  self.allToDos = {};
  self.getToDos;
  getToDos();

  function getToDos() {
    //go to our data service
    $http
      .get('/toDos')
      .then(function (res) {
        self.allToDos = res.data;
        $log.log(self);
      })
      .catch(function (res) {
        $log.error('failure',res);
      })
  }
}
