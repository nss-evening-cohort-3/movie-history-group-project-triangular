var app = angular.module("MovieHistoryApp", ["ngRoute"]);
	// .constant("firebaseURL", "https")
app.controller("NavCtrl", function($scope) {
	$scope.navItems = [{name: "Logout"}, {name:"Movies to watch"}, {name:"Watched movies"}]
});


// //firebase URL to be setup and inserted below


app.config(function($routeProvider){
	$routeProvider.
//unsure about this first "when section"
		when('/', {
			templateUrl: 'index.html'
			// controller: 'app/controllers/ToWatchCtrl.js'
			// resolve: {isAuth}
		}).
		when('/login', {
			templateUrl: 'partials/login.html',
			controller: 'app/controllers/LoginCtrl.js'
			// resolve: {isAuth}
		}).
		when('/myList', {
			templateUrl: 'partials/myList.html',
			controller: 'app/controllers/WatchedCtrl.js'
			// resolve: {isAuth}
		}).
		when('/list', {
			templateUrl: 'partials/List.html',
			controller: 'app/controllers/ToWatchCtrl.js'
			// resolve: {isAuth}
		}).
// 		when('/logout', {
// 			templateUrl: 'partial-html/login.html',
// 			controller: "LoginCtrl.js"
// 		}).
		otherwise('/');

});




//uncommented line 22
























