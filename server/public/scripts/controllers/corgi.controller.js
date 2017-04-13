
PupApp.controller('CorgiController', ['Upload', function ( Upload) {

  $scope.submit = function() {
    if ($scope.form.file.$valid && $scope.file) {
      $scope.upload($scope.file);
    }
  };

  var ctrl = this;

  //file variables
  ctrl.file = '';
  ctrl.uploads = [];
  ctrl.comment = '';

  ctrl.submit = function () {
    console.log('what da?');
    console.log(ctrl);

    console.log('file',ctrl.file);


    ctrl.upload(ctrl.file);

  };

  var photoToPost = {
    data: {
      file: ctrl.file,
      comment: ctrl.comment
    }

  };
  ctrl.getImages = function () {
    $http.get('/photos')
    .then(function(response) {
      ctrl.photoList = response.data;
      console.log('GET /photos ', response.data);
    });
  };


  ctrl.upload = function(file) {

    Upload.upload({
      url: '/photos',
      data: {
        file: file,
        //can add more variables to data to store in DB
        comment: ctrl.comment

      }
    }).then(function(resp) {
      console.log('Success ' + resp.config.data.file.name + ' uploaded. Response: ' + resp.data);
      ctrl.getImages();
      ctrl.file = "";
      ctrl.comment = "";
    }, function(resp) {
      console.log('Error status: ' + resp.status);
    }

  );
};

}]);
