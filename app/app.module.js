'use strict';

/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */
angular.module('app', [
  'ui.bootstrap',
  'ngAnimate',
  'ngCookies',
  'ngMessages',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'validation',
  'person',
  'skills',
  'localstorage',
  'company',
  'home'
]).config(function ($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider.when('/', {
    templateUrl: '/home/home.html',
    controller: 'HomeController'
  }).when('/404', {
    templateUrl: '404.html'
  }).otherwise({
    redirectTo: '/404.html'
  });
});
