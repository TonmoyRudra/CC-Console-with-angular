/*
 * Copyright (c) 2017 by .
 * All Rights Reserved
 *  Confidential
 */
var csUser;
var comName,appName,token,userName="";

// const airlineConnectServiceUrl = "http://52.221.84.181:4001/"
// const airlineConnectServiceUrl = "http://74.209.170.79:8080/"
var chkS;
// const airlineConnectServiceUrl = "http://localhost:8080/"
//const baseUrlLocationApi="http://35.167.140.127:3300/"

if(localStorage.getItem('sessionUser')!=null){
    csUser=JSON.parse(localStorage.getItem('sessionUser'));
    comName=csUser.company_name;
    appName=csUser.app_name;
    token= csUser.access_token;
    userName=csUser.user_name;
    chkS=(localStorage.getItem('sessionToken')) === null ? "true" : "false";
}
const companyName=comName;
const applicationName=appName;
const sUserName=userName;

const appId = "21e7f672-589f-4861-a42c-6b7714893830" // (app name: AirlineConnect)
const companyId = "62f7afb0-cb9d-4f76-8bb6-469d700559c7" // (Company Name: Air France)
const authToken=token;



const loadMain = false;

const checkSession = chkS;


///////////Common
angular.module('CicsoCloudConsole').controller('CommonCtrl', ['$scope', '$http', '$location', CommonCtrl]);
function CommonCtrl($scope, $http, $location) {
    $scope.loadSegment = function (segment, ref) {
        $(".mainPanelLeft .tabText").removeClass("activeTabText");
        $(ref.target).closest('span').children("span.tabText").addClass("activeTabText");
        $location.path('/' + segment)
    }

    $scope.loadSegmentForRight = function (ref) {
        $(".mainPanelRight .tabText").removeClass("activeTabText");
        $(ref.target).closest('span').children("span.tabText").addClass("activeTabText");
       
    }

    //for active leftmenu with address location
    var url = window.location.href;
    var params = url.split('#/');
    if(params[1]=="channel"){
        $('.channel').addClass('active').siblings().removeClass('active');
        $(".channel").click();
        console.log("param" + params[1]);
    }
    else if(params[1]=="user"){
        $('.user').addClass('active').siblings().removeClass('active');
        $(".user").click();
        console.log("param" + params[1]);
    }
    else if(params[1]=="alert"){
        $('.alerts').addClass('active').siblings().removeClass('active');
        $(".alerts").click();
        console.log("param" + params[1]);
    }
    else if(params[1]=="camera"){
        $('.camera').addClass('active').siblings().removeClass('active');
        $(".camera").click();
        console.log("param" + params[1]);
    }

}
///////////////////