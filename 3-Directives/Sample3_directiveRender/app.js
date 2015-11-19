var app= angular.module("myApp",[]);
app.controller("myCtrl",function($scope){
   
});
app.directive("myWidget",function(){
    return{
        restrict:"E",
        template:"<p> Welcome to Angular!</p>",  //OR templateUrl: "html file"
        replace:true //Replace entirely the element
       
    }
});