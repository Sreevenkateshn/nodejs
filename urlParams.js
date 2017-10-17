let http = require("http");
let url = require("url")

var server = http.createServer(function(req,res){

	res.writeHead(200,{"Content-Type":"text/html"})
	var q = url.parse(req.url,true).query
	res.write(q.year+" "+q.month)
	res.end();

})
server.listen(3500)
console.log("ping url with http://localhost:3500/?query=param&query=param");