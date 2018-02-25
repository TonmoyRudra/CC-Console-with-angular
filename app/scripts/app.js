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
        .when('/channel', {
            templateUrl: 'views/channel.html',
            controller: 'ChannelCtrl',
            caseInsensitiveMatch: true,

        })
        .when('/user', {
            templateUrl: 'views/user.html',
            controller: 'UserCtrl',
            caseInsensitiveMatch: true,

        })
        .when('/alert', {
            templateUrl: 'views/channel.html',
            controller: 'ChannelCtrl',
            caseInsensitiveMatch: true,

        })
        .when('/camera', {
            templateUrl: 'views/channel.html',
            controller: 'ChannelCtrl',
            caseInsensitiveMatch: true,

        })
        .otherwise('/');
});
