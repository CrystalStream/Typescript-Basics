"use strict";
// Decorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logged(constructorFn) {
    console.log("constructorFn", constructorFn);
}
var Person = /** @class */ (function () {
    function Person() {
        console.log("Hi");
    }
    Person = __decorate([
        logged
    ], Person);
    return Person;
}());
// Factory
function logging(v) {
    return v ? logged : null;
}
// @logging(true)
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
// Advanced
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
// @logging(true)
var Plant = /** @class */ (function () {
    function Plant() {
        this.name = 'Green Plant';
    }
    Plant = __decorate([
        printable
    ], Plant);
    return Plant;
}());
var newPlant = new Plant();
newPlant.print();
// Method Decorator /  Property Decortator
// This decorator return a function that took 3 parameters, the function target, the property name and the Property Descriptor
function editable(v) {
    return function (target, propName, descriptor) {
        descriptor.writable = v;
    };
}
function overwritable(v) {
    return function (target, propName) {
        var newDescriptor = {
            writable: v
        };
        return newDescriptor;
    };
}
var Project = /** @class */ (function () {
    function Project(name) {
        this.projectName = name;
    }
    Project.prototype.calcBudget = function () {
        console.log(10000);
    };
    __decorate([
        overwritable(true)
    ], Project.prototype, "projectName", void 0);
    __decorate([
        editable(false)
    ], Project.prototype, "calcBudget", null);
    return Project;
}());
var p = new Project('TYSE');
p.calcBudget();
console.log(p);
// Parameter Decorator
function printInfo(target, methodName, paramIndex) {
    console.log('Target', target);
    console.log('methodName', methodName);
    console.log('paramIndex', paramIndex);
}
var Course = /** @class */ (function () {
    function Course(name) {
        this.name;
    }
    Course.prototype.printStudentNumbers = function (mode, printAll) {
        if (printAll) {
            console.log(10000);
        }
        else {
            console.log(20000);
        }
    };
    __decorate([
        __param(1, printInfo)
    ], Course.prototype, "printStudentNumbers", null);
    return Course;
}());
var course = new Course('Math');
course.printStudentNumbers('something', true);
course.printStudentNumbers('something', false);
