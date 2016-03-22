// CONTROLLER: home-controller
// Controls home page. (This is essentially a copy of photo-controller, without the photo preview.)
// Injects: $scope, $rootScope, Photo 

app.controller('home-controller', ['$state', '$scope', 'Photo', function($state, $scope, Photo) {
    $scope.takePhoto = function() {
        var options = {
        destinationType: navigator.camera.DestinationType.FILE_URI,
        quality: 60,
        correctOrientation: true,
        saveToPhotoAlbum: false
        };
        
        Photo.getPicture(options).then(function (imageURI) {
            Photo.setImage(imageURI);
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
        }, null);
    }
    
    $scope.setToDefaultPhoto = function() {
        Photo.setImage("img/default.jpg");
        $state.go('modify');
    }
}]);