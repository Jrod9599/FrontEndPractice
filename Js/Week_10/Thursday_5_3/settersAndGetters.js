// add a _ it makes it a "private" variable

class Employee{
	constructor(name, eid, salary, title){
		this._name = name;
		this.eid = eid;
		this.salary = salary;
		this.title = title;
	}

	get name(){
		return this._name;
	}
	set name(newName){
		this._name = newName; // REMEMBER TO USE _ or INFINITE LOOP
	}

}

const employee1 = new Employee(`ross`, 192, `192,00`, `big Shot`);
console.log(employee1);