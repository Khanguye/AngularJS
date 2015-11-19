var app= angular.module("myApp",[]);


app.directive("boxes",function(){
    return{
        restrict:"E",
        scope:{},
        controller:function($scope,$element,$attrs){
            $scope.content = [];
            
            this.addSquareBox=function(){
                $scope.content.push("SquareBox");
            }
            this.addRectBox=function(){
                $scope.content.push("RectBox");
            }
            
        },
        link:function(scope,element){
            console.log("Boxes Link Func");
            element.bind("mouseenter",function(){
                console.log(scope.content);
            })
        }
    };
});
app.directive("squareBox",function(){
    return{
        require:"boxes",
        link: function(scope,element,attrs,boxesCtrl)
        {
            console.log("SquareBoxes Link Func");
            boxesCtrl.addSquareBox();
        }
        
    }
});
app.directive("rectBox",function(){
    return{
        require:"boxes",
        link: function(scope,element,attrs,boxesCtrl)
        {
            console.log("RectBox Link Func");
            boxesCtrl.addRectBox();
        }
        
    }
});


