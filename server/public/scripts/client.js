
var PupApp = angular.module('PupApp', ['ngRoute']);

PupApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
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
    .otherwise({
      redirectTo: 'home'
    });
}]);
