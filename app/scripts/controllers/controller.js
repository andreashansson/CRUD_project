
app.controller('main', function($scope) {

	$scope.hej = "hejsan";

});

app.controller('resursController', function($http, $scope) {

	$scope.output = null;
	$scope.singleOutput = null;
	$scope.showForm = false;

		$http({

			method: 'GET',
			url: '/api/resurs'

		}).then(function successCallback(response) {
				
			console.log(response.data);

			$scope.output = response.data;

			//console.log($scope.output[1]._id);

	  	}, function errorCallback(response) {

	    // called asynchronously if an error occurs
	   	// or server returns response with an error status.

		});

		$scope.getId = function(id) {

		$scope.showForm = true;

		//$scope.urlId = '/api/resurs/5718ae0e2f9b69ce2cd92172';

		//console.log($scope.urlId);

		$http({

			method: 'GET',
			url: '/api/resurs/' + id

		}).then(function successCallback(response) {
				
			console.log(response.data);

			$scope.singleOutput = response.data;

			//console.log($scope.output[1]._id);

	  	}, function errorCallback(response) {

	    // called asynchronously if an error occurs
	   	// or server returns response with an error status.

		});

	}

});

