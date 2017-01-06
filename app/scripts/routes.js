'use strict';
gtwApp.config(function ($routeProvider) {
	$routeProvider
	.when('/login', {
		templateUrl: 'views/login.html',
		controller: 'LoginCtrl',
		controllerAs: 'login'
	})
	.when('/dashboard', {
		templateUrl: 'views/dashboard.html',
		controller: 'DashboardCtrl',
		controllerAs: 'dashboard'
	})
	.otherwise({
		redirectTo: '/login'
	});
});