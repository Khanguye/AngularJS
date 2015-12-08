var app= angular.module("myApp",['ngAnimate']);
app.controller("myCtrl",["$scope","$http","$timeout",function($scope,$http,$timeout){
    $scope.users =[];
    
    function Load10More(){
        
    $http.get("http://www.filltext.com/?rows=10&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true").
    success(function(data,status,headers,config){
        $scope.users.push.apply($scope.users,data);
    }).
    error(function(data,status,headers,config){
        $scope.error="Cannot retrieve data";
    });
        
    };
    function ScrollBottom(){
          $timeout(function(){
                $("html, body").animate({ scrollTop: $(document).height() }, "slow");
        },1000);
     }
    //init
    Load10More();
    //event
    $scope.LoadMore=function(){
       Load10More();
       ScrollBottom();
    }
    //watch
    $scope.$watch("searchText",function(){
       ScrollBottom();
    });
}]);
/*
$http.get
$http.head
$http.post
$http.put
$http.delete
$http.jsonp ==> URL?callback=JSON_CALLBACK
$http.patch
*/