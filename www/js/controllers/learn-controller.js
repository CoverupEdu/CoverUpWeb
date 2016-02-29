// CONTROLLER: learn-controller
// Controls the learn page.
// Injects: $scope, $rootScope, $ionicPopover, Photo, Labels
app.controller('learn-controller', ['$rootScope', '$ionicScrollDelegate', '$scope', '$ionicPopover', 'Photo', 'Labels', function($rootScope, $ionicScrollDelegate, $scope, $ionicPopover, Photo, Labels) {
    $scope.labels = Labels.labels;
    $scope.photoService = Photo;
	$scope.createNew = false;
	$scope.labelEdit = false;
	$scope.curIndex = 0;
	$scope.nullString = "";
	$rootScope.curLabel;
    
	
	$ionicPopover.fromTemplateUrl('templates/popover.html', {
        scope: $scope
    }).then(function(popover) {
        $scope.popover = popover;
    });
    
    /* NOTE: fromTemplateUrl is occasionally reported to yield errors on mobile, alternative here:
    var poptemplate = (content, e.g. '<ion-popover-view class="label-popover">' + '<h3 class="title">text</h3>' + '</ion-popover-view>';)
    
    $scope.popover = $ionicPopover.fromTemplate(poptemplate, {
       scope: $scope
   });
    */
	
	$scope.sendInput = function(curl) {
		$rootScope.curLabel = curl;
	}
	
	$scope.deleteLabel = function() {
		$scope.popover.hide();
		$scope.labels.splice($scope.curIndex, 1);
	}
	
	$scope.swapCreateNew = function() {
        $scope.createNew = !$scope.createNew;
    }
    
    $scope.swapLabelEdit = function(boole) {
        if (boole) {$scope.labelEdit = !$scope.labelEdit;}
        else {$scope.labelEdit = false;}
        $scope.labels[$scope.curIndex].label = $rootScope.curLabel;
    }
	
	$scope.addControl = function(event) {
		if ($scope.createNew) {
			$scope.createNew = false;
			$scope.labelEdit = true;
			$scope.xpos = (event.gesture.touches[0].pageX - 20 + $ionicScrollDelegate.getScrollPosition().left) / (0.01 * document.getElementById('imagecont').getBoundingClientRect().width);
			$scope.ypos = (event.gesture.touches[0].pageY - 45 - 23 + $ionicScrollDelegate.getScrollPosition().top) / (0.01 * document.getElementById('imagecont').getBoundingClientRect().height);
			Labels.addLabel($scope.xpos, $scope.ypos, "");
		}
	}
	
    $scope.openPopover = function(event, index) {
        $scope.index = {value:index};
		$scope.curIndex = index;
		$rootScope.curLabel = $scope.labels[index].label;
        $scope.popover.show(event);
    }
}])
