var app= angular.module("myApp",[]);
app.controller("myCtrl",function($scope){
   
});
app.directive("myWidget",function(){
    var linkFunction= function(scope,element,attributes){
        scope.text = attributes["myWidget"];
    };
    
    return {
        restrict:"A",
        template:"<p>{{text}}</p>",
        link:linkFunction,
    }
});
app.directive("myWidget1",function(){
    var linkFunction= function(scope,element,attributes){
        scope.text = attributes["myWidget1"];
    };
    
    return {
        restrict:"A",
        template:"<p>{{text}}</p>",
        link:linkFunction,
        scope:{} //isolate scope
    }
});
app.directive("myWidget2",function(){
   
    
    return {
        restrict:"E",
        template:"<input type='text' ng-model='text'></input>",
        
        scope:{
            text:"@" //read only
        } 
    }
});
app.directive("myWidget3",function(){
   
    
    return {
        restrict:"E",
        template:"<input type='text' ng-model='text'></input>",
        scope:{
            text:"=" //bi-directive
        } 
    }
});
app.directive("myWidget4",function(){
   var linkFunction=function(scope,element,attributes){
            scope.text = scope.fn({count: 17});
        };
    
    return {
        restrict:"E",
        template:"<H3 >{{text}}</H3>",
        link:linkFunction,
        scope:{
            fn:"&" //call-back
        } 
    }
});



