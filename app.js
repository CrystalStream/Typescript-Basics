"use strict";
// Simple Generic
function echo(data) {
    return data;
}
// Better Generic
function betterEcho(data) {
    return data;
}
// Now when we are trying to do somethings with the return value, now we have compilation error if the options its not available
// EX: betterEcho("String").lenght -> good
// EX betterEcho(21).lenght -> bad 
// Build-in Generic
var testResults = [9, 8, 1, 5]; // assign the type im getting compiler error
// Array
function printAll(args) {
    args.forEach(function (el) { return console.log(el); });
}
printAll(['Apple', 'Banana']);
printAll([12, 13]);
// Generic Type
var echo2 = echo; // We are telling that echo2 should be a function of the generic type given and we set echo2 to be the firest echo function
// Generic Class
// i can extend of the second type, but it has to be the same type for both
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue; // we can cast that to be type number with the + before it
    };
    return SimpleMath;
}());
// Exercise
var MyMap = /** @class */ (function () {
    function MyMap() {
        this.map = {};
    }
    MyMap.prototype.setItem = function (key, item) {
        this.map[key] = item;
    };
    MyMap.prototype.getItem = function (key) {
        return this.map[key];
    };
    MyMap.prototype.clear = function () {
        this.map = {};
    };
    MyMap.prototype.printMap = function () {
        for (var key in this.map) {
            console.log(this.map[key]);
        }
    };
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.setItem("Apples", 10);
numberMap.setItem("Oragenes", 20);
var stringMap = new MyMap();
stringMap.setItem("Apples", "A lot");
stringMap.setItem("Oragenes", "Not that much");
