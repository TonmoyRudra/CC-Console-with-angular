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
            templateUrl: 'views/channel.html',
            controller: 'ChannelCtrl',
            caseInsensitiveMatch: true,

        })
        .otherwise('/');
});

