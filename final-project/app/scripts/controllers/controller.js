'use strict';

// the storeController contains two objects:
// - store: contains the product list
// - cart: the shopping cart object
function storeController($scope, $routeParams, DataService) {

    // get store and cart from service
    $scope.store = DataService.store;
    $scope.cart = DataService.cart;

    // use routing to pick the selected product
    if ($routeParams.productSku !== null) {
        $scope.product = $scope.store.getProduct($routeParams.productSku);
    }
}

// var FinalProjectApp = angular.module('FinalProjectApp', []);

// FinalProjectApp
// 	.controller('mainController', ['$scope', function($scope) {
// 	    $scope.submitForm = function(isValid) {
// 	        if (isValid) {
// 	            alert('sweet everything is valid');
// 	        }
// 	    }
// 	}
// ]);

angular.module('FinalProjectApp')
	.controller('mainController', ['$scope', function ($scope) {

  	$scope.submitForm = function(isValid) {
        if (isValid) {
            alert('sweet everything is valid');
        }
    }

}
]);