
var myApp = angular.module('PupApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/views/puppers.html',
      controller: 'PupController',
      controllerAs: 'pc'
    // })
    // .when('/todoList', {
    //   templateUrl: '/views/todoList.html',
    //   controller: 'TaskController',
    //   controllerAs: 'tc'
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
