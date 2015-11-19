var app = angular.module("myApp",[]);
app.controller("myCtrl", function($scope){
    $scope.visible = true;
    
    $scope.toggle = function(){
        $scope.visible = !$scope.visible;
    };
});