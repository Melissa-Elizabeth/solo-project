
myApp.controller('PupController', ['PupFactory', function(PupFactory){

  var self = this;

self.dogs = PupFactory.dogs;

self.result=PupFactory.result;
// self.showHideTest = false;

}]);

// }]);
