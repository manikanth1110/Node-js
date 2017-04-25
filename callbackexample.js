var sum=function(a,b){return a+b;}
var total=sum(1,2);
console.log(total);
var add=function(a,b,callback){callback(a+b);}
var x=function(result){console.log(result+5);}
//passing x as callback
//result param is equivalent to a+b
add(1,2,x);