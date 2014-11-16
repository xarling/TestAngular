(function () {
  'use strict';

  /** @ngInject */
  angular.module('person.route', ['ngRoute']).config(function ($routeProvider) {

    $routeProvider.when('/person', {
        templateUrl: 'person/person.html',
        controller: 'PersonController'
      });

  });

})();
