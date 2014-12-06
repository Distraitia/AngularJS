'use strict';

/**
 * @ngdoc function
 * @name fpApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fpApp
 */
angular.module('fpApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }
);
