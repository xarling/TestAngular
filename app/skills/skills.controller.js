(function () {
  'use strict';

  var SkillsController = function ($scope, skillsService, person) {
     skillsService.getSkills().then(function(data) {
       $scope.skills = data;
     });

    $scope.person = person;

    $scope.addSkill = function () {
      if (!_.isEmpty($scope.selectedSkill)) {
        $scope.person.skills.push($scope.selectedSkill);
        _.remove($scope.skills, {'name': $scope.selectedSkill.name});
        $scope.selectedSkill = null;
      }
    };

    $scope.removeSkill = function (name) {
      _.remove($scope.person.skills, {'name': name});
      $scope.skills.push({'name': name});
    };

  };

  angular.module('skills.controller', ['skills.service']).controller('SkillsController', SkillsController);


})();
