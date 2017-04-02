PupApp.controller('ResultsController', ['PupFactory', '$routeParams',  function(PupFactory, $routeParams){

  var self = this;
    self.dogs = PupFactory.dogs;
    self.result=PupFactory.result;
    self.getResults=PupFactory.getResults;
    self.myResults=PupFactory.myResults;
    self.currentResult=PupFactory.currentResult;
    self.saveResults=PupFactory.saveResults;
    self.desiredPetObject=PupFactory.desiredPetObject;
  self.message = "hiiiiiii";




  self.getResult=PupFactory.getResult($routeParams.id);


self.runEvery = function(){
  self.result(self.desiredPetObject);
  console.log(self.desiredPetObject);
};

  self.save = function(){
    self.result(self.desiredPetObject);
  };
}]);
