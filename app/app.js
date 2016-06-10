var app = angular.module("MovieHistoryApp", ["ngRoute"])
.constant("firebaseURL", "https://mh-triangular.firebaseio.com/")

let isAuth = (AuthFactory) => new Promise ((resolve, reject) => {
  if(AuthFactory.isAuthenticated()){
    console.log("User is authenticated, resolve route promise");
    resolve();
  } else {
    console.log("User is not authenticated, reject route promise");
    reject();
  }
})

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
      templateUrl: './partials/list.html',
      controller: 'UserWatchCtrl',
      resolve: {isAuth}
		}).
		when('/login', {
			templateUrl: 'partials/login.html',
			controller: 'LoginCtrl'
		}).
    when('/logout', {
      templateUrl: 'partials/login.html',
      controller: 'LoginCtrl'
    }).
		when('/myList', {
			templateUrl: 'partials/myList.html',
			controller: 'WatchedCtrl',
      resolve: {isAuth}
		}).
		when('/list', {
			templateUrl: './partials/list.html',
			controller: 'UserWatchCtrl',
      resolve: {isAuth}
		}).
		when('/search', {
			templateUrl: './partials/search.html',
			controller: 'SearchCtrl',
      resolve: {isAuth}
		}).
		otherwise('/');
    });

    app.run(($location) =>{
  let addressRef = new Firebase("https://mh-triangular.firebaseio.com/");

  addressRef.unauth();

    //When Registering:
  addressRef.onAuth(authData =>{
    if(!authData){
      $location.path("/login");
      }
    })
  });

