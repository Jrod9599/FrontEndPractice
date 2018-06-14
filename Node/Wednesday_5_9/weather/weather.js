const http = require('http');

const apikey = 'e312dbeb8840e51f92334498a261ca1d';
const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&APPID=${apikey}`;

// the http.get method takes 2 args
	// 1. where(endpoint)
	// 2. code to run when back, with the data as a param
const request = http.get(weatherUrl, (theResponce)=>{

	//console.log(theResponce);

	let weatherData = '';

	// .on takes two args:
		// 1. what even to do X on
		// 2. callback to run when event happens
	//data is a built in event for responce data
	theResponce.on('data', (chunkOfData)=>{
		// console.log(chunkOfData);
		// letconsole.log(`\n`);
		weatherData += chunkOfData;
	});

	//end is a built in event for responce data
	theResponce.on('end', ()=>{
		console.log(JSON.parse(weatherData)); //object from string to JSON
	})

});