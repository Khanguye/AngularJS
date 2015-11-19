var app= angular.module("myApp",[]);
app.controller("myCtrl",function($scope){
   
});
app.directive("myWidget",function(){
    var linkFunction = function(scope,element,attributes){
        console.log(element);
        var child = element.children()[0];
        $(child).on("click", function(){
            $(this).css({"background-color":"red"});
        });
    };
    return{
        restrict:"E",
        link: linkFunction
    }
});