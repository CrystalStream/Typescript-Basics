// Simple Generic
function echo(data: any){
	return data;
}

// Better Generic

function betterEcho<T>(data: T){   // <T> It can be any char and it doesnt have to be uppercase an we are telling, to the function to give us the type of the data
	return data
}
// Now when we are trying to do somethings with the return value, now we have compilation error if the options its not available
// EX: betterEcho("String").lenght -> good
// EX betterEcho(21).lenght -> bad 


// Build-in Generic

const testResults: Array<number> = [9, 8, 1, 5]; // assign the type im getting compiler error

// Array
function printAll<T>(args: T[]){
	args.forEach((el) => console.log(el));
}

printAll<string>(['Apple', 'Banana']);

printAll<number>([12,13]);


// Generic Type

const echo2: <T>(data: T) => T = echo;  // We are telling that echo2 should be a function of the generic type given and we set echo2 to be the firest echo function


// Generic Class
// i can extend of the second type, but it has to be the same type for both
class SimpleMath<U extends number | string, T extends number | string> { // with the extends you can control wich values this funcion can take
	baseValue: T;
	multiplyValue: U;
	calculate(): number {
		return +this.baseValue * +this.multiplyValue  // we can cast that to be type number with the + before it
 	}
}


// Exercise

class MyMap<T> {
	private map: {[key:string]:  T} = {};

	setItem(key:string, item:T){
		this.map[key] = item;
	}

	getItem(key: string){
		return this.map[key];
	}

	clear(){
		this.map = {};
	}

	printMap(){
		for (let key in this.map){
			console.log(this.map[key]);
		}
	}
}

const numberMap = new MyMap<number>();
numberMap.setItem("Apples", 10)
numberMap.setItem("Oragenes", 20);

const stringMap = new MyMap<string>();
stringMap.setItem("Apples", "A lot")
stringMap.setItem("Oragenes", "Not that much");








