(function () {
  'use strict';

  /** @ngInject */
  angular.module('skills.route', ['ngRoute']).config(function ($routeProvider) {
    $routeProvider.when('/skills', {
        templateUrl: 'skills.html',
        controller: 'SkillsControlller'
      });
  });

})();
