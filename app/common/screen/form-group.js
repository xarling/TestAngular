(function() {
  'use strict';

  var formGroup = function() {
    return {
      restrict: 'E'
    };
  };

  angular.module('ta-screen').directive('formGroup', formGroup);


})();
