// Promises...
// Javascript is async.

// console.log("1");
// setTimeout(()=>{
// 	console.log("2")
// },0);
// console.log("3");
// for(let i = 0; i < 10000000; i++){}
// console.log("loop is done");




// Initial requestto get list of movie
// With that list of movies, comes all their id's take the id's  and get the specific info
// With EACH movie data, we want to get teh cast list



// $.getJSON(movieURL, (movieData)=>{
// 	$.getJSON(specificMovieUrl, (thisMovie)=>{
// 		$.getJSON(specificMovieCastURL, (castData)=>{
// 			// finally, we can do something:
// 			// 1.movieData
// 			// 2. thisMovie
// 			// 3. castData
// 		})
// 	})
// })
// $.prototype.getJSON = function(url,callback){
// 	doing stuff...
// 	callback(dataIgot)
// }

// JS libraries to fake Promises
// -bluebird
// -q

// What is a promise?
// -all a promse is, is  aJS constructor(class) that gives you a few methods.
// -Hopefully these mehtods make your code easier to read
// Methods:
	// 1. then
	// 2. all
	// 3. race
	// 4. resolve
	// 5. reject

// promise takes 2 args:
	// 1. resolve callback
	// 2. reject callback
// let myFirstPromise = new Promise((resolve, reject)=>{
	
// });

console.log(myFirstPromise); 