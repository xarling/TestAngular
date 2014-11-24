(function() {
  'use strict';

  var skillsService = function(skillsDataService) {

    function getSkills() {
      return skillsDataService.getSkills();
    }

    return {
      getSkills: getSkills
    };
  };

  angular.module('skills.service', ['skills.data-service']).factory('skillsService', skillsService);

})();
