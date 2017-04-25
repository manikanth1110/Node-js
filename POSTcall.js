var express = require('express');
var app = express();
var fs=require('fs');
app.post('/', function (req,res){
	
	fs.writeFile('helloworld.txt', 'h1', function(err,data){
		if (err){ response=err;}
		else{
			response="write succesfull";
		}
		
		res.send(response);
	});
}); 
app.listen(3000,function(){
	console.log('Hey! Server started aat port 3000!')
});
exports.app=app;