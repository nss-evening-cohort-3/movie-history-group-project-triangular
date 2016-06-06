"use strict";
var app = angular.module("MovieHistoryApp", ["ngRoute"])
.constant("firebaseURL","https://mh-triangular.firebaseio.com/");


app.controller("NavCtrl", function($scope) {
	$scope.navItems = [{name: "Logout"}, {name:"Movies to watch"}, {name:"Watched movies"}]
});


"use strict";
var app = angular.module("MovieHistoryApp", ["ngRoute"])
.constant("firebaseURL","https://mh-triangular.firebaseio.com/");



app.config(function($routeProvider){
	$routeProvider.
//unsure about this first "when section"
		when('/', {
			templateUrl: 'partial-html/login.html',
			controller: 'LoginCtrl',
			resolve: {isAuth}
		}).
		when('/login', {
			templateUrl: 'partial-html/login.html',
			controller: 'app/controllers/LoginCtrl.js',
			resolve: {isAuth}
		}).
		when('/moviesWatched/list', {
			templateUrl: 'partial-html/list.html',
			controller: 'app/controllers/WatchedCtrl.js',
			resolve: {isAuth}
		}).
		when('/moviesToWatch/list', {
			templateUrl: 'partial-html/toWatchList.html',
			controller: 'app/controllers/ToWatchCtrl.js',
			resolve: {isAuth}
		}).
		when('/logout', {
			templateUrl: 'partial-html/login.html',
			controller: "LoginCtrl.js"
		}).
		otherwise('/');

});





























