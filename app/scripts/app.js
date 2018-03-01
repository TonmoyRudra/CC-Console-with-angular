/*
 * Copyright (c) 2017 by AirFrance.
 * All Rights Reserved
 * AirFrance Confidential
 * @ngdoc overview
 * @name CiscoCloudConsoleApp
 * @description
 * # CiscoCloudConsoleApp
 *
 * Main module of the application.
 */
var ciscoCloudConsoleApp = angular.module('CicsoCloudConsole', ['ngRoute']);

ciscoCloudConsoleApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/login/login.html',
            controller: 'LoginCtrl',
            caseInsensitiveMatch: true,
        })
        .when('/channel', {
            templateUrl: 'views/main/channel.html',
            controller: 'ChannelCtrl',
            caseInsensitiveMatch: true,

        })
        .when('/user', {
            templateUrl: 'views/main/user.html',
            controller: 'UserCtrl',
            caseInsensitiveMatch: true,
        })
        .when('/alert', {
            templateUrl: 'views/main/alert.html',
            controller: 'AlertCtrl',
            caseInsensitiveMatch: true,

        })
        .when('/camera', {
            templateUrl: 'views/main/camera.html',
            controller: 'CameraCtrl',
            caseInsensitiveMatch: true,

        })
        .otherwise('/channel');
});
