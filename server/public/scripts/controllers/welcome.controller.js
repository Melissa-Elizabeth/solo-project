PupApp.controller('WelcomeController', ['PupFactory','$firebaseAuth','$location', '$http', function(PupFactory, $firebaseAuth, $location, $http){
  var auth = $firebaseAuth();
  var self = this;
  self.getUser=PupFactory.getUser;

console.log('WelcomeController loaded');
self.login = function(){
  auth.$signInWithPopup("google").then(function(firebaseUser) {
    console.log("Firebase Authenticated as: ", firebaseUser.user.displayName);
    $location.path('/home').replace();
    firebaseUser.user.getToken().then(function(idToken){
      // PupFactory.saveResults(self.desiredPetObject, idToken);
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
      self.getUser();
    });
  } else {
    console.log('Not logged in or not authorized.');
    self.secretData = "Log in to get some secret data.";
  }

});
}]);
