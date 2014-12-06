var vimeoApp = angular.module("vimeoApp", ['angularSmoothscroll']);

vimeoApp.directive("vimeoPlayer", [function() {

	var VimeoPlayer = {
		_template: function(videoId,width,height) {
			return "<iframe src='//player.vimeo.com/video/" + videoId + " ' frameborder='0' width='" + width + "' height='" + height + "' allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>";
		},
		initialize: function(videoId) {
			var width = 640;
			var height = 320;

			return this._template(videoId,width,height);
		}
	};

	return function(scope,element,attrs) {
		// scope in your directive IS your $rootScope
		scope.$on('videoCollectionChanged', function(event, data) {
			console.log("Got data from directive");
			console.debug(data);

			var template = VimeoPlayer.initialize(data.id);
			console.log(template);
			element.empty().append(template);
		});

		// var template = VimeoPlayer.initialize(109169719);
		// // console.log(template);
		// element.empty().append(template);
	};
}]);

// creating sub controller
// Dependency Injection
vimeoApp.controller("PlaylistController", ["$scope", "$http","$sce","$rootScope", function($scope,$http,$sce,$rootScope) {

	$scope.getData = function() {
		var url = "http://vimeo.com/api/v2/channel/staffpicks/videos.json";
		var promise = $http.get(url);

		// Success
		promise.then(function(response) {
			$scope.playlistData = response.data;
			$rootScope.$broadcast('videoCollectionChanged', $scope.playlistData[0]);
		});

		// Error
		promise.catch(function(message) {
			console.error(message);
		});

	}
	
	$scope.safeHtml = function(html) {
		return $sce.trustAsHtml(html);
	};

	$scope.changeVideo = function(data) {
		// console.log(data);
		// the broadcast name, what you're broadcasting; you can broadcast regular variables if they're 1 line, otherwise objects are recommended
		$rootScope.$broadcast('videoCollectionChanged', data);
	};

	// $on - 
	// $rootScope.$on('videoCollectionChanged', function(event, data) {
	// 	console.log("Got a video collection item!");
	// 	console.log(data);
	// });

	// Initialize
	$scope.getData();

}]);

// Metadata Controller
vimeoApp.controller("MetadataController", ["$scope", "$http","$sce","$rootScope", function($scope,$http,$sce,$rootScope) {
		$rootScope.$on('videoCollectionChanged', function(event, data) {
			// Necessary scope level data declaration; won't work without it
			$scope.videoData = data;
		});

		$scope.safeHtml = function(html) {
			return $sce.trustAsHtml(html);
		};
	}
]);