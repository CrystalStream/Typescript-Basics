"use strict";
// // Rest & Spread
// const numbers = [10, 55, 9, 105];
// Math.max(10, 23, 44, 109) // => 109
// Math.max(...numbers)  // Spread operator. [10, 55, 9, 105] => 10, 55, 9, 105
// // if we use in a function call, '...' will mean Spread operator
// // if we use in a parameter definition '...' will mean rest
// // if dont need all parameter to be rest we should pass them before the rest params
// function makeArray(userName: string, ...args: number[]){ 
// 	return args
// }
// makeArray("Christ", 1, 2, 3, 4) // => [1,2,3,4] with the rest operator we use kinda dynamic args
// // Destructuring
// /*  ARRAYS  */
// const cars = ["Vocho", "BMW"];
// const [c1, c2] = cars;
// c1 // => "Vocho"
// c2 // => "BMW"
// /*  OBJECTS  */
// const userData = {
// 	name: "Christ",
// 	age: 22,
// 	color: "Blue"
// }
// //if we want to use diff var name we just use ':' after object property
// const {name: userName, age, color} = userData
// userName // => "Christ"
// age // => 22
// color // "Blue"
var numbers = [-3, 33, 38, 5];
var newArray = [55, 20];
newArray.push.apply(newArray, numbers);
console.log(newArray);
