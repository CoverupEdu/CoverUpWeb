// CONTROLLER: photo-controller
// Controls the photo page.
// Injects: $scope, $rootScope, Photo 
app.controller('photo-controller', ['$scope', 'Photo', function($scope, Photo) {
    $scope.photo = null;
    $scope.takePhoto = function() {
        var options = {
        destinationType: navigator.camera.DestinationType.FILE_URI,
        quality: 60,
        correctOrientation: true,
        saveToPhotoAlbum: false
        };
        
        Photo.getPicture(options).then(function (imageURI) {
            Photo.setImage(imageURI);
            $scope.photo = Photo.image;
        }, null);
    };
    $scope.takePhotoFromGallery = function() {
        var options = {
        destinationType: navigator.camera.DestinationType.FILE_URI,
        quality: 75,
        correctOrientation: true,
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY 
        };
        
        Photo.getPicture(options).then(function (imageURI) {
            Photo.setImage(imageURI);
            $scope.photo = Photo.image;
        }, null);
    }
    
    $scope.setToDefaultPhoto = function() {
        Photo.setImage("img/default.jpg");
        $scope.photo = Photo.image;
    }
}]);