'use strict';

/**
 * @ngdoc overview
 * @name fpApp
 * @description
 * # fpApp
 *
 * Main module of the application.
 */
angular
  .module('fpApp', [
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
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartController'
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
