console.log(document);
console.dir(document);
//alert('Hey sheeple');
// When you are in the browser...EVERYTHING belongs to the windows object
// there is not exception to this, so you dont even need to include it

// var dragon = document.getElementById('dragon');
// console.log(dragon);
// dragon.innerHTML = `<h1>JavaScript was here!</h>`;


//when the onlick happens to the button... this function is used
function rollDice(){

	console.log(`The user just clicked the roll button`);

	var rand1 = Math.ceil(Math.random() * 6);
	var rand2 = Math.ceil(Math.random() * 6);

	// The dice images all follow the following convention:
	// dN.gif where n is teh number between 1-6
	// Use JS to update the DOM. Update teh dice images,
	// so that they use the iamge from our random numbers

	// let dice = document.getElementById('dice');
	dice.children[0].src = `./dragon-assets/dragon-assets/d${rand1}.gif`;
	dice.children[1].src = `./dragon-assets/dragon-assets/d${rand2}.gif`;

	 if((rand1 + rand2) > 8){
		document.getElementById('dragon').children[0].src = `http://78.media.tumblr.com/d638dfb02be10563bdc6833077ea056b/tumblr_nvayfpruhC1r8q9x8o1_540.gif`;
	 	document.getElementById('dragon').children[0].style.width = '500px';
	 	document.getElementById('dragon').children[0].style.height = '500px';
		document.getElementById('message').innerHTML = `<h1> You have defeated the dragon </h>`
	 }
	 else{ 
	 	document.getElementById('dragon').children[0].src = `https://i.pinimg.com/originals/68/f8/9f/68f89f7d5e71d95fd81b9d0be6f7d7ab.gif`;
		document.getElementById('dragon').children[0].style.width = '500px';
	 	document.getElementById('dragon').children[0].style.height = '500px';
		document.getElementById('message').innerHTML = `<h1> The Dragon has killed you</h>`
	 }

}