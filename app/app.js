var app = angular.module("MovieHistoryApp", ["ngRoute"]);

app.directive('errSrc', function() {
  return {
    link: function(scope, element, attrs) {
      element.bind('error', function() {
        if (attrs.src !== attrs.errSrc) {
          attrs.$set('src', attrs.errSrc);
        }
      });
    }
  };
});

app.config(function($routeProvider){
	$routeProvider.
		when('/', {
		}).
		// when('/login', {
		// 	templateUrl: 'partials/login.html',
		// 	controller: 'app/controllers/LoginCtrl.js'
		// }).
		// when('/myList', {
		// 	templateUrl: 'partials/myList.html',
		// 	controller: 'app/controllers/WatchedCtrl.js'
		// }).
		when('/list', {
			templateUrl: './partials/list.html',
			controller: 'ToWatchCtrl'
		}).
		when('/search', {
			templateUrl: './partials/search.html',
			controller: 'SearchCtrl'
		}).
		otherwise('/');

});

