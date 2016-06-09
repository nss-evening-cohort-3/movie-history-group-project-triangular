"use strict";

app.factory("MovieDataFactory", function($http, $q) {




//api to movie database
	var getMoviesToWatch = function(searchTerm){
		return $q(function(resolve, reject){
			$http.get(`http://www.omdbapi.com/?s=${searchTerm}`)
				.success(function(movieData){
					resolve(movieData);
				}, function(error){
						 reject(error);
					 });	 
				});
			};
		
		var addMovieToWatchlist = function(movieID){
			return $q(function(resolve, reject){
				$http.post(
					 firebaseURL + "towatch.json",
					 JSON.stringify({
					 	Title: movie.Title,
					 	Year: movie.Year,
					 	Poster: movie.Poster,
					 	isWatched: movie.isWatched
					 })
					)
				.success(
					function(objectFromFirebase){
						resolve(objectFromFirebase);
					}
				);
			});
		};

	





  return {
  	getMoviesToWatch:getMoviesToWatch, addMovieToWatchlist:addMovieToWatchlist
  }
});
