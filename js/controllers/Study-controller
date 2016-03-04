// CONTROLLER: study-controller
// Controls the study page.
// Injects: $scope, $rootScope, $ionicPopover, Photo, Labels
app.controller('Study-controller', ['$rootScope', '$ionicScrollDelegate', '$scope', '$ionicPopover', 'Photo', 'Labels', function($rootScope, $ionicScrollDelegate, $scope, $ionicPopover, Photo, Labels) {
    $scope.labels = Labels.labels;
    $scope.photoService = Photo;
	$scope.curIndex = 0;
	$scope.nullString = "";
	$rootScope.labelEdit = false;
	$rootScope.curLabel;
    
	
	$ionicPopover.fromTemplateUrl('templates/study-popover.html', {
        scope: $scope
    }).then(function(popover) {
        $scope.popover = popover;
    });
	

    $scope.openPopover = function(event, index) {
        $scope.index = {value:index};
		$scope.curIndex = index;
        $scope.popover.show(event);
    }
}])
