"use strict";
function greet(person) {
    console.log(person.firstName);
}
var person = {
    firstName: "Christofer",
    age: 22,
    hobbies: ["Programming", "Games"],
    greet: function (lastName) {
        console.log("Hello " + this.firstName + " " + lastName);
    }
};
greet(person); // this will work cuz we are passing and object with at least the property we define on the type assignment
var doubleFunction;
doubleFunction = function (n1, n2) {
    return n1 * n2;
};
var oldPerson = {
    age: 20,
    firstName: 'Christofer',
    greet: function (s) {
        console.log("Hi " + s);
    }
};
