'use strict';

var blogControllers = angular.module('blogControllers', []);

// a Controller for managing the blog list
blogControllers.controller('BlogController', ['$scope','BlogList'
  function BlogController($scope, BlogList) {

      BlogList.get({},
        function success(errorResponse) {
          console.log("Success:" + JSON.stringify(response));
          $scope.blogList = response;
        },
        function error(response) {
          console.log("Error:" + JSON.stringify(errorResponse));
        }
      );

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
