 "use strict";
 var app.controller('WatchedCtrl', function($scope, $location, watchedMovieStorage) {
    $scope.movies = [];

    watchedMovieStorage.getWatchedMovies().then(function(watchedCollection) {
        console.log("watchedCollection", watchedCollection);
        $scope.movies = watchedCollection;
    });
 });