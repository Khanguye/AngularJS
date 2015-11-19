var app= angular.module("myApp",[]);
app.controller("myCtrl",function($scope){
    $scope.value=1;
    $scope.getIncreaseValue = function(incNumber){
       return $scope.value + incNumber;
    };
});