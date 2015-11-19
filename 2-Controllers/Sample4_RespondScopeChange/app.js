var app= angular.module("myApp",[]);
app.controller("myCtrl",function($scope){
    $scope.name="Kha Nguyen";
    $scope.$watch("name",function(newValue,oldValue){
        if($scope.name.length>0){
            $scope.greeting = "Greetings " + $scope.name;
        }
            
    });
});