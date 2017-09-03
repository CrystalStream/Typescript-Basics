"use strict";
// tuples
var myTuple = ['Cars', 10];
// Tuple sticks to the specific format of the type definition.
// any
//  We could aslo defined explicity with 'let something: any';
var somethign; // If there is no type definition, its default is 'any'
somethign = 'Hola'; // We set the first value
somethign = 99; // We can override its type
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; // 2 if above change then this will continue with the next EX.: 101
})(Color || (Color = {}));
var oneColor = Color.Green;
/*
    console.log(oneColor) => 100

    onceColor = Color.Blue;
    console.log(oneColor) => 101
*/
// Function and types
var myName = 'Cristofer';
// the type definition refers only to the return value type
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void type
// the void type means no return like all other typed lenguages
function sayHello() {
    console.log("Hello World");
}
// argument type
function multiply(v1, v2) {
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
var myCalculator;
// myCalculator = sayHello;
// myCalculator(); // => 'Hello World' without specific type => Error with the type difnition
myCalculator = multiply; // => multiply function satisface the type definition.
myCalculator(10, 5); // => 50 without specific type
var complex2 = {
    data: [1, 2, 3],
    output: function (all) {
        return this.data;
    }
};
// Union Types
// Either one or the other type
var realAge = "21";
realAge = 25;
// Never type
// Throws an error so it never return something or it should never reach
function neverReturn() {
    throw new Error('An error');
}
// Nullable Type   -To this we need to set "strictNullChecks": false on the tsconfig.json
// an we wouldnt have to define on the type definition
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var bankAccount = {
    money: 200,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Cristofer",
    bankAccount: bankAccount,
    hobbies: ["Programing", "Games"]
};
myself.bankAccount.deposit(500);
console.log("myself", myself);
