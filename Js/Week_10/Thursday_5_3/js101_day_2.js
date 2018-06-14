// // .find(), .findIndex();
// // These are prototypes of Arrays

// const cities = require(`./cityData.js`);

// // cities.list.find(function(){ });

// // cities.list.find(function(){ });


// for(let i = 0; i < 10; i++){
// 	if(i == 5){
// 		continue;
// 	}
// 	console.log(i);
// }

// const myArray = ['Joe', 'Dan', 'Bill', 'Mike'];

// myArray.forEach(function(elem){
// 	console.log(elem);
// });

// const newArray = myArray.map(function(elem){
// 	return elem+1;
// });

// console.log(newArray);
// console.log(myArray);


// let arr3 = ['Jonathan', 'Newsha', 'Dina', 'Aleya'];

// for(value of arr3){
// 	console.log(value);
// }

// for(key in arr3){
// 	console.log(key);
// }


// const nameOfCoolGirl = `Joss`;
// for(let i = 0; i < nameOfCoolGirl.length; i++){
// 	console.log(nameOfCoolGirl[i]);
// }

// const strAsArray = nameOfCoolGirl.split("");
// console.log(strAsArray);

// const str = "The day is good, but long, at syntel";
// const strAsArray2 = str.split(",");

// strAsArray[0] = strAsArray[3];
// strAsArray.pop();
// console.log(strAsArray);
// const strAgain = strAsArray.join(``);
// console.log(strAgain);


// function sum_numbers(a,b = 3){ //if you dont give me a second argument ill defualt b to a value
// 	return a+b;
// }

// console.log(sum_numbers(1,4));
// console.log(sum_numbers(1)); 
// console.log(sum_numbers(1,2,5)); //if to many arguments it will ignore the extra

// function subtract(a,b) {
// 	// body...
// 	return a-b;
// }

// function run(callback, num1, num2){
// 	const x = callback(num1, num2);
// 	return x;
// }

// console.log(run(subtract,2,5));



//empty array
const arr = [];
console.log(typeof(arr));


//creates an empty object
const obj = {};
console.log(typeof(obj));

const func = function(){
	console.log("Test");
}

console.log(typeof(func));

// objects are a combination of properties (keys) and values
// sort of key:value pair
// syntax is:
const objeSyntax = {
	property: "value12"
}

objeSyntax.property // value 12
objeSyntax.table2 = ['toby', 'noelle'];
console.log(objeSyntax);
console.log(objeSyntax.property);

const student = {
	name: 'Amos',
	profession: `Developer`,
	language: [`java`, `javascript`],
	sayHello: function(){
		console.log("Habari");
	}
}

student.sayHello();
console.log(student.sayHello);
console.log(student.name);
console.log(student[`name`]);


let StudentArray = [student];
const student2 = {
	name: "hunter",
	profession: `ninja`,
}

StudentArray.push(student2);