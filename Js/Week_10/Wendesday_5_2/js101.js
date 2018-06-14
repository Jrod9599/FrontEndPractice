// printing stuff ...
console.log("Hello, World");
//alert("Hello, World");

// variables
// Same as is in every other language. A var is a palce to stash something 
// (a number, string, an array, object, boolean, etc. ) That you could 
//write yoruself everytime but var is faster

// Data-type available:
// 1. string
// 2. number
	// a. float
// 	b. double
// 	c. int
// 	d. bigInt
// 3. boolean - true, false
// 4. array
// 5. object
// 6. symbol

// JS variables are made dynamically like Python, Ruby, PhP. That means
// you dont have to declare the type. Its interptor 

// 3 ways to declare a variable in JS

var x = 1;
console.log(x);

var isTrue= 1;

for(let i = 0; i < 10; i++){
	console.log(i);
}
//console.log("value of i after the loop", i)

const y = 3;
//y = 4;

const myArr = [];

//javascript used camelCase

let name = "Robert Bunch";
name = 'Rober Bunch';
name = "Robert \"a Crazy Guy \" Bunch"

let age;
let firstName = "Dario";
let lastName = "Seays";

let fullName = firstName + " " + lastName;
console.log(fullName);


//string literal -----------v
const meaningOfLife = `The meaning of life is ${40 + 2}`;
console.log(meaningOfLife);

const sql1 = "SELECT * FROM user WHERE name = '" + name +"'";
const sql2 = `SELECT * FROM user WHERE name '${name}' `; 


//NUMBERS
// no float, no double...just numbers
const theYear = 2018;
const shortPi = 3.14;

console.log(typeof(shortPi));

const whatThe = fullName + 3;
console.log(whatThe);


//booleans
//1 or 0, off or on truee or false, yes or no
const theTruth = true;
const theLie = false;
console.log(typeof(theTruth));

//Incramenting...
let num = 1;
//postfixing
num++;
console.log(num);
num--;
console.log(num);

//conditionals
const a = 3;
const b = '3';

if(a == b){
	console.log("Equal");
}
// === compares data type
if(a === b){
	console.log("Equal");
}
if(a !== b){
	console.log("Equal");
}

//MATH object
let n = 12.2;
let roundedN = Math.round(n);
console.log(roundedN);

let ceilN = Math.ceil(n);
console.log(ceilN);

let floorN = Math.floor(n);
console.log(floorN);

let rand = Math.random();
console.log(rand);

let betweenOneAndTen = Math.ceil(rand*10);
console.log(betweenOneAndTen);


const myContacts = new Map();




//Arrays
//init empty array
let student = [];
student = ['Shane', 'Calder', 'Amber'];
//array.push, will add a new element onto the end of the array
student.push('Donell');
console.log(student);
console.log(student.length);

const finallyAGirl = 'tawni'
console.log(finallyAGirl.length)

//Any type of datatypes in any index in an array
// 1.string
// 2. array
// 3.object
// 4. booleans
// 5. number

const chaoticArr = [
	'mariono',
	436,
	['orange juice', 'JayZ', 3]

]

console.log(chaoticArr[0]);
console.log(chaoticArr[2][0]);

const atlTeams = [

	'Braves', 'Falcons', 'Hawks', 'Atl United'
]

atlTeams.pop(); //removes from back
atlTeams.shift(); //removes from front

console.log(atlTeams);



//copy of Range
let nfcSouthTeams = ['falcons', 'panthers', 'saints', 'bucs']
const l = nfcSouthTeams.slice(1,3);
console.log(l);if(a === b){
	console.log(Equal);
}

//filter out even numbers
const randomNumbers = [1, 6, 3, 2, 3, 65, 43, 23425, 2342, 2345,2345]
let evenNumbers = [];
for(let i = 0; i < randomNumbers.length; i++){
	if(randomNumbers[i] % 2 == 0){
		evenNumbers.push(randomNumbers[i]);
	}
}

console.log(evenNumbers);

//all arrays have a map method
//map will loop through the array and return each time trhough a new ellemtn for the new array
const evenNumberArr = randomNumbers.map(function(number){
	if(number%2 == 0){
		return number;
	}
})

console.log(evenNumberArr);

//splice is a prototype of all arrays...if you are an array... you have 
//splice will allow you to add and remove from any index
//1.where to start(jsut like slice)
//2.how many to delete(can be 0)
//3.what to insert, if anytihng( can be left out)
randomNumbers.splice(6,5, "huh");
console.log(randomNumbers);

