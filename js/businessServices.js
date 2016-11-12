var blogBusinessServices = angular.module('blogBusinessServices', ['ngResource']);

blogBusinessServices.factory('setCredentials', ['$cookies',
  function($cookies) {
    return function(username, password) {
      var token = username.concat(":", password);
      $cookies.blogCredentials = token;
      $cookies.blogUsername = username;
    };
  }]);

blogBusinessServices.factory('checkCredentials', ['$cookies',
  function($cookies) {
    return function() {
      var returnVal = false;
      var blogCredentials = $cookies.blogCredentials;

      if (blogCredentials !== undefined && blogCredentials !== "") {
        returnVal = true;
      }

      return returnVal;
    };
  }]);

blogBusinessServices.factory('deleteCredentials', ['$cookies',
  function($cookies) {
    return function() {
      $cookies.blogCredentials = "";
      $cookies.blogUsername = "";
    };
  }]);

blogBusinessServices.factory('getToken', ['$cookies',
  function($cookies) {
    return function() {
      var returnVal = "";
      var blogCredentials = $cookies.blogCredentials;

      if (blogCredentials !== undefined && blogCredentials !== "") {
        returnVal = btoa(blogCredentials);
      }

      return returnVal;
    }
  }]);

blogBusinessServices.factory('getUsername', ['$cookies',
  function($cookies) {
    return function() {
      var returnVal = "";
      var blogUsername = $cookies.blogUsername;

      if (blogUsername !== undefined && blogUsername !== "") {
        returnVal = "";
      }

      return returnVal;
    };
  }]);
