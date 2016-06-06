 "use strict";
 var app.controller('ToWatchCtrl', function($scope, $location, MoviesToWatchStorage) {
    $scope.moviesToWatch = [];

    moviesToWatchStorage.getMoviesToWatch().then(function(ToWatchCollection) {
        console.log("ToWatchCollection", ToWatchCollection);
        $scope.moviesToWatch = ToWatchCollection;
    });
 });