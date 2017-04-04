angular.module ('trustCafeApp')
.controller ('ProductListCtrl', ['$scope', '$translate', '$http', '$interval', 'NgTableParams', function ($scope, $translate, $http, $interval, NgTableParams) {
	$scope.REFRESH_TIME = 30000

	function getData() {
		$http({
		  method: 'GET',
		  url: '/data/vmlist.json'
		}).then(function successCallback(response) {
			var data = response.data
			$scope.tableParams = new NgTableParams({}, { dataset: data});
			console.log("Table updated")
		}, function errorCallback(error) {
			console.log (error)
		});
	};

	$scope.playPause = function (id, resGrpName, pwrState) {
		var nextState = "start"
		if ( pwrState =='VM running' )
			nextState = "stop"

		$http({
		  method: 'GET',
		  url: '/api/playPause/'+id+"/"+resGrpName+"/"+nextState
		}).then(function successCallback(response) {
			console.log("Resfreshing table")
			getData();
		}, function errorCallback(error) {
			console.log (error)
		});
	};

	$interval(getData, $scope.REFRESH_TIME);
	getData();

}])