// CONTROLLER: modify-controller
// Controls the modify page.
// Injects: $scope, $rootScope, $ionicPopover, Photo, Labels
app.controller('modify-controller', ['$rootScope', '$window', '$ionicScrollDelegate', '$scope', '$ionicPopover', 'Photo', 'Labels', function($rootScope, $window, $ionicScrollDelegate, $scope, $ionicPopover, Photo, Labels) {
    $scope.labels = Labels.labels;
    $scope.photoService = Photo;
	$rootScope.labelEdit = false;
	$scope.curIndex = 0;
	$scope.nullString = "";
	$rootScope.curLabel;
	$scope.checkFocused;
	$scope.labelStyle = [];
	
	$ionicPopover.fromTemplateUrl('templates/modify-popover.html', {
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
	
	$scope.setStyleAll = function() {
		for (i = 0; i < $scope.labels.length; i++) {
			$scope.setStyle(i);
		}
	}
	
	$scope.setStyle = function(val) {
		$scope.labelStyle[val] = {
			left: ($scope.labels[val].x * 0.01 * document.getElementById('imagecont').getBoundingClientRect().width + 'px'),
			top: ($scope.labels[val].y * 0.01 * document.getElementById('imagecont').getBoundingClientRect().height + 'px')
		};
	}

	$scope.$on('popover.hidden', function() {
		$rootScope.labelEdit = false;
	});
	
	$scope.deleteLabel = function() {
		$scope.popover.hide();
		$scope.labels.splice($scope.curIndex, 1);
	}
	
    $scope.swapLabelEdit = function(boole) {
        if (boole) {$rootScope.labelEdit = !$rootScope.labelEdit;}
        else {$rootScope.labelEdit = false;}
        $scope.labels[$scope.curIndex].label = $rootScope.curLabel;
    }
	
	$scope.eventManage = function($event) {
		$scope.addControl($event); 
		//popup?
	}
	
	$scope.addControl = function(event) {
        $rootScope.labelEdit = true;
		$rootScope.insReset();
        $scope.xpos = (event.offsetX - 20) / (0.01 * document.getElementById('imagecont').getBoundingClientRect().width);
        $scope.ypos = (event.offsetY - 23) / (0.01 * document.getElementById('imagecont').getBoundingClientRect().height);
        Labels.addLabel($scope.xpos, $scope.ypos, "");
	}
	
    $scope.openPopover = function(event, index) {
		$scope.checkFocused=true;
        $scope.index = {value:index};
		$scope.curIndex = index;
        $scope.popover.show(event);
		$rootScope.textFocus();
    }
}])