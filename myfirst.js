var http = require('http')
var dt = require('./Datetime')

let server = http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write("Current datetime is "+dt.dateTime());
	res.write("\n");
	res.end('Hello World');
})

console.log("Before starting server on port 3420");

server.listen(3420)
/*
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);*/