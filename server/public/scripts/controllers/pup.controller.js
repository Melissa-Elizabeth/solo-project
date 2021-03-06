
PupApp.controller('PupController', ['PupFactory','$firebaseAuth','$http', '$location', function(PupFactory, $firebaseAuth, $http, $location){

  var auth = $firebaseAuth();
  var self = this;

  self.dogs = PupFactory.dogs;
  self.users = PupFactory.users;
  self.currentUser = PupFactory.currentUser;
  self.result=PupFactory.result;
  self.saveResults=PupFactory.saveResults;
  self.getPup=PupFactory.getPup;
  self.desiredPetObject=PupFactory.desiredPetObject;

  if(self.desiredPetObject.shed===undefined){

    self.question1 = true;
    self.question2 = false;
    self.question3 = false;
    self.question4 = false;
    self.question5 = false;
    self.question6 = false;
    self.question7 = false;
    self.question8 = false;
    self.question9 = false;
    self.header = false;
    self.navbar = true;
    self.results = false;

  } else {
    self.logoHead= false;
    self.question1 = false;
    self.question2 = false;
    self.question3 = false;
    self.question4 = false;
    self.question5 = false;
    self.question6 = false;
    self.question7 = false;
    self.question8 = false;
    self.question9 = false;
    self.header = true;
    self.navbar = true;
    self.results = true;
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
    console.log(answer);
    self.question5 = false;
    self.question6 = true;
  };

  self.next6 = function(answer) {
    self.desiredPetObject.train=answer;
    console.log(answer);
    self.question6 = false;
    self.question7 = true;
  };

  self.next7 = function(answer) {
    self.desiredPetObject.train=answer;
    console.log(answer);
    self.question7 = false;
    self.question8 = true;
  };

  self.next8 = function(answer) {
    self.desiredPetObject.train=answer;
    console.log(answer);
    self.question8 = false;
    self.question9 = true;
  };

  self.next9 = function(answer) {
    self.desiredPetObject.size=answer;
    self.result(self.desiredPetObject);
    self.question9 = false;
    // self.logoHead = false;
    self.header= true;
    self.navbar = true;
    self.results = true;
  };

  self.save = function(){
    self.result(self.desiredPetObject);
  };

  self.login = function(){
    auth.$signInWithPopup("google").then(function(firebaseUser) {
      console.log("Firebase Authenticated as: ", firebaseUser.user.displayName);
      firebaseUser.user.getToken().then(function(idToken){
        PupFactory.saveResults(self.desiredPetObject, idToken);
      });
    }).catch(function(error) {
      console.log("Authentication failed: ", error);
    });
  };

  auth.$onAuthStateChanged(function(firebaseUser){
    // firebaseUser will be null if not logged in
    if(firebaseUser) {
      // This is where we make our call to our server
      firebaseUser.getToken().then(function(idToken){
        $http({
          method: 'GET',
          url: '/auth',
          headers: {
            id_token: idToken
          }
        }).then(function(response){
          self.secretData = response.data;
        });
      });
    } else {
      console.log('Not logged in or not authorized.');
      self.secretData = "Log in to get some secret data.";
    }

  });

  self.logOut = function(){
    auth.$signOut().then(function(){
      $location.path('/welcome').replace();
      console.log('Logging the user out!');
    });
  };
}]);
