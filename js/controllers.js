'use strict';

var blogControllers = angular.module('blogControllers', []);

// a Controller for managing the blog list
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

// a Controller for managing the display of specific/particular blog posts
blogControllers.controller('BlogViewController', ['$scope', '$routeParams',
  function BlogViewController($scope, $routeParams) {
    var blogId = $routeParams.id;
    var blog1 = {
      "_id1": 1,
      "date":1400623623107,
      "introText": "This is a blog post about AngularJS",
      "blogText": "We will cover how to build a blog and how to add comments to blog posts",
      "comments" : [
        {
          "commentText": "Very goof post. I love it"
        },
        {
          "commentText": "I would like to see a post comparing with React"
        }
      ]
    };
    var blog2 = {
      "_id1": 2,
      "date":1400623623107,
      "introText": "How to write up a backend for AngularJS",
      "blogText": "We will show how to write a backend RESTful web service(s) for AngularJS frontend",
      "comments" : [
        {
          "commentText": "Nice, i like it"
        },
        {
          "commentText": "Does the backend REST web services have to be in Java"
        },
        {
          "commentText": "Can we use NodeJS for the backend REST?"
        }
      ]
    };

    if (blogId === '1') {
      $scope.blogEntry = blog1;
    } else if (blogId === '2') {
      $scope.blogEntry = blog2;
    }

  }]);
