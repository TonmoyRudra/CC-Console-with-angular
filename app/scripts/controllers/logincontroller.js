/*
 * Copyright (c) 2017 by CISCO.
 * All Rights Reserved
 * CISCO Confidential
 * @name CiscoCloud.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the CISCO
 */

var myApp = angular.module('CicsoCloudConsole').controller('LoginCtrl', ['$scope', '$http', '$location', LoginCtrl]);


function LoginCtrl($scope, $http, $location) {
    // var chkSession = (localStorage.getItem('sessionToken')) === null ? "false" : "true";
    // var isLoggedIn = (chkSession === 'true');
    // if (!isLoggedIn) {
    //     $location.path('/');
    //     return false;
    // } else {

        
    // }

    
    $scope.login = function(){
        loadMain == true;
        $location.path('/channel')
    }
}