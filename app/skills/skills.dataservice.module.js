(function () {
  'use strict';

  /**
   * @ngdoc factory
   * @name skillsDataService
   * @requires $q
   * @requires $timeout
   *
   * @description
   * This service mocks a real request to a backend. It returns a true promise, which always takes 1000 ms to resolve
   */

  var dataService = function ($q, $timeout, localstorage) {

    var SKILLS_KEY = 'skills';

    function initSkills() {
      var skills = localstorage.getObject(SKILLS_KEY);
      if (_.isEmpty(skills)) {
        skills = [
          {'name': 'Java'},
          {'name': 'C#'},
          {'name': 'Angular'},
          {'name': 'Ruby'},
          {'name': 'Javascript'},
          {'name': 'Ember'},
          {'name': 'Jasmine'},
          {'name': 'Faceboeken'},
          {'name': 'C++'}
        ];
      }
      localstorage.setObject(SKILLS_KEY, skills);
      return skills;
    }

    var skills = initSkills();

    function getSkills() {
      var deferred = $q.defer();

      $timeout(function () {
        localstorage.getObject(SKILLS_KEY);

        deferred.resolve(skills);
      }, 1000);

      return deferred.promise;
    }

    function save(skillName) {
      var deferred = $q.defer();

      $timeout(function () {
        var newSkill = {'name': skillName};
        skills.push(newSkill);
        localstorage.setObject(SKILLS_KEY, skills);
        deferred.resolve(newSkill);
      }, 1000);

      return deferred.promise;

    }


    return {
      getSkills: getSkills,
      save: save
    };
  };

  angular.module('skills.data-service', ['localstorage']).factory('skillsDataService', dataService);

})();
