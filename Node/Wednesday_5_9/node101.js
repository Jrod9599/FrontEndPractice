// At teh top, put your requred node modules.
// Require is kind of like the node version of <script>

//http is part of node core! we dont have to install
// or ask for it. It comes with node. Just require it.
// Node can run lean! If it doesnt need it, it wont come with it

const http = require("http");

// fs = file system. fs gives node access to the computer it runs 
//part of node. no need to isntall. it gives node access to the file system 
// on this computer. the computer running the js file.

const fs = require("fs");

//createServer takes 2 arguments
//	1. request
//	2. response
const server = http.createServer((req, res)=>{
	// console.log("Inside creatServer()");
	// console.log(req.url);
	if(req.url === `/`){
		//write head takes 2 minimum of args:
			// 1. status code
			// 2. mime-type of whatever is being sent back
		res.writeHead(200, {"conent-type":"text/html"});
		res.write(`<h1>Server Responding!"</h1>`);
		res.end();
	}
	else{
		res.writeHead(404, {"conent-type":'text/html'});
		res.write(`<h1>Requested page not found!!</h1>`);
		res.end();
	}
});


//Tell the server we created with teh http object to listen for http traffic(duh) on port 8080
//when a request comes in on port 8080, via  http, the callback/anon
// function in createSErver will fire off with the req and res objects available
server.listen(8080);