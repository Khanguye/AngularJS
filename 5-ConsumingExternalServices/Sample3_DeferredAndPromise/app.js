var app= angular.module("myApp",[]);

app.controller("myController",function($scope,$http,$q){
   var stCall = $http.get("http://www.filltext.com/?rows=100&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true");
    var secCall = $http.get("http://www.filltext.com/?rows=100&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true");
    var rdCall = $http.get("http://www.filltext.com/?rows=100&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true");
    
    //Promise all finish
    $q.all([stCall,secCall,rdCall]).then(function(result){
       var tmp=[];
        angular.forEach(result,function(response){
            tmp.push.apply(tmp,response.data);
        });
        return tmp;
    }).then(function(tmpResult){
        $scope.users = tmpResult;
        console.log($scope.users);
    });
    
    // deferred method
    function deferMethod(success){
        var deferred = $q.defer();
        $timeout(function(){
            if(success){
                deferred.resolve({message:"Everything is good"});
            }else{
                deferred.reject({message:"This is bad"});
            }
        },5000);
        
        return deferred.promise;
    };
    // this method will call from main page
    $scope.deferredMethod = fucntion(success){
        deferMethod(success).then(function(data){
            $scope.deferredValue = data.message;
        }
                                  ,function(data){
            $scope.deferredValue = data.message;
            
        });
    
    }
    
});
