'use strict';

var blogApp = angular.module('blogApp', [
  'ngRoute',
  'blogControllers',
  'blogServices',
  'blogBusinessServices',
  'blogDirectives'
]);

// list of routes configuration
blogApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'partials/main.html',
      controller: 'BlogController'
    })
    .when('/blogPost/:id', {
      templateUrl: 'partials/blogPost.html',
      controller: 'BlogViewController'
    })
    .when('/newBlogPost', {
      templateUrl: 'partials/newPost.html',
      controller: 'NewBlogController'
    })
    .when('/about', {
      templateUrl: 'partials/about.html',
      controller: 'AboutBlogController'
    })
    .when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'LoginController'
    })
    .when('/logout', {
      templateUrl: 'partials/login.html',
      controller: 'LogoutController'
    });

    $locationProvider.html5Mode(false).hashPrefix('!');

  }]);
