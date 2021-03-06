(function () {
  'use strict';

  var SkillsController = function ($scope, skillsService, person, personService) {

    skillsService.getSkills().then(function (data) {
      $scope.skills = data;
    });


    $scope.person = person;


    $scope.addSkill = function (item) {
      if (!_.isEmpty($scope.skills.selectedSkill)) {
        $scope.person.skills.push($scope.skills.selectedSkill);
        _.remove($scope.skills, {'name': $scope.skills.selectedSkill.name});
        $scope.skills.selectedSkill = '';
      }
    };

    $scope.removeSkill = function (name) {
      _.remove($scope.person.skills, {'name': name});
      $scope.skills.push({'name': name});
    };

    $scope.save = function () {
      personService.save($scope.person);
      // reset
      $scope.person = {};
      $scope.personSaved = true;
    };

  };

  angular.module('skills.controller', ['skills.service']).controller('SkillsController', SkillsController);


})();
