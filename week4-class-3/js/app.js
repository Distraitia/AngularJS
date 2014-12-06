var myApp = angular.module("servicesApp", []);

myApp.controller("MainController",["$scope", function($scope) {
	
	$scope.tab = "first";

	$scope.open = function(tab) {
		$scope.tab = tab;
	};

}]);

// creating sub controller
myApp.controller("SubController", ["$scope", "ItemService", function($scope,ItemService) {

	// ItemService.list() = [];
	// console.log(ItemService.list().length);

	var items = ItemService.list();

	$scope.list = function() {
		return items;
	};

	$scope.add = function() {
		ItemService.add({
			id: items.length + 1,
			label: 'Item '
		});
	};

}]);

// Create a service that we can bass back to our controller
myApp.factory("ItemService", [function() {

	var items = [
		{id: 1, label: "Item 0"},
		{id: 2, label: "Item 1"}
	];

	return {
		list: function() {
			return items;
		},
		add: function(item) {
			items.push(item);
		}
	};
}]);