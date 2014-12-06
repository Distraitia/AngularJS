'use strict';

/**
 * @ngdoc function
 * @name fpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fpApp
 */
angular.module('fpApp')
  .controller('CartController', function ($scope,localStorageService) {

  	var todosInStore = localStorageService.get('todos');

    $scope.todos = todosInStore || [];

    $scope.$watch('todos', function() {

    	localStorageService.set('todos',$scope.todos);

    }, true);

    $scope.addTodo = function() {

    	if ($scope.todos.indexOf($scope.todo) === -1) {
    		$scope.todos.push($scope.todo);
	    	$scope.todo = '';
    	} else {
    		alert('Yo, dawg, *' + $scope.todo + '* already exists, fool.');
    	}

    };

    $scope.removeTodo = function(index) {

    	$scope.todos.splice(index,1);

    };

  });
