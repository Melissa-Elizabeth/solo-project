
PupApp.controller('PupController', ['PupFactory', function(PupFactory){

  var self = this;

  self.dogs = PupFactory.dogs;

  self.result=PupFactory.result;

self.header = "";
self.navbar = "";
self.results = "";

  self.desiredPetObject=PupFactory.desiredPetObject;

  if(self.desiredPetObject.shed===undefined){
  self.question1 = true;
  self.question2 = false;
  self.question3 = false;
  self.question4 = false;
  self.question5 = false;
  self.header = false;
  self.navbar = false;
  self.results = false;
}



  self.next1 = function(answer) {
    self.desiredPetObject.shed=answer;
    console.log(answer);
    self.question1 = false;
    self.question2 = true;
  };

  self.next2 = function(answer) {
    self.desiredPetObject.drool=answer;
    self.question2 = false;
    self.question3 = true;
  };
  self.next3 = function(answer) {
    self.desiredPetObject.bark=answer;
    self.question3 = false;
    self.question4 = true;
  };

  self.next4 = function(answer) {
    self.desiredPetObject.apartment=answer;
    self.question4 = false;
    self.question5 = true;
  };

  self.next5 = function(answer) {
    self.desiredPetObject.kids=answer;
    self.result(self.desiredPetObject);
    self.question5 = false;
    self.header= true;
    self.navbar = true;
    self.results = true;
  };

  self.getPup=PupFactory.getPup;

  // self.soloPup = function(){
  //   self.getPup(self.dogs.id);
  // };

}]);

// }]);
