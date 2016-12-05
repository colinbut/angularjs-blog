'use strict';

var blogControllers = angular.module('blogControllers', []);

// a Controller for managing the blog list
blogControllers.controller('BlogController', ['$scope','BlogList', '$location', 'checkCredentials',
  function BlogController($scope, BlogList, $location, checkCredentials) {

      // if not logged in then redirect to login page
      if (!checkCredentials()) {
        $location.path('/login');
      }

      $scope.brandColor = "color: white;";
      $scope.blogList = [];

      BlogList.get({},
        function success(response) {
          console.log("Success:" + JSON.stringify(response));
          $scope.blogList = response;
        },
        function error(errorResponse) {
          console.log("Error:" + JSON.stringify(errorResponse));
        }
      );

  }]);

// a Controller for managing the display of specific/particular blog posts
blogControllers.controller('BlogViewController', ['$scope', '$routeParams','BlogPost',
'BlogPostComments', '$location', 'checkCredentials', '$http', 'getToken', '$route',
  function BlogViewController($scope, $routeParams, BlogPost, BlogPostComments,
    $location, checkCredentials, $http, getToken, $route) {

    // if not logged in then redirect to login page
    if (!checkCredentials()) {
      $location.path('/login');
    }

    var blogId = $routeParams.id;
    $scope.blg = 1;

    BlogPost.get({id: blogId},
      function success(response) {
        console.log("Success:" + JSON.stringify(response));
        $scope.blogEntry = response;
        $scope.blogId = response._id;
      },
      function error(errorResponse) {
        console.log("Error:" + JSON.stringify(errorResponse));
      }
    );

    $scope.submit = function() {
      $scope.sub = true;
      $http.defaults.headers.common['Authorization'] = 'Basic' + getToken();
      var postData = {
        "commentText": $scope.commentText,
        "blog": $scope.blogId
      };

      // call REST backend service to save a new BlogPostComment
      BlogPostComments.save({}, postData,
        function success(response) {
          console.log("Success:" + JSON.stringify(response));
          // redirect back to current blog page & reload
          $location.path('blogPost/' + $scope.blogId);
          $route.reload();
        },
        function error(errorResponse) {
          console.log("Error:" + JSON.stringify(errorResponse));
        });
    };

  }]);

blogControllers.controller('NewBlogController',
  ['$scope', 'BlogPost', 'checkCredentials', '$location', '$http', 'getToken',
    function NewBlogController($scope, BlogPost, checkCredentials, $location, $http, getToken) {

      if(!checkCredentials()) {
        $location.path('/login');
      }

      $scope.languageList = [
        {
          "id": 1,
          "name": "English"
        },
        {
          "id": 2,
          "name": "Spanish"
        }
      ];

      $scope.languageId = 1;
      $scope.newActiveClass = "active";
      $scope.submit = function() {
        $scope.sub = true;
        $http.defaults.headers.common['Authorization'] = 'Basic ' + getToken();
        var postData = {
          "introText": $scope.introText,
          "blogText": $scope.blogText,
          "languageId": $scope.languageId
        };
      }

      Blog.save({}, postData,
        function success(response) {
          console.log("Success:" + JSON.stringify(response));
          $scope.status = response;
          $location.path('/');
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

blogControllers.controller('LogoutController', ['$location', 'deleteCredentials',
  function LogoutController($location, deleteCredentials) {
    deleteCredentials();
    $location.path('/login');
  }]);

blogControllers.controller('AboutBlogController', ['$scope', '$location', 'checkCredentials',
  function AboutBlogController($scope, $location, checkCredentials) {
    if (!checkCredentials()) {
      $location.path('/login');
    }
    $scope.aboutActiveClass = "active";
    }]);
