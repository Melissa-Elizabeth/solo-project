myApp.factory('PupFactory', ['$http', function($http) {

  var dogs ={list: []};


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




return {
  dogs: dogs,
  result: result

};
}]);
