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
    })
    .when('/blogPost/:id', {
      templateUrl: 'partials/blogPost.html',
      controller: 'BlogViewController'
    });

    $locationProvider.html5Mode(false).hashPrefix('!');

  }]);
