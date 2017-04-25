var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());

app.post('/', function (req, res){
	
	fs.writeFile('helloworld.txt', req.body, function(err){
		if (err){response=err;}
		else{
			response="write succesful";
		}
		res.send(response);
	});
});
app.listen(3000, function(){
	console.log('Hey!! Server started at port 3000!')
})
exports.app=app;

	