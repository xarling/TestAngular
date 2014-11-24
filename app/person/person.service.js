(function() {
  'use strict';

  var personService = function(personDataService) {


    function getPeople() {
      return personDataService.getPeople();
    }

    function save(person) {
      return personDataService.save(person);
    }


    return {
      getPeople: getPeople,
      save: save
    };




  };

  angular.module('person.service', ['ngResource']).factory('personService', personService);

})();
