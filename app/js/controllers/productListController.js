angular.module ('trustCafeApp')
.controller ('ProductListCtrl', ['$scope', '$translate', '$http', '$interval', 'NgTableParams', function ($scope, $translate, $http, $interval, NgTableParams) {
	$scope.REFRESH_TIME = 10000

	function getData() {
		$http({
		  method: 'GET',
		  url: '/data/vmlist.json'
		}).then(function successCallback(response) {
			var data = response.data
			$scope.tableParams = new NgTableParams({}, { dataset: data});
		}, function errorCallback(error) {
			console.log (error)
		});
	}

	$scope.playPause = function () {
		$http({
		  method: 'GET',
		  url: '/api/playPause'
		}).then(function successCallback(response) {
			console.log("Resfrshing table")
			getData();
		}, function errorCallback(error) {
			console.log (error)
		});
	}

	// $interval(getData, $scope.REFRESH_TIME);
	getData();

}])