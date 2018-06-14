setTimeout(()=>{
	console.log("I am first") //third
}, 0);  //same as setTimeout(function(){})

console.log("I am second"); //first

setTimeout(()=>{
	console.log("I am third") //fourth
});

for(let i = 0; i < 100001; i++){
	if(i === 100000)
	console.log("I am fourth") //second
}