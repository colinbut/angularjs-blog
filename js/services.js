var blogServices = angular.module('blogServices', ['ngResource']);

blogServices.factory('Login', ['$resource',
  function($resource) {
    return $resource("http://localhost/rs/login", {}, {
      login: {method: 'POST', cache: false, isArray: false}
    });
  }]);

blogServices.factory('BlogList', ['$resource',
  function($resource) {
    return $resource("http://localhost/rs/blogList", {}, {
      get: {method: 'GET', cache: false, isArray: true}
    });
  }
]);

blogServices.factory('BlogPost', ['$resource',
  function($resource) {
    return $resource("http://localhost/rs/blogPost", {}, {
      get: {method: 'GET', cache: false, isArray: false},
      save: {method: 'POST', cache: false, isArray: false},
      update: {method: 'PUT', cache: false, isArray: false},
      delete: {method: 'DELETE', cache: false, isArray: false},
    });
  }]);

blogServices.factory('BlogPostComments', ['$resource',
  function($resource) {
    return $resource("http://localhost/rs/blogPost/comment/:id", {}, {
      save: {method: 'POST', cache: false, isArray: false}
    });
  }]);
