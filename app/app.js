var app = angular.module("MovieHistoryApp", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider.
		when('/', {
		}).
		// when('/login', {
		// 	templateUrl: 'partials/login.html',
		// 	controller: 'app/controllers/LoginCtrl.js'
		// }).
		// when('/myList', {
		// 	templateUrl: 'partials/myList.html',
		// 	controller: 'app/controllers/WatchedCtrl.js'
		// }).
		when('/list', {
			templateUrl: './partials/list.html',
			controller: 'ToWatchCtrl'
		}).
		otherwise('/');

});

