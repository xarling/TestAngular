(function() {
  'use strict';

  var companyService = function(companyDataService) {

    function getCompanies() {
      return companyDataService.getCompanies();
    }

    function getNewNexusCompanies() {
      return getCompanies().then(function(data) {
        var foreignCompanies =  _.filter(data, {'type': 'NN'});
        return foreignCompanies;
      });
    }

    return  {
      getCompanies: getCompanies,
      getNewNexusCompanies: getNewNexusCompanies

    };


  };

  angular.module('company').factory('companyService', companyService);

})();
