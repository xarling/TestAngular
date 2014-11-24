(function () {
  'use strict';

  /**
   * @ngdoc factory
   * @name companyDataService
   * @requires $q
   * @requires $timeout
   *
   * @description
   * This service mocks a real request to a backend. It returns a true promise, which always takes 1000 ms to resolve
   */

  var dataService = function ($q, $timeout) {
    var companies = [
      {'code': 1, 'name': 'New Nexus', 'type': 'NN'},
      {'code': 2, 'name': 'Zuuver', 'type': 'NN'},
      {'code': 3, 'name': 'AC Plus', 'type': 'NN'},
      {'code': 4, 'name': 'Ordina', 'type': 'O'},
      {'code': 5, 'name': 'GetThere', 'type': 'GT'}];

    function getCompanies() {
      var deferred = $q.defer();

      $timeout(function () {
        deferred.resolve(companies);
      }, 1000);

      return deferred.promise;
    }


    return {
      getCompanies: getCompanies
    };
  };

  angular.module('company.data-service', []).factory('companyDataService', dataService);

})();
