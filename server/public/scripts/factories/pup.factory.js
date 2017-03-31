// PupApp.factory('PupFactory', ['$http', '$firebaseAuth', function($http, $firebaseAuth){
//
//   var dogs ={list: []};
//   var users ={list: []};
//   var currentPup={details: {}};
//   var desiredPetObject={};
//   var auth = $firebaseAuth();
//
//   function result(desiredPetObject) {
//     var params = {shed: desiredPetObject.shed, drool: desiredPetObject.drool, bark: desiredPetObject.bark, apartment: desiredPetObject.apartment, kids: desiredPetObject.kids};
//     console.log(params);
//     $http({
//       method: 'GET',
//       url: '/result',
//       params: params
//     }).then(function(response) {
//       console.log(response.data);
//       dogs.list = response.data;
//     });
//     console.log("we hit it");
//   }
//
//   function saveResults(userResult, idToken) {
//     var search = {shed: userResult.shed, drool: userResult.drool, bark: userResult.bark, apartment: userResult.apartment, kids: userResult.kids };
//     $http({
//       method: 'POST',
//       url: '/save',
//       data: search,
//       headers: {
//         id_token: idToken
//       }
//     }).then(function(response){
//       console.log(response);
//
//     });
//   }
//
//
//   function getPup(pupID){
//     $http({
//       method: 'GET',
//       url: '/dog/' + pupID,
//     }).then(function(response) {
//       console.log(response.data);
//       currentPup.details = response.data;
//     });
//   }

// auth.$onAuthStateChanged(function(firebaseUser){
//   // firebaseUser will be null if not logged in
//   if(firebaseUser) {
//     // This is where we make our call to our server
//     firebaseUser.getToken().then(function(idToken){
//       $http({
//         method: 'GET',
//         url: '/login',
//         headers: {
//           id_token: idToken
//         }
//       }).then(function(response){
//         self.secretData = response.data;
//       });
//     });
//   } else {
//     console.log('Not logged in or not authorized.');
//     self.secretData = "Log in to get some secret data.";
//   }
//
// });


//   return {
//     dogs: dogs,
//     result: result,
//     getPup: getPup,
//     currentPup:currentPup,
//     desiredPetObject:desiredPetObject,
//     saveResults: saveResults
//
//
//
//   };
// }]);





PupApp.factory('PupFactory', ['$http', '$firebaseAuth', function($http, $firebaseAuth) {

  var dogs ={list: []};
  var users={list: []};
  var currentPup={details: {}};
  var desiredPetObject={};
  var daResults={details:{}};
  var myResults={list: []};
  var auth = $firebaseAuth();

  function result(desiredPetObject) {
    var params = {shed: desiredPetObject.shed, drool: desiredPetObject.drool, bark: desiredPetObject.bark, apartment: desiredPetObject.apartment, kids: desiredPetObject.kids, train: desiredPetObject.train};
    console.log(params);
    $http({
      method: 'GET',
      url: '/result',
      params: params
    }).then(function(response) {
      console.log(response.data);
      dogs.list = response.data;
    });
    console.log("we hit it");
  }

  function getPup(pupID){
    $http({
      method: 'GET',
      url: '/dog/' + pupID,
    }).then(function(response) {
      console.log(response.data);
      currentPup.details = response.data;

    });
  }

  // function saveResults(desiredPetObject, idToken) {
  //   // var results = {shed: desiredPetObject.shed, drool: desiredPetObject.drool, bark: desiredPetObject.bark, apartment: desiredPetObject.apartment, kids: desiredPetObject.kids, train: desiredPetObject.train};
  // var results = dogs.list;
  // firebaseUser.user.getToken().then(function(idToken){
  // console.log(results);
  //     $http({
  //       method: 'POST',
  //       url: '/save',
  //       data: results,
  //
  //     }).then(function(response){
  //     console.log(response);
  //
  // });
  // });
  // }

  function getResult(userID){
    $http({
      method: 'GET',
      url: '/results/' + userID,
    }).then(function(response) {
      console.log(response.data);
      result(response.data);
    });
  }



  function saveResults(desiredPetObject) {
    // var results = dogs.list;


    auth.$onAuthStateChanged(function(firebaseUser){
      // firebaseUser will be null if not logged in
      if(firebaseUser) {
        // This is where we make our call to our server
        firebaseUser.getToken().then(function(idToken){
          $http({
            method: 'POST',
            url: '/save',
            data: desiredPetObject,
            headers: {
              id_token: idToken
            }
          }).then(function(response){
            myResults.list = response.data;
            getResult();
          });
        });
      } else {
        console.log('Not logged in or not authorized.');
        self.secretData = "Log in to get some secret data.";
      }


});
}








  return {
    dogs: dogs,
    result: result,
    getPup: getPup,
    currentPup:currentPup,
    desiredPetObject:desiredPetObject,
    saveResults:saveResults,
    myResults:myResults,
    getResult:getResult,
    users:users

  };
}]);
