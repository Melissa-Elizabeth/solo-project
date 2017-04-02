
PupApp.controller('SoloPupController', ['PupFactory', '$routeParams',  function(PupFactory, $routeParams){

  var self = this;

  console.log($routeParams);


  self.result=PupFactory.result;
self.currentPup=PupFactory.currentPup;
  self.getPup=PupFactory.getPup($routeParams.id);

  self.header = "";
  self.logoHead= "";
  self.navbar = "";
  self.results = "";

    self.desiredPetObject=PupFactory.desiredPetObject;

  self.next6 = function(answer) {

      // $location.path('/results').replace();
    self.result(self.desiredPetObject);

    self.header= true;
    self.navbar = true;
    self.results = true;
};

}]);
