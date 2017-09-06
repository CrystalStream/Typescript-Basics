"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 23;
        /* Shortcut: in the constructor if we set the access modifier its the same than
            create the property on the class body and set it equal to it EX:
            this.username = username;
        */
        this.name = name;
    }
    Person.prototype.printAge = function () {
        return this.age;
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        return this.type;
    };
    return Person;
}());
var person = new Person("Christofer", "CrystalStream");
person; // {name: 'Christofer', username: 'CrystalStream'}
// Inheritance
var Christofer = /** @class */ (function (_super) {
    __extends(Christofer, _super);
    function Christofer(username) {
        var _this = _super.call(this, 'Christofer', username) || this;
        _this.age = 30;
        return _this;
    }
    return Christofer;
}(Person));
var person2 = new Christofer('CrystalStream');
person2; // {name: 'Christofer', username: 'CrystalStream', age: 30}
// Getter & Setter
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = 'Default';
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        /* SETTER */
        set: function (sp) {
            this._species = sp.length > 5 ? sp : 'Default';
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
plant.species; // 'Default';
plant.species = 'Another';
plant.species; // 'Another'
// Static properties & methods
var Helper = /** @class */ (function () {
    function Helper() {
    }
    Helper.calcRadio = function (radio) {
        return this.PI * (Math.pow(radio, 2));
    };
    Helper.PI = 3.14165;
    return Helper;
}());
console.log(2 * Helper.PI); // 2 * 3.14165
console.log(Helper.calcRadio(10)); // 3.14165 * (10 * 10);
// Abstract classes
/* They are just here to be inherited */
var Car = /** @class */ (function () {
    function Car() {
        this.color = 'Gray';
    }
    Car.prototype.tellMeTheColor = function () {
        return "Your car is so " + this.color;
    };
    return Car;
}());
var Bmw = /** @class */ (function (_super) {
    __extends(Bmw, _super);
    function Bmw() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bmw.prototype.isItOld = function (year) {
        this.year = year;
    };
    return Bmw;
}(Car));
var myCar = new Bmw();
myCar.isItOld(5); // Year on the Parent class gets the 5 value;
myCar.tellMeTheColor(); // Your car is so Gray;
// Private constructor & Singletons
var OnlyOnce = /** @class */ (function () {
    function OnlyOnce(name) {
        this.name = name;
    }
    OnlyOnce.getInstance = function () {
        if (!OnlyOnce.instance) {
            OnlyOnce.instance = new OnlyOnce('Hello');
        }
        return OnlyOnce.instance;
    };
    return OnlyOnce;
}());
// let wrong = new OnlyOnce('TEST') -> Like that we can have a singleton with the private constructor so we have an additional validation
var right = OnlyOnce.getInstance();
