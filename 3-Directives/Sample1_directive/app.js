var app= angular.module("myApp",[]);
app.controller("myCtrl",function($scope){
   $scope.items = ["settings","home","other"];
    $scope.selection = $scope.items[0];
    
    $scope.clickMe = function($event){
        var target = $event.currentTarget;
        alert(target.innerText);
    }
});