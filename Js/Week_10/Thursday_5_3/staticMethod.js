class doMath{
	static add(x,y){
		return x + y;
	}
	static subtract(x,y){
		return x - y;
	}
	static double(x){
		return x + x;
	}
}

// console.log(doMath.add(1,2));
// console.log(doMath.subtract(1,5));
// console.log(doMath.double(88));

module.exports = doMath;