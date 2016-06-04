 "use strict";
  app.controller('WatchedCtrl', function($scope, $location) {
    $scope.movies = [];

    watchedMovieStorage.getWatchedMovies().then(function(watchedCollection) {
        console.log("watchedCollection", watchedCollection);
        $scope.movies = watchedCollection;
    });
 });