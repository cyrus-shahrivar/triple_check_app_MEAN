'use strict';

app.controller("toDoAppCtrl", ["$http","$log", toDoAppCtrl]);

function toDoAppCtrl($http, $log) {
  $log.info("I'm inside the controller");
  this.title = "Triple Check";
  this.subTitle = "Making You More Efficient, Three Checks At a Time";
}
