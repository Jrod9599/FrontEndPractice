// WE have access to the express module, because we used
// the npm to install it. Unlike http and fs, it is NOT
// part of core. It's an extension
const express = require('express'); //by default goes into the node_modules and looks for the folder called express then index.js, 
									//node_modules comes from the install
const app = express();

// app.get() takes two arguments
	// 1. teh endpoint with verb
	// 2. callback to run for that route
app.get('/', (req, res)=>{
	res.send(`Hello, World!`);	//.send,.JSON, .render, etc. bunch of new commands
});

app.listen(3000, console.log(`App is listening on port 3000 with nodemon`)); //can do it here
console.log("App is listening on port 3000"); //rob just likes doing it here