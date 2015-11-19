var app= angular.module("myApp",[]);
app.controller("myCtrl",function($scope){
    $scope.name="Kha Nguyen";
    $scope.user={name:"Kha Nguyen User"}
});
app.controller("myNestedCtrl", function($scope){});