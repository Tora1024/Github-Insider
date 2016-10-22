(function() {

	var app = angular.module('App', []);

	app.controller("home", function($scope) {

	});

	app.controller("searchBar", function($scope) {

	});

	app.controller("repoInfo", function($scope, $http) {
		$http.get('https://api.github.com/users/tora1024')
			 .then(successCallback, errorCallback);

		var successCallback = function(response) {
			console.log("data: " + response.data);
			$scope.data = response.data;
		};

		var errorCallback = function(response) {
			console.error('Gists error', response.status, response.data);
		};
	});

})();