(function () {
  'use strict';


  var localstorage = function($window) {
    function set(key, value) {
      $window.localStorage[key] = value;
    }

    function get(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    }

    function setObject(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    }

    function getObject(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }


    return {
      set: set,
      get: get,
      setObject: setObject,
      getObject: getObject
    };
  };


  angular.module('localstorage', []).factory('localstorage', localstorage);

})();
