var app= angular.module("myApp",[]);
app.controller("myCtrl",function($scope){
    $scope.value=1;
    $scope.increaseValue = function(incNumber){
        $scope.value += incNumber;
    };
});