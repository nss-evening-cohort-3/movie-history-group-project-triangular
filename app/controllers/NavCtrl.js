var app = angular.module("MovieHistoryApp", [])

app.controller("NavCtrl", function($scope) {
	$scope..navItems = [{name: "Logout"}, {name:"Movies to watch"}, {name:"Watched movies"}]
});