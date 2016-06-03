"use strict";
var app = angular.module("MovieHistoryApp", [ng-route])
//firebase URL to be setup and inserted below
.constant(firebaseURL, "https");


app.config(function($routeProvider){
	$routeProvider.
//unsure about this first "when section"
		when('/', {
			templateUrl: 'partial-html/frontPage.html'
			controller: 'FrontPage',
			resolve: {{isAuth}}
		}).
		when('/login', {
			templateUrl: 'partial-html/login.html',
			controller: 'app/controllers/LoginCtrl.js',
			resolve: {{isAuth}}
		}).
		when('/moviesWatched/list', {
			templateUrl: 'partial-html/list.html',
			controller: 'app/controllers/WatchedCtrl.js'
			resolve: {{isAuth}}
		}).
		when('/moviesToWatch/list', {
			templateUrl: 'partial-html/toWatchList.html',
			controller: 'app/controllers/ToWatchCtrl.js'
			resolve: {{isAuth}}
		}).
		when('/logout', {
			templateUrl: 'partial-html/login.html',
			controller: "LoginCtrl.js"
		}).
		otherwise('/');

});





























