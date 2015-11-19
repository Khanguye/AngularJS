var app= angular.module("myApp",[]);


app.directive("tabs",function(){
    return{
        restrict:"E",
        transclude:true,
        scope:{},
        controller:function($scope,$element,$attrs){
            var panes = $scope.panes = [];
            
            $scope.select = function(pane){
                angular.forEach(panes,function(pane){
                    pane.selected = false;
                });
                pane.selected = true;
                console.log("Selected pane: ",pane.title);
            };
            
            this.addPane=function(pane){
                if(!panes.length) $scope.select(pane);//select 1st pane by default
                panes.push(pane);
            };
        },
        template:'<div class="tabable"><ul class="nav nav-tabs">'+
                    '<li ng-repeat="pane in panes" ng-class="{active:pane.selected}">' +
                        '<a href="" ng-click="select(pane)">{{pane.title}}</a>' +
                    '</li>' +
                    '</ul>' +
                  '<div class="tab-content"><ng-transclude></ng-transclude></div>' +
                  '</div>',
        replace:true
    };
});
app.directive("pane",function(){
    return{
        require:"^tabs",
        restrict:"E",
        transclude: true,
        scope:{
            title: "@"
        },
        link: function(scope,element,attrs,tabsCtrl)
        {
            console.log("pane Link Func");
            tabsCtrl.addPane(scope);
        },
        template:'<div class="tab-pane" ng-show="selected"><ng-transclude></ng-transclude></div>',
        replace:true
    };
});