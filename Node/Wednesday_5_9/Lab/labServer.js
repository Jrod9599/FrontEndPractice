const http = require('http');
const fs = require('fs');

function renderPage(){

	const theHTMLToGet = fs.readFileSync('./tictactoe.html');
	return theHTMLToGet;

}

const server = http.createServer((req, res)=>{

	if(req.url === '/'){
		res.writeHead(200,{'content-type':'text/html'});
		res.end(renderPage());
	}
	else if(req.url ==='/tictactoe.css'){
		res.writeHead(200,{'content-type':'text/css'});
		const css = fs.readFileSync('tictactoe.css');
		res.end(css);
	}
	else if(req.url ==='/tictactoe.js'){
		res.writeHead(200,{'content-type':'text/js'});
		const js = fs.readFileSync('tictactoe.js');
		res.end(js);
	}
	else if(req.url === '/restricted'){
		res.writeHead(403, {'content-type':"text/html"})
		res.write(`<h1>403 stuff</h1>`);
		res.end();
	}
	else if(req.url === '/apikey'){
		res.writeHead(400, {'content-type':"text/html"})
		res.write(`<h1>400 error</h1>`);
		res.end();
	}
	else{
		res.writeHead(404, {"conent-type":'text/html'});
		res.write(`<h1>Requested page not found!!</h1>`);
		res.end();
	}

})


server.listen(3000);
console.log('Server is listening on port 3000');