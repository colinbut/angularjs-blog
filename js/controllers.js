'use strict';

var blogControllers = angular.module('blogControllers', []);

blogControllers.controller('BlogController', ['$scope',
  function BlogController($scope) {
      // setting some mock data
      $scope.blogList = [
        {
          "_id": 1,
          "date": 1400623623107,
          "introText": "This is a blog post about AngularJS.",
          "blogText": "We will cover how to build a blog and how to add comments to the blog post"
        },
        {
          "_id": 2,
          "date": 1400667723107,
          "introText": "In this blog post we will learn how to build applications based on REST",
          "blogText": "Showing how to build REST web services that contain most of the business logic needed for applications"
        }
      ];

  }]);
