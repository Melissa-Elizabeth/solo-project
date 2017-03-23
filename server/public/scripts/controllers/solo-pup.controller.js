
myApp.controller('SoloPupController', ['PupFactory', '$routeParams', function(PupFactory, $routeParams){

  var self = this;

  console.log($routeParams);

  self.dogs = PupFactory.dogs;

  self.getPup=PupFactory.getPup;

// self.dogs = PupFactory.dogs;
//
// self.result=PupFactory.result;
// // self.showHideTest = false;
//
// self.selectPup = function(pupid) {
//     PupFactory.selectPup(pupid);
//   };

}]);
