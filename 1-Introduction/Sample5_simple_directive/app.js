var app = angular.module("myApp",[]);

app.directive("show",function(){
    return{
        link: function(scope,element,attributes){
            scope.$watch(attributes.show,function(value){
                element.css("display",value?'':'none');
            });
        }
    };
});