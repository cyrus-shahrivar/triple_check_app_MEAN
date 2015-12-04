'use strict';

app.controller("toDoAppCtrl", ["$http","$log", toDoAppCtrl]);

function toDoAppCtrl($http, $log) {
  $log.info("I'm inside the controller");
  var self = this;
  self.title = "Triple Check";
  self.subTitle = "Making You More Efficient, Three Checks At a Time";
  self.allUsers = {};
  self.getUsers;
  getUsers();

  function getUsers() {
    //go to our data service
    $http
      .get('/users')
      .then(function (res) {
        self.allUsers = res.data;
        $log.log(self);
      })
      .catch(function (res) {
        $log.error('failure',res);
      })
  }
}
