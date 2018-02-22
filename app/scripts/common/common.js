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



const loadHeader = false;

const defUserImage = "/images/defaultuser.jpg";
const checkSession = chkS;