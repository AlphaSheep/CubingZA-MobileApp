'use strict';
angular.module('main')
.filter('trimAddress', function () {
  return function (input) {
    if (input) {
      return input.replace(/^[\s,]+/, '').replace(/[\s,]+$/, '');
    }
  };
});
