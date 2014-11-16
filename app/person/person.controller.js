(function() {
  'use strict';

  /** @ngInject */
  var PersonController = function($scope, personService) {

    $scope.savePerson = function() {

    };

  };


  angular.module('person.controller', ['personService']).controller('PersonController', PersonController);

})();
