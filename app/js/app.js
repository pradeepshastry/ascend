'use strict';

var trustApp = angular.module ('trustCafeApp', [
	'ngRoute',
	'pascalprecht.translate',
	'ngTable'
]);

trustApp.config (['$routeProvider', '$translateProvider', function ($routeProvider, $translateProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/productList.html',
			controller: 'ProductListCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});

	$translateProvider
	  .translations('en_US', enTranslations)
	  .preferredLanguage('en_US');
}]);

trustApp.constant ('TC_CONSTANTS', {
	'BRAND': 'Ascend Learning'
});

trustApp.run (function ($rootScope, TC_CONSTANTS) {
	$rootScope.TC_CONSTANTS = TC_CONSTANTS;
});

var enTranslations = {
  CATEGORY: 'CATEGORY',
  TITLE: 'TTTLE',
  POSTED_ON: 'POSTED ON',
  LOCATION: 'LOCATION',
  POSTED_BY: 'POSTED BY',
  ACTION: 'ACTION'
};