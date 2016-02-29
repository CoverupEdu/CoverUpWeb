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
    

    var poptemplate = '<ion-popover-view class="label-popover">' + '<h3 ng-hide="labelEdit" class="title">{{labels[curIndex].label}}</h3>' + '<input type="text" ng-show="labelEdit" ng-model="curLabel" ng-change="sendInput(curLabel)">' + '<button class="button energized button-icon icon ion-ios-circle-filled" ng-click="swapBool2(); curLabel = labels[curIndex].label || $scope.nullString" ng-style={"margin-right":"30px"}></button>' + '<button class="button energized button-icon icon ion-ios-circle-filled" ng-click="swapBool3(); deleteLabel()" ng-style={"margin-left":"30px"}></button>' + '<script>var curLabel = labels[curIndex].label</script>' + '</ion-popover-view>';
	var menu = '<ion-popover-view class="label-popover">' + '<h5 ng-show="createNew" class="title" ng-trim="true">Click somewhere</h5>' + '<h5 ng-hide="createNew" class="title" ng-trim="true">Label & click!</h5>' + '<h3 ng-show="invalidLabel" class="title">invalid</h3>' + '<h3 class="title">{{$scope.xpos}}</h3>' + '<h3 class="title">{{$scope.ypos}}</h3>' + '<button class="button energized button-icon icon ion-ios-circle-filled label" ng-click="swapBool($scope)"></button>' + '</ion-popover-view>';
	
    $scope.popover = $ionicPopover.fromTemplate(poptemplate, {
        scope: $scope
    });
	$scope.menu = $ionicPopover.fromTemplate(menu, {
        scope: $scope
    });
	
	$scope.sendInput = function(curl) {
		$rootScope.curLabel = curl;
	}
	
	$scope.deleteLabel = function() {
		$scope.labels.splice($scope.curIndex, 1);
		$scope.popover.hide();
	}
	
	$scope.swapBool1 = function() {
		$scope.createNew = !$scope.createNew;
	}
	
	$scope.swapBool2 = function() {
		$scope.labelEdit = !$scope.labelEdit;
		$scope.labels[$scope.curIndex].label = $rootScope.curLabel;
	}
	
	$scope.swapBool3 = function() {
		$scope.labelEdit = false;
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
	$scope.openMenu = function(event) {
		$scope.menu.show($event);
	}
}])
