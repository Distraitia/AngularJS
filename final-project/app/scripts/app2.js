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
      // .when('/', {
      //   templateUrl: 'views/main.html',
      //   controller: 'MainCtrl'
      // })
      // .when('/cart', {
      //   templateUrl: 'views/cart.html',
      //   controller: 'CartController'
      // })
      // .when('/about', {
      //   templateUrl: 'views/about.html',
      //   controller: 'AboutCtrl'
      // })
      // .when('/contact', {
      //   templateUrl: 'views/contact.html',
      //   controller: 'ContactCtrl'
      // })
      // .when('/allison/myCoolRoute', {
      //   templateUrl: 'views/mycoolroute.html',
      //   controller: 'MycoolrouteCtrl'
      // })
      // .otherwise({
      //   redirectTo: '/'
      // });

    .when('/', {
      templateUrl: 'views/store.htm',
      controller: 'storeController'
    })
    .when('/cart', {
      templateUrl: 'views/shoppingCart.htm',
      controller: 'storeController'
    })
    .when('/store', {
      templateUrl: 'views/store.htm',
      controller: 'storeController'
    })
    .when('/products/:productSku', {
      templateUrl: 'views/contact.html',
      controller: 'storeController'
    })
    .otherwise({
      redirectTo: '/'
    });
  }
);

// App Module: the name FinalProjectApp matches the ng-app attribute
// in the main <html> tag. The route provides parses the URL and
// injects the appropriate partial page
// var storeApp = angular.module('FinalProjectApp', []).
//   config(['$routeProvider', function($routeProvider) {
//   $routeProvider.
//     when('/store', { 
//       templateUrl: 'partials/store.htm',
//       controller: storeController }).
//     when('/products/:productSku', {
//       templateUrl: 'partials/product.htm',
//       controller: storeController }).
//     when('/cart', { 
//       templateUrl: 'partials/shoppingCart.htm',
//       controller: storeController }).
//     otherwise({
//       redirectTo: '/store' });
// }]);