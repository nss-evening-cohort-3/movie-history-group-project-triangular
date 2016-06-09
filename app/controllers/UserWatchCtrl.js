"use strict";
 
app.controller('UserWatchCtrl', 
	["$scope", 
	"$location", 
	"MovieDataFactory",
	function($scope, $location, MovieDataFactory) {
	  console.log("to watch controller loaded");
	  $scope.searchOMDatabase = "";
	  $scope.addMovie = {};
	  // $scope.movies = [{
	  // 	Title: "",
	  // 	Year: ""
	  // }];	

	 		//this happens when we click on the addToWatchList button 
	  // $scope.moviesToWatch = "";
	 		//add selected movie into existing firebase object
	   $scope.moviesToWatch = function(movie){
	   	let selectedMovie = {
	   		poster:movie.Poster, 
	   		title:movie.Title,
	   		year:movie.Year,
	   		isWatched:false
	   	}
	   	console.log("selectedMovie",selectedMovie);
	   	

	   }
 }]);