var app= angular.module("myApp",[]);
app.controller("myCtrl",function($scope){
   $scope.items = ["settings","home","other"];
    $scope.selection = $scope.items[0];
});