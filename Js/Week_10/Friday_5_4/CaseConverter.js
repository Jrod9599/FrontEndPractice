function caseConvert(str, conversionType){

	 let convertedStr = "";

	 if(conversionType === "camelCase"){
	 	//capitalize the letter after underscore
	 	//remove underscore
	 	
	 	let strArr = str.split("_");
	 	convertedStr += strArr[0];

	 	for(let i = 1; i < strArr.length; i++){
	 		convertedStr += strArr[i].replace(strArr[i][0], strArr[i][0].toUpperCase());
	 	}

	 }
	 else if(conversionType === "snake_case"){
	 		
	 		let strArr = str.split(/(?=[A-Z])/); 
	 		convertedStr += strArr[0]; 

	 		for(let i =1; i < strArr.length; i++){

	 			convertedStr += "_"; 
	 			convertedStr += strArr[i].replace(strArr[i][0], strArr[i][0].toLowerCase()); 
	 		}


	 }
	 else{
	 	return "Invalid Entry";
	 }


	 return convertedStr;
} 


console.log(caseConvert('dog_house_hello', 'camelCase'));
console.log(caseConvert('dogHouseHello', 'snake_case'));