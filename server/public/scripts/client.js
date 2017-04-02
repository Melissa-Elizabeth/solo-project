
var PupApp = angular.module('PupApp',  ['ngRoute',
'firebase', 'ngFileUpload']);

PupApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/puppers', {
      templateUrl: '/views/puppers.html',
      controller: 'PupController',
      controllerAs: 'pc'
    })
    .when('/views/:id', {
      templateUrl: '/views/solopup.html',
      controller: 'SoloPupController',
      controllerAs: 'spc'
    })
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: 'HomeController',
      controllerAs: 'hc'
    })
    .when('/welcome', {
      templateUrl: '/views/welcome.html',
      controller: 'WelcomeController',
      controllerAs: 'wc'
    })
    .when('/corgi', {
      templateUrl: '/views/corgi.html',
      controller: 'CorgiController',
      controllerAs: 'cc'
    })
    .when('/profile/:id', {
      templateUrl: '/views/profile.html',
      controller: 'ProfileController',
      controllerAs: 'pro'
    })
    .when('/results', {
      templateUrl: '/views/results.html',
      controller: 'ResultsController',
      controllerAs: 'rc'
    })


    .otherwise({
      redirectTo: '/welcome'
    });
}]);
