
var myApp = angular.module('PupApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
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
    // })
    // .when('/about', {
    //   templateUrl: '/views/about.html',
    //   controller: 'AboutController',
    //   controllerAs: 'ac'
    // })
    // .otherwise({
    //   redirectTo: 'home'
    });
}]);
