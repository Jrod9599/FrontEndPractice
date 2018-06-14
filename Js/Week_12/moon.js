// Moon Problem

// First full moon of 2000 was Jan 21, 00:40:24
//29 days 12 hrs 44 minutes


const firstFullMoonOf2000 =  new Date("Friday, 21 January 2000, 00:40:24"); //when it starts
// console.log(firstFullMoonOf2000);
const firstFullMoonOf2000InSeconds = firstFullMoonOf2000.getTime() / 1000; //secnonds that have passed between then and now
console.log(firstFullMoonOf2000InSeconds);

//a lunar month is 29 days 12 hrs, 44 minutes 
const daysAsSeconds = 24 * 60 * 60 * 29;
const hoursAsSeconds = 60 * 60 * 12;
const minutesAsSeconds = 60 * 44;

const secondsInALunarMonth = daysAsSeconds + hoursAsSeconds + minutesAsSeconds; //seconds till next full moon

const timeStampOfEnd = new Date("Dec 31 2999, 23:59:59").getTime()/1000; //when it ends

let currentMoonTS = firstFullMoonOf2000InSeconds;
let fullMoonArray = [];

while(currentMoonTS < timeStampOfEnd){
	fullMoonArray.push(new Date(currentMoonTS * 1000));
	currentMoonTS += secondsInALunarMonth;
}

console.log(fullMoonArray);