// Decorator

function logged(constructorFn: Function){  // if you attach a decorator to a function you have to pass de constructor
    console.log("constructorFn", constructorFn);

} 

@logged
class Person {
	constructor(){
		console.log("Hi");
	}
}

// Factory
function logging(v: boolean){ // This parameters can be decided by developer if we uses as factory
	return v ? logged : null;
}

// @logging(true)
class Car {

}

// Advanced

function printable(constructorFn: Function){
	constructorFn.prototype.print = function (){
		console.log(this)
	}
}

// @logging(true)
@printable
class Plant {
	name = 'Green Plant';
}

const newPlant = new Plant();
(<any>newPlant).print();


// Method Decorator /  Property Decortator

// This decorator return a function that took 3 parameters, the function target, the property name and the Property Descriptor
function editable(v: boolean): Function{
	return function(target: any, propName: string, descriptor: PropertyDescriptor){ 
		descriptor.writable = v;
	}
}

function overwritable(v: boolean): Function{
	return function(target: any, propName: string): any{
		const newDescriptor: PropertyDescriptor = {
			writable: v
		}
		return newDescriptor;
	}
}

class Project {
	@overwritable(true)
	projectName: string;

	constructor(name: string){
		this.projectName = name
	}

	@editable(false)
	calcBudget(){
		console.log(10000)
	}
}

const p = new Project('TYSE');
p.calcBudget();

console.log(p);

// Parameter Decorator

function printInfo(target: any, methodName: string, paramIndex: number){
	console.log('Target', target)
	console.log('methodName', methodName)
	console.log('paramIndex', paramIndex)
}


class Course{
	name: string;

	constructor(name: string){
		this.name;
	}

	printStudentNumbers(mode: string,  @printInfo printAll: boolean){
		if (printAll) {
			console.log(10000)
		}else{
			console.log(20000)
		}
	}
}

const course = new Course('Math');
course.printStudentNumbers('something', true);
course.printStudentNumbers('something', false);



























