(function() {
  'use strict';

  /** @ngInject */
  var PersonController = function($scope, personService, companyService, $location, person) {

    //TODO: verplaats naar de resolve van de route
    companyService.getNewNexusCompanies().then(function(data) {
      $scope.companies = data;
    });

    $scope.person = person;


    $scope.next = function() {
      $location.path('/skills');
    };

  };


  angular.module('person.controller', ['person.service']).controller('PersonController', PersonController);

})();
