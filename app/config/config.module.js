(function() {
  'use strict';

  var config = {
    backendUri: 'http://localhost:8080/test'
  };

  /** @ngInject */
  angular.module('app.config', []).constant('config', config);

})();
