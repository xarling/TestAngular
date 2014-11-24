(function() {
  'use strict';

  /** @ngInject */
  var HomeController = function($scope, personService) {

    //TODO: verplaats naar de resolve van de route
    personService.getPeople().then(function(data) {
      $scope.people = data;
    });


  };


  angular.module('home', ['person.service']).controller('HomeController', HomeController);

})();
