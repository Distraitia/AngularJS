'use strict';

/**
 * @ngdoc function
 * @name week6App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the week6App
 */
angular.module('week6App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
