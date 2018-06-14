class Car{
	constructor(make, mode, mpg, topSpeed){
		this.make = make;
		this.mode = mode;
		this.mpg = mpg;
		this.topSpeed = topSpeed;
	}

	start(){
		console.log("Vroom vroom");
	}

}

class ElectricCar extends Car{

	constructor(make, model, maxDistance, topSpeed){
		super(make, model, null, topSpeed);
		this.maxDistance = maxDistance;
	}

	start(){
		console.log(`... ... ...`);
	}

}

const tobysCar = new ElectricCar(`tesls`, `Model S`, `200 miles`, `180mph`);
console.log(tobysCar);
tobysCar.start();

const doMath = require(`./staticMethod`);
console.log(doMath.add(2,3));