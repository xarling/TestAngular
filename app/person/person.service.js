(function() {
  'use strict';

  var personService = function($resource, config) {

    var person = $resource(config.backendUri);

    function getPeople() {
      return person.query();
    }


    return {
      getPeople: getPeople
    };




  };

  angular.module('person.service', ['ngResource']).factory('personService', personService);

})();
