var app= angular.module("myApp",['ngResource']);

app.factory("myPostXml",function($resource){
    return $resource("http://www.thomas-bayer.com/sqlrest/CUSTOMER/:id");
});
app.controller("myController",function($scope,myPostXml){
   myPostXml.query(function(data){
       $scope.posts = data;
   });
  /*  myPostXml.get({id:1},function(data){
       $scope.post = data;
    });
    myPostXml.save(data);
    myPostXml.delete({id:1}); */
});