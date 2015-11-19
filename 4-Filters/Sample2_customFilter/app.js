var app= angular.module("myApp",[]);

app.filter("reverse",function(){
    return function(input){
        var result="";
        input=input || "";//make sure not undefine string
        for(var i=0;i<input.length;i++)
            {
                result = input.charAt(i) + result;
            }
        return result;
    };
});
