var app = angular.module('app', []);

app.controller('MainCtrl', function MainCtrl($scope, api_token) {
  this.token = api_token;
});
