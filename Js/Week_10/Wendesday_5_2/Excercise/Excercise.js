

//IDK HOW FUNCTIONS WORK

function dayOfTheWeek(day){
	switch(day){
		case 0: case 6:
			console.log("Sleep in");
			break;
		default:
			console.log("Go To Work");
			break;
	}
}

dayOfTheWeek(3);

function daysInAMonth(month, year){
	switch(month){

		case 1: case 3: case 5: case 7: case 8: case 10: case 12:
			console.log(31);
			break;
		case 4: case 6: case 9: case 11:
			console.log(30);
			break;
		case 2:
			if(year % 4 == 0){
				console.log(29);
			}
			else
				console.log(28);
			break;
	}
}


daysInAMonth(2, 2000);

function tipCalculator(bill, service, people){

	switch(service){
		case 'good':
			//console.log(((bill * 1.20)/people) + "per Person");
			return `${(bill * 1.20) / people} per person`;
		case 'fair':
			// console.log(((bill * 1.15)/people) + "per Person");
			return `${(bill * 1.20) / people} per person`;
		case 'bad':
			// console.log(((bill * 1.10)/people) + "per Person");
			return `${(bill * 1.20) / people} per person`;
	}

}

console.log(tipCalculator(10.25, 'good', 4));
console.log(tipCalculator(10.25, 'fair', 5));
console.log(tipCalculator(10.25, 'bad', 6));

function people(peopleArr){
	var amo = [];

	for(var i = 0; i < peopleArr.length; i++){
		var charArr = peopleArr[i].toLowerCase().split(""); 
		if(charArr[0] == 'a' || charArr[0] == 'b' || charArr[0] == 'm'){
			amo.push(peopleArr[i]);
		}

	}

	return amo;
}


console.log(people(['amos','hunter','jr']));

