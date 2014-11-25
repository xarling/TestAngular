'use strict';

describe('homeController', function () {

  var scope;
  var personService;

  var peopleData = [{firstName: 'Piet', lastName: 'Zwarte'}];

  var HomeController;

  // home module laden voor deze test
  beforeEach(module('home'));


  // voor elke test injecteer de rootScope en de $controller service
  beforeEach(inject(function ($rootScope) {
    // maak een schone scope mbv de rootscope
    scope = $rootScope.$new();
    personService = jasmine.createSpyObj('personService', ['getPeople']);

  }));

  it('should load the data onto the scope - with promise', inject(function ($controller, $q) {
    personService.getPeople.and.returnValue($q.when(peopleData));

    // maak een HomeController mbv de $controller service van Angular en injecteer de scope en de serviceMock
    HomeController = $controller('HomeController', {
      $scope: scope, personService: personService
    });

    scope.$apply();

    expect(personService.getPeople).toHaveBeenCalled();

    // na het aanmaken van de controller is de data geladen.
    expect(scope.people[0].firstName).toBe('Piet');
    expect(scope.people[0].lastName).toBe('Zwarte');


  }));


});
