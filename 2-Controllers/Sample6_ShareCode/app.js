var app= angular.module("myApp",[]);
//factory method creates a singleton object
app.factory("myCommon",function(){
    var users = ["Kha","Kenrich","Kristpher"];
    return{
        all: users,
        first: users[0]
    }
});
//minify need to change to text
//app.controller("myCtrl",["$scope","myCommon",function($scope,myCommon){}]);
app.controller("myCtrl",function($scope,myCommon){
   $scope.users = myCommon.all;
});
//app.controller("myNestedCtrl",["$scope","myCommon",function($scope,myCommon){}]);
app.controller("myNestedCtrl", function($scope,myCommon){
    $scope.firstUser = myCommon.first;
});