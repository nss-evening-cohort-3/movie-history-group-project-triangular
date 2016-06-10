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
					 firebaseURL +"movies"+ ".json",
					 JSON.stringify(movie)
					)
				.success(
					function(objectFromFirebase){
						resolve(objectFromFirebase);
					});
			});
		};

		var getMoviesOnWatchList = function(){
			return $q(function(resolve,reject){
				$http.get(
					firebaseURL +"movies"+ ".json"
					)
				.success(
					function(objectFromFirebase){
						resolve(objectFromFirebase);
					});
			});
		};

		var deleteMovieFromWatchList = function(movieId){
			console.log("movieId",movieId );
			return $q(function(resolve, reject){

				$http.delete(
					firebaseURL + "movies/" + movieId + ".json")
				.success(
					function(objectFromFirebase){
						resolve(objectFromFirebase);
					})
			})
		}



  return {
  	getMoviesToWatch:getMoviesToWatch, addMovieToWatchList:addMovieToWatchlist, getMoviesOnWatchList:getMoviesOnWatchList,
  		deleteMovieFromWatchList:deleteMovieFromWatchList
  }
});
