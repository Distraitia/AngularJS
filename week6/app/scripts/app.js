'use strict';

/**
 * @ngdoc overview
 * @name week6App
 * @description
 * # week6App
 *
 * Main module of the application.
 */
angular
  .module('week6App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule'
  ]).config(['localStorageServiceProvider', function(localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('ls');
  }

  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/allison/myCoolRoute', {
        templateUrl: 'views/mycoolroute.html',
        controller: 'MycoolrouteCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
