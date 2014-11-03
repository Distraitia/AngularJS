var weekTwo = angular.module("weekTwo", []);

// Custom filters
weekTwo.filter("capitalOnce", function() {
	// input is whatever comes back from angular
	return function(input) {
		if (input) {
			return input[0].toUpperCase() + input.slice(1).toLowerCase();
		}
	}
});

weekTwo.controller("DefaultController",["$scope", "$filter", function($scope, $filter) {
	$scope.hello = $filter("uppercase")("Hello world");
	// adds filter

	$scope.myNumber = "123.45678";

	$scope.myDate = new Date();

	$scope.myData =
		["Allison","is","almost","crazy"]
	;

	$scope.myOtherData = [
		{
			name:"Allison",
			city:"Atlanta",
			sign:"Aquarius",
		},
		{
			name:"Sarah",
			city:"Boston",
			sign:"Leo",
		},
		{
			name:"Austin",
			city:"Chicago",
			sign:"Taurus",
		}
	];

	$scope.foobar = "Hello, Wonderful.";
}]);

// For next week...
// weekTwo.controller("FormController",['$scope', 
// 	function($scope) {

// }]);