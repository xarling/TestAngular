'use strict';

describe('personController', function () {

  var scope;

  var $location;

  beforeEach(module('app'));

  xdescribe('init', function () {

    it('should load all the data on the scope', function () {
      // hints in homeController;


    });

  });


  describe('next', function () {

    beforeEach(inject(function (_$location_, $rootScope, $controller) {
      $location = _$location_;
      scope = $rootScope.$new();
      $controller('PersonController', {$scope: scope});
    }));

    it('should go to the next page if the form is correct', function () {
      scope.next();
      expect($location.path()).toBe('/skills');
    });

    xit('should stay on the same page if the form is incorrect', function () {

    });

  });
});


