(function() {
  'use strict';

  var personService = function($resource, config) {

    var person = $resource(config.backendUri);


    return {
      getPeople: getPeople
    };


    function getPeople() {
      return person.query();
    }


  };

  angular.module('person.service', ['ngResource']).factory('personService', personService);

})();
