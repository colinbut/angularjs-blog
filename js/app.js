'use strict';

var blogApp = angular.module('blogApp', [
  'ngRoute',
  'blogControllers'
]);

blogApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'main.html',
      controller: 'BlogController'
    });

    $locationProvider.html5Mode(false).hashPrefix('!');

  }]);
