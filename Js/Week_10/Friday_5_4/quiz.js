function reverseString(str){

	var revStr = "";

	for(var i = str.length-1; i >= 0; i--){
		revStr += str[i];
	}

	return revStr;

}

console.log(reverseString("It is Friday"));
console.log(reverseString("racecar"));
console.log(reverseString("tacocat"));



let colors = [
                {
                    colorName : "red",
                    r: 255,
                    b: 0,
                    g: 0
                },
                {  
                    colorName : "pink",
                    r: 255,
                    b: 182,
                    g: 192
                },
                {
                    colorName : "brown",
                    r: 210,
                    b: 105,
                    g: 30
                },
                {  
                    colorName : "cyan",
                    r: 0,
                    b: 255,
                    g: 255
                }
            ]

var colorArr = colors.filter(function(color){
	if(color.b > 100 && color.g > 100){
		return true;
	}
	
}).map(function(color){
	return color;
})


console.log(colorArr);
