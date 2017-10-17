let http = require('http');
let fs = require('fs');

var server = http.createServer(function(req,res){
	fs.readFile("demohtml.html",function(error,data){
		res.writeHead(200,{"Content-Type":"text/html"})
		res.write(data)
		res.end();

	})

})
console.log("listen from 2309 port")
server.listen('2309')