'use strict';

var blogDirectives = angular.module('blogDirectives', []);

blogDirectives.directive('blogMenu',
  function() {
    return {
      /**
       * only match attribute name
       * 'E' - match element name
       * 'C' - match class name
       * 'M' - match comment name
       */
      restrict: 'A',
      templateUrl: 'partials/menu.html',
      link: function (scope, el, attrs) {
        scope.label = attrs.menuTitle;
      }
    }
  });
