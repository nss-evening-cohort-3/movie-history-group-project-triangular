 "use strict";
 
app.controller('ToWatchCtrl', 
	["$scope", 
	"$location", 
	"MovieDataFactory",
	function($scope, $location, MovieDataFactory) {
	  console.log("to watch controller loaded");
	  $scope.searchOMDatabase = "";
	  $scope.addMovie = {};
	  $scope.movies = [{
	  	Title: "",
	  	Year: ""
	  }];	

	  $scope.moviesToWatch = [];
	 		//this happens when we click on the button
		$scope.searchMovies = function(){
			console.log("searchMovies");
	    MovieDataFactory.getMoviesToWatch($scope.searchOMDatabase).then(function(ToWatchCollection) {
	        console.log("ToWatchCollection", ToWatchCollection);
	        $scope.movies = ToWatchCollection.Search;
	        console.log("$scope.movies", $scope.movies);
	        



	        
//wrapped $scope.movies in []
//added $scope.addMovie = {};
//moved $scope.moviesToWatch = []; from line 10 to line 16

	    });
	  }  
 }]);