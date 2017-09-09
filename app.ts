interface NamedPerson {
	firstName: string;
	[propName: string]: any; // We are able to add something else to the interface for fexible properties
	age?: number; // Optional property
	greet(lastName: string): void;
}

function greet(person: NamedPerson){  // we can define the params { name: string } we define a type and with that we become that to be an interface
	console.log(person.firstName)
}

const person = {
	firstName: "Christofer",
	age: 22,
	hobbies: ["Programming", "Games"],
	greet(lastName: string){
		console.log(`Hello ${this.firstName} ${lastName}`);
	}
}

greet(person) // this will work cuz we are passing and object with at least the property we define on the type assignment


// Function types

interface DoubleValueFunc {
	(n1: number, n2: number): number;
}

let doubleFunction: DoubleValueFunc;
doubleFunction = function(n1: number, n2: number): number{
	return n1 * n2;
}


// Interface Innheritance

interface AgePerson extends NamedPerson {
	age: number;
}

const oldPerson: AgePerson = {
	age: 20,
	firstName: 'Christofer',
	greet(s: string) {
		console.log(`Hi ${s}`);
	}
}