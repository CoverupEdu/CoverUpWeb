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
        templateUrl: 'templates/home.html',
        controller: 'home-controller'
    })
    .state('photo', {
        url: '/photo',
        templateUrl: 'templates/photo.html',
        controller: 'photo-controller'
    })
    .state('modify', {
        url: '/modify',
        templateUrl: 'templates/modify.html',
        controller: 'modify-controller'
    })
    .state('study', {
        url: '/study',
        templateUrl: 'templates/study.html',
        controller: 'study-controller'
    })
	.state('testroot', {
        url: '/test',
        templateUrl: 'templates/testroot.html',
        controller: '???????'
    })
	.state('loctest', {
        url: '/loctest',
        templateUrl: 'templates/loctest.html',
        controller: 'loctest-controller'
    })

    $urlRouterProvider.otherwise('/home');
});

app.directive('resize', function ($window) {
    return function (scope, element, attr) {
        var w = angular.element($window);
         scope.$watch(function () {
            return {
                'h': $window.innerHeight,
                'w': $window.innerWidth
            };
        }, function () {
            scope.setStyleAll();
        }, true);

        w.bind('resize', function () {
            scope.$apply();
        });
    }
})

app.controller('name-here-controller', function($scope, $ionicPopover, $rootScope, $timeout) {
	
	});


