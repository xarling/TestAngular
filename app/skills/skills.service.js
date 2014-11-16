(function() {
  'use strict';

  var skillsService = function($resource, config) {
    var skills = $resource(config.backendUri + '/skills');

    function getSkills() {
      return skills.query();
    }

    return {
      getSkills: getSkills
    };
  };

  angular.module('skills.service', ['ngResource', 'app.config']).factory('skillsService', skillsService);

})();
