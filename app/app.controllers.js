(function(module) {

	module.controller("searchController", function($scope, github, $location, $log) {
		var onUserComplete = function(data) {
			$scope.user = data;
			github.getRepos($scope.user).then(onRepos, onError);
		};

		var onRepos = function(data) {
			$log.log(data);
			$scope.repos = data;
		};
		var onError = function(response) {
			$scope.message = "Could not fetch the data!"
		};

		$scope.search = function(username) {
			$log.log("Searching...")
			$location.path("/user/" + username);
			github.getUser($scope.username).then(onUserComplete, onError);
	    };
	    $scope.username = "angular";
	    $scope.repoSortOrder = "-stargazers_count";
		$log.log("UserController username: " + $scope.username);
		github.getUser($scope.username).then(onUserComplete, onError);
	});

})(app);