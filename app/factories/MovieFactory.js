"use strict";
app.factory("MovieDataFactory", function($http, $q, firebaseURL) {

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
		
		var addMovieToWatchlist = function(movie){
			return $q(function(resolve, reject){
				$http.post(
					 firebaseURL,
					 JSON.stringify(movie)
					)
				.success(
					function(objectFromFirebase){
						resolve(objectFromFirebase);
						console.log("movie", objectFromFirebase);
					}
				);
			});
		};

  return {
  	getMoviesToWatch:getMoviesToWatch, addMovieToWatchList:addMovieToWatchlist
  }
});
