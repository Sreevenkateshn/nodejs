let fs = require('fs');

fs.appendFile("sampleFile.txt","This is append text",function(err){
	if(err){
		throw err
	}
	console.log("if file present then append the text else create one and append the text")
})

fs.open("sampleFile1.txt","w",function(err){
	if(err){
		throw err
	}
	console.log("open a file in writing mode if not present create one")
})

fs.writeFile("sampleFile2.txt","Hello content!",function(err){
	if(err){
		throw err
	}
	console.log("write to a file if present if not present create one");
})

fs.unlink('sample.txt',function(err){
	if(err){
		// throw err
		console.log("error here no file "+JSON.stringify(err))
	}
	console.log("Deleted");
})

fs.rename('sampleFile2.txt', 'sampleFile3.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});