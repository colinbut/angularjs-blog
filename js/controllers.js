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

blogControllers.controller('NewBlogController',
  ['$scope', 'checkCredentials', '$location', '$http', 'getToken',
    function NewBlogController($scope, checkCredentials, $location, $http, getToken) {
      $http.defaults.headers.common['Authorization'] = 'Basic ' + getToken();

      Blog.save({},
        function success(response) {
          console.log("Success:" + JSON.stringify(response));
          $scope.status = response;
        },
        function error(errorResponse) {
          console.log("Error:" + JSON.stringify(errorResponse));
        }
      );
    }
  ]);

blogControllers.controller('LoginController',
  ['$scope', '$location', 'Login', 'setCredentials',
    function LoginController($scope, $location, Login, setCredentials) {
        $scope.submit = function() {
          $scope.sub = true;

          // build post data
          var postData = {
            "username" : $scope.username,
            "password" : $scope.password
          };

          // make backend REST call & attach callback functions
          Login.login({}, postData,
            function success(response) {
              console.log("Success:" + JSON.stringify(response));

              if (response.authenticated) {
                setCredentials($scope.username, $scope.password);
                $location.path('/');
              } else {
                $scope.error = "Login Failed";
              }

            },
            function error(errorResponse) {
              console.log("Error:" + JSON.stringify(errorResponse));
            }
          );
        }
    };
  ]);
