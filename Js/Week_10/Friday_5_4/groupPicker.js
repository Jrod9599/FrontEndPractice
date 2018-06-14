const students = [
	'people1',
	`people2`,
	`people3`,
	`robert`,
]



const classSize = students.length;
const groupSize = 4;

//shuffle the array
for(var i = 0; i < 100; i++){
	const rand1 = Math.floor(Math.random() * students.length); // will give you a number
	const rand2 = Math.floor(Math.random() * students.length);

	let temp = students[rand1];
	students[rand1] = students[rand2];
	students[rand2] = temp; 

}

let finalGroup = [];

for(let i = 0; i < students.length; i += groupSize){
	finalGroup.push(students.slice(i, i + groupSize))
}

console.log(finalGroup);
