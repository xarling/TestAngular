(function() {
  'use strict';

  var formGroup = function() {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      template: '<div class="form-group" ng-transclude=""></div>'
    };
  };

  angular.module('ta-screen').directive('formGroup', formGroup);


})();
