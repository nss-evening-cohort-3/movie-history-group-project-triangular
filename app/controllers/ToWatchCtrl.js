 "use strict";
 
app.controller('ToWatchCtrl', 
	["$scope", 
	"$location", 
	"MovieDataFactory",
	function($scope, $location, MovieDataFactory) {
	  console.log("to watch controller loaded");
	  $scope.moviesToWatch = [];
	  $scope.searchOMDatabase = "";

		//this happens when we click on the button
		$scope.searchMovies = function(){
			console.log("searchMovies");
	    MovieDataFactory.getMoviesToWatch($scope.searchOMDatabase).then(function(ToWatchCollection) {
	        console.log("ToWatchCollection", ToWatchCollection);
	        $scope.moviesToWatch = ToWatchCollection.Search;
	        //loop thru collection
	    });
	  }  
 }]);