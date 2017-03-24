
PupApp.controller('SoloPupController', ['PupFactory', '$routeParams', function(PupFactory, $routeParams){

  var self = this;

  console.log($routeParams);



self.currentPup=PupFactory.currentPup;
  self.getPup=PupFactory.getPup($routeParams.id);







}]);
