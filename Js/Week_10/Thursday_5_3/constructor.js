// JS, since ES1, up through ES5, used constructor functions
 // to make objects. There was NO class keyword. All a constructor is,
 // is a function that takes an arguments and it has its own context... "this"

 // The functino should  eb proper case, as a convention. 


 // function Player(name, heroClass, weapon){
 // 	this.name = name;
 // 	this.class = heroClass;
 // 	this.weapon = weapon;
 // }
 // Player.prototype.takeDamage =  function(damagePoints){
 // 		console.log(`${this.name} has taken ${damagePoints} of damange!`);
 // }

 // Player.prototype.species = `Human`;


 // let player1 = new Player(`Dario`, `ultimate Warrio`, `sword`);

 // console.log(player1);
 // console.log(player1.name);
 // player1.numOfKills = 1000;
 // console.log(player1);

 // let player2 = new Player('Hunter', 'Hunter', 'Bow');
 // console.log(player2);

 // player1.takeDamage(15);
 // player2.takeDamage(12);

class Player{
	constructor(name, heroClass, weapon, speed){
		this.name = name;
		this.heroClass = heroClass;
		this.weapon = weapon;
		this.speed = speed;
	}

	takeDamage(damagePoints){
		console.log(`${this.name} has taken ${damagePoints} of damage.`);
	}

	

}