var vimeoApp = angular.module("vimeoApp", []);

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
		var template = VimeoPlayer.initialize(109169719);
		// console.log(template);
		element.empty().append(template);
	};
}]);

// creating sub controller
vimeoApp.controller("PlaylistController", ["$scope", "$http","$sce", function($scope,$http,$sce) {

	$scope.getData = function() {
		var url = "http://vimeo.com/api/v2/channel/staffpicks/videos.json";
		var promise = $http.get(url);

		// Success
		promise.then(function(response) {
			$scope.playlistData = response.data;
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
		console.log(data);
	}

	// Initialize
	$scope.getData();

}]);