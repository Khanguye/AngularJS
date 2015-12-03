var app= angular.module("myApp",['ngAnimate']);
app.controller("myCtrl",function($scope,$http){
    $http.get("http://www.filltext.com/?rows=100&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true").
    success(function(data,status,headers,config){
        $scope.users=data;
    }).
    error(function(data,status,headers,config){
        $scope.error="Cannot retrieve data";
    });
})
/*
$http.get
$http.head
$http.post
$http.put
$http.delete
$http.jsonp ==> URL?callback=JSON_CALLBACK
$http.patch
*/