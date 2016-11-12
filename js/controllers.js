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
blogControllers.controller('BlogViewController', ['$scope', '$routeParams','BlogPost'
  function BlogViewController($scope, $routeParams, BlogPost) {
    var blogId = $routeParams.id;

    BlogPost.get({id: blogId},
      function success(response) {
        console.log("Success:" + JSON.stringify(response));
        $scope.blogEntry = response;
      },
      function error(errorResponse) {
        console.log("Error:" + JSON.stringify(errorResponse));
      }
    );
    
  }]);
