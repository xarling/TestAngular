describe('company resource test', function() {
  'use strict';

  var $httpBackend;

  var companyDataResourceService;

  beforeEach(module('company.data-service'));

  beforeEach(inject(function(_$httpBackend_, _companyDataResourceService_) {

    companyDataResourceService = _companyDataResourceService_;

    $httpBackend = _$httpBackend_;

  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });


  it('should have a list of companies', function() {
    var companies = companyDataResourceService.getCompanies();

    $httpBackend.expectGET('/company').respond([{name: 'New Nexus'}, {name: 'TKP'}, {name: 'DUO'}]);

    expect(companies.length).toBe(0);

    $httpBackend.flush();

    expect(companies.length).toBe(3);
    expect(companies[0].name).toBe('New Nexus');
  });

  it('should have 0 companies if response is empty', function() {
    var companies = companyDataResourceService.getCompanies();

    $httpBackend.expectGET('/company').respond([]);

    expect(companies.length).toBe(0);

    $httpBackend.flush();

    expect(companies.length).toBe(0);
  });



});
