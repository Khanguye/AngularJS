var app= angular.module("myApp",[]);
app.controller("myCtrl",function($scope){
   
});
app.directive("myWidget",function(){
    return{
        restrict:"E",
        transclude:true,
        template:"<h3>Google</h3><ng-transclude></ng-transclude>"
    
    }
});


