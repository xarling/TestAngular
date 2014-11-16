(function () {
  'use strict';

  /** @ngInject */
  angular.module('skills.route', ['ngRoute', 'skills.controller']).config(function ($routeProvider) {
    $routeProvider.when('/skills', {
        templateUrl: 'skills/skills.html',
        controller: 'SkillsController'
      });
  });

})();
