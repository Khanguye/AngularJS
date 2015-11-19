var app= angular.module("myApp",[]);

app.controller("myCtrl",function($scope){
   
});
app.directive("myWidget",function(){
    var myCompile = function(tElement,tAttributes){
        //step1: Process Element Here. The scope does not create yet.
        var content = tElement.children();
        console.log(tElement);
        console.log(content);
         for(var i=1;i<tAttributes.num;i++)
                    {
                        tElement.append(content.clone());
                    };
        
        
        return {
          pre: function(scope, iElem, iAttrs){
            console.log(iElem + ': pre link');
          },
          post: function(scope, iElem, iAttrs){
            console.log(iElem + ': post link : write codes here');
          }
        }
      
    };
    
    return{
        restrict:"E",
        compile:myCompile
    };
});

