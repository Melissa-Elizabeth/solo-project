PupApp.factory('PupFactory', ['$http', function($http) {

  var dogs ={list: []};
  var currentPup={details: {}};
  var desiredPetObject={};

  function result(desiredPetObject) {
    var params = {shed: desiredPetObject.shed, drool: desiredPetObject.drool, bark: desiredPetObject.bark, apartment: desiredPetObject.apartment, kids: desiredPetObject.kids};
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




  return {
    dogs: dogs,
    result: result,
    getPup: getPup,
    currentPup:currentPup,
    desiredPetObject:desiredPetObject



  };
}]);
