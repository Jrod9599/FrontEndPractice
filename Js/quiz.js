var str = "the day is sunny the thethe sunny is is";

console.log(frequencyWord(str));

function frequencyWord(string){

	var obj = {};
	let strArr = string.split(" ");

	for(let i = 0; i < strArr.length; i++){
		if(obj[strArr[i]] === undefined){
			obj[strArr[i]] = 1;
		}
		else{
			obj[strArr[i]] = obj[strArr[i]] + 1; 
		}
	}

	return obj;
}