PupApp.controller('ProfileController', ['PupFactory','$routeParams', function(PupFactory, $routeParams){

var self=this;
self.users = PupFactory.users;
self.myResults=PupFactory.myResults;
self.getResults=PupFactory.getResults;
self.currentResult=PupFactory.currentResult;
self.currentUser=PupFactory.currentUser;

self.currentUser=PupFactory.currentUser;
  self.getResult=PupFactory.getResult($routeParams.id);

}]);
