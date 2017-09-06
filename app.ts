class Person {
	name: string;	
	private type: string;
	protected age: number = 23;

	constructor(name: string, public username: string){
		/* Shortcut: in the constructor if we set the access modifier its the same than
			create the property on the class body and set it equal to it EX:
			this.username = username;
		*/
		this.name = name;
	}

	printAge(){
		return this.age;
	}

	setType(type: string){
		this.type = type;
		return this.type;
	}
}

const person = new Person("Christofer", "CrystalStream");

person // {name: 'Christofer', username: 'CrystalStream'}


// Inheritance

class Christofer extends Person {
	
	constructor(username: string){
		super('Christofer', username);
		this.age = 30;
	}
}

const person2 = new Christofer('CrystalStream');

person2 // {name: 'Christofer', username: 'CrystalStream', age: 30}

// Getter & Setter

class Plant {
	private _species: string = 'Default';

	get species() {
		return this._species;
	}

	/* SETTER */
	set species(sp: string){ // This will be called as a property, but its defined as a method, the param its the value of the property
		this._species = sp.length > 5 ? sp : 'Default';
	} 
}

const plant = new Plant();
plant.species // 'Default';
plant.species = 'Another';
plant.species // 'Another'


// Static properties & methods

class Helper {
	static PI: number = 3.14165;

	static calcRadio(radio: number){
		return this.PI * (Math.pow(radio, 2));
	}
}
console.log(2 * Helper.PI); // 2 * 3.14165
console.log(Helper.calcRadio(10)) // 3.14165 * (10 * 10);


// Abstract classes

/* They are just here to be inherited */
abstract class Car {
	brand: string;
	color: string = 'Gray';
	year: number;

	tellMeTheColor(){
		return `Your car is so ${this.color}`
	}

	abstract isItOld(year: number) : void; // Needs to be implemented on the child class
}

class Bmw extends Car {
	
	isItOld(year:number): void {
		this.year = year;
	}
}

let myCar = new Bmw();
myCar.isItOld(5) // Year on the Parent class gets the 5 value;
myCar.tellMeTheColor() // Your car is so Gray;


// Private constructor & Singletons

class OnlyOnce {
	private static instance: OnlyOnce;
	public readonly name: string;  // We can do it like that and it would be read only, or we could only specified the setter

	private constructor (name: string) {
		this.name = name;
	}

	static getInstance(){
		if(!OnlyOnce.instance){
			OnlyOnce.instance = new OnlyOnce('Hello');
		}
		return OnlyOnce.instance;
	}
}

// let wrong = new OnlyOnce('TEST') -> Like that we can have a singleton with the private constructor so we have an additional validation
let right = OnlyOnce.getInstance();




















