let http = require('http');
let uc = require('upper-case');

var server = http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"text/html"});
	res.write(uc('test imported modules'));
	res.end();
})

server.listen(8030);
console.log("started listening at 8030");