let http = require('http');
let fs = require("fs");
let url = require("url");

let server = http.createServer(function(req,res){
	var testUrl = url.parse(req.url)
	// console.log(q.host); //returns 'localhost:8080'
	// console.log(q.pathname); //returns '/default.htm'
	// console.log(q.search); //returns '?year=2017&month=february'
	// var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
	console.log("pathname ",testUrl.pathname);
	fs.readFile("."+testUrl.pathname,function(err,data){
		if(err){
			res.writeHead(404,{'Content-Type':'text/html'})
			res.write("Page Not Found");
			return res.end()
		}
		res.writeHead(200,{'Content-Type':'text/html'});
		res.write(data);
		return res.end();
	})

})

console.log("listen at 8010 with white.html or orange.html")
server.listen(8010)