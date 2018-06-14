const http = require('http');
const fs = require('fs');

function renderHomePage(){
	// res.writeHead(200, {
	// 	'content-type':'text/html'
	// });
	// res.end('<h1>Your page has loaded</h1>');
	const theHTMLtoget = fs.readFileSync('./homepage.html');
	return theHTMLtoget;
}

const server = http.createServer((req, res)=>{
	if(req.url == '/'){
		// renderHomePage(req, res);
		res.writeHead(200, {'content-type':'text/html'});
		res.end(renderHomePage());
	}
	else if(req.url === '/drnick.jpg'){
		res.writeHead(200,{'content-type':'image/jpg'});
		const img = fs.readFileSync('drnick.jpg');
		res.end(img);
	}
	else{
		console.log(`${req.url} was not found`);
		res.end(`Page not found`);
	} 		 	
});

server.listen(3000);
console.log(`Server is listening on port 3000...`);