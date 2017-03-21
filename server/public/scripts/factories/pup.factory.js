myApp.factory('PupFactory', ['$http', function($http) {

  var dogs ={list: []};


   function result(desiredPetObject) {
     var params = {shed: desiredPetObject.shed, drool: desiredPetObject.drool, apartment: desiredPetObject.apartment};
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

  //  function shedLow() {
  //    $http({
  //      method: 'GET',
  //      url: '/shedLow'
  //    }).then(function(response) {
  //      console.log(response.data);
  //      dogs.list = response.data;
  //    });
  //   console.log("we hit it");
  //  }


return {
  dogs: dogs,
  result: result

};
}]);
