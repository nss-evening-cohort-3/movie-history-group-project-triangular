"use strict";

app.factory("MovieDataFactory", function($http, $q) {




//api to movie database
	function getMoviesToWatch(searchTerm){
		return $q(function(resolve, reject){
			$http.get(`http://www.omdbapi.com/?s=${searchTerm}`)
				.success(function(movieData){
					resolve(movieData);
				}, function(error){
						 reject(error);
					 }
				);	 
		});
	};
		

	





  return {
  	getMoviesToWatch:getMoviesToWatch
  }
});
