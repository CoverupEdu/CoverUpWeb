// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic']);
app.run(function($ionicPlatform, $rootScope) {
    $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if(window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('index', {
        url: '/home',
        templateUrl: 'templates/home.html'
    })
    .state('photo', {
        url: '/photo',
        templateUrl: 'templates/photo.html',
        controller: 'photo-controller'
    })
    .state('learn', {
        url: '/learn',
        templateUrl: 'templates/learn.html',
        controller: 'learn-controller'
    })

    $urlRouterProvider.otherwise('/home');
});

app.controller('popover-controller', function($scope, $ionicPopover, $rootScope) {
	$scope.insLabel;

	$rootScope.editButton = function() {
		$rootScope.curLabel = $scope.insLabel;
		if (!$rootScope.labelEdit) {
			$scope.insLabel = $scope.labels[$scope.curIndex].label;
		}
		else {$scope.labels[$scope.curIndex].label = $rootScope.curLabel;}
		$rootScope.labelEdit = !$rootScope.labelEdit;
	};
	
	$rootScope.insReset = function() {
		$scope.insLabel = "";
	}
});