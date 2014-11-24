(function() {
	'use strict';

  var personDataService = function($q, $timeout, localstorage) {
    var PERSON_KEY = 'people';

    function init() {
      var people = localstorage.getObject(PERSON_KEY);
      if (_.isEmpty(people)) {
        people = [];
      }
      localstorage.setObject(PERSON_KEY, people);

    }

    init();


    function getPeople() {
      var deferred = $q.defer();

      $timeout(function () {
        var people = localstorage.getObject(PERSON_KEY);

        deferred.resolve(people);
      }, 50);

      return deferred.promise;
    }

    function save(person) {
      var deferred = $q.defer();

      $timeout(function () {
        var people = localstorage.getObject(PERSON_KEY);

        people.push(person);

        localstorage.setObject(PERSON_KEY, people);

        deferred.resolve(person);
      }, 50);

      return deferred.promise;

    }


    return {
      getPeople: getPeople,
      save: save
    };
  };

  angular.module('person.data-service', ['localstorage']).factory('personDataService', personDataService);

})();
