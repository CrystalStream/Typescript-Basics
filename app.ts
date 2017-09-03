// tuples
let myTuple: [string, number] = ['Cars',10]

// Tuple sticks to the specific format of the type definition.

// any
//  We could aslo defined explicity with 'let something: any';
let somethign; // If there is no type definition, its default is 'any'
somethign = 'Hola'; // We set the first value
somethign = 99; // We can override its type


// enum
enum Color { // Start by default like array 
	Gray,  // 0
	Green = 100, // 1
	Blue // 2 if above change then this will continue with the next EX.: 101
}
let oneColor: Color = Color.Green;
/*
	console.log(oneColor) => 100

	onceColor = Color.Blue;
	console.log(oneColor) => 101
*/


// Function and types
let myName: string = 'Cristofer';

// the type definition refers only to the return value type
function returnMyName() : string {
	return myName;
}
console.log(returnMyName());

// void type
// the void type means no return like all other typed lenguages
function sayHello() : void {
	console.log("Hello World")
}

// argument type
function multiply(v1: number, v2: number): number {
	return v1 * v2;
}
/*
	console.log(multiply(2, 'K')) => Error;	
	console.log(multiply(2, 10)) => No Error;
*/

// function types
//                This is only the type definition and so the function 
//								that satisface only this exactly definition
//								(arguments,.. n) => <return type>
let myCalculator: (v1: number, v2:number) => number;
// myCalculator = sayHello;
// myCalculator(); // => 'Hello World' without specific type => Error with the type difnition

myCalculator = multiply; // => multiply function satisface the type definition.
myCalculator(10, 5); // => 50 without specific type


// type alias
// Thats how we can create a type
type Complex = {data: number[], output: (all: boolean) => number[] }

let complex2: Complex = {  // So we can define the type and any futher change we only do it to the variable that holds the type
	data: [1, 2, 3],

	output: function(all: boolean): number[] {
		return this.data;
	}
}

// Union Types
// Either one or the other type
let realAge: number | string = "21"
realAge = 25


// Never type

// Throws an error so it never return something or it should never reach
function neverReturn(): never{
	throw new Error('An error');
}

// Nullable Type   -To this we need to set "strictNullChecks": false on the tsconfig.json
// an we wouldnt have to define on the type definition
let canBeNull:number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null


// Exercise
type bankType = {money: number, deposit:(value:number) => void};
let bankAccount: bankType = {
	money: 200,

	deposit(value: number): void{
		this.money += value;
	}
}

let myself: {name: string, bankAccount: bankType, hobbies: string[]} = {
	name: "Cristofer",
	bankAccount: bankAccount,
	hobbies: ["Programing", "Games"]
}

myself.bankAccount.deposit(500)

console.log("myself", myself);









