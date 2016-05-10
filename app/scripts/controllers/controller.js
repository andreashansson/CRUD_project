app.controller('main', function($scope) {

	$scope.hej = "hejsan";

});

app.controller('aggController', function($http, $scope) {

	$scope.aggOutput = "hejsan";

	$http({

		method: 'GET',
		url: '/api/aggregate'

	}).then(function successCallback(response) {
				
		console.log(response.data);

		$scope.aggOutput = response.data;

		//console.log($scope.output[1]._id);

	}, function errorCallback(response) {

		console.log(response);
	// called asynchronously if an error occurs
	// or server returns response with an error status.

	});

});

app.controller('resursController', function($http, $scope) {

	$scope.output = null;
	$scope.singleOutput = null;
	$scope.showContent = false;
	$scope.showButton = false;
	$scope.showResurs = true;

	var refresh = function() {

		$http.get('/api/resurs').success(function(response) {
			console.log("Jag laddar om mig!");
			$scope.output = response;
		});
	}

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

		$scope.delResurs = function(i) {


			var urlid = '/api/delete/' + i;

			$http({

				method: 'delete',
				url: urlid

			}).then(function successCallback(response) {

				console.log(response.data);
				console.log("Funkade fint!");

			}, function errorCallback(response) {
				console.log("Error!");
			});

			refresh();

		}

		$scope.getId = function(id) {

		$scope.showButton = true;
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