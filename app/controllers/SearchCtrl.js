"use strict"

app.controller('SearchCtrl', ["$scope", "$location", "MovieDataFactory",
	 function($scope, $location, MovieDataFactory){
	 	console.log("SearchCtrl loaded");
	 	$scope.searchDOMDatabase = "";
	 	$scope.movies = [{
	 		Title: "",
	 		Year: ""
	 	}];

	 	$scope.movieList = [];

	 	$scope.searchMovies = function(){
	 		console.log("searchMovies");
	 		MovieDataFactory.getMoviesToWatch($scope.searchOMDatabase).then(function(movieReturn){
	 			$scope.movies = movieReturn.Search;
	 		});
	 	}

	 }]);