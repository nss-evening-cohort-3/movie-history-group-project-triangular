"use strict";
 
app.controller('UserWatchCtrl', 
	["$scope", 
	"$location",
	"MovieDataFactory",
	function($scope, $location, MovieDataFactory) {
	  console.log("to watch controller loaded");
	  $scope.searchOMDatabase = "";
	  $scope.addMovie = {};	


	 		//this happens when we click on the addToWatchList button 
	 		//add selected movie into existing firebase object
	   $scope.moviesToWatch = function(movie){
	   	let selectedMovie = {
	   		poster:movie.Poster, 
	   		title:movie.Title,
	   		year:movie.Year,
	   		isWatched:false
	   	}
	   	MovieDataFactory.addMovieToWatchList(selectedMovie);
	    }

	   $scope.getWatchList = function(){
	   	MovieDataFactory.getMoviesOnWatchList()
	   	.then(function(data){
	   		$scope.movies = [];
	   		for (var key in data){
	   			data[key].id = key
	   			$scope.movies.push(data[key]);
	   		}
	   	})
	   }

	   $scope.deleteMovie = function(data){
	   	MovieDataFactory.deleteMovieFromWatchList(data.id)
	   		.then(function(){
	   			$scope.getWatchList();
	   	 })
	   	}



 }]);