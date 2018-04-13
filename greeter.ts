function greeter(person: string) {
	return "Hello, " + person;
}

let user = "Poop";

console.log(greeter(user));

class Student {
	fullName: string;
	constructor(
		public firstName: string,
		public middleInitial: string,
		public lastName: string
	) {
		this.fullName = firstName + " " + middleInitial + " " + lastName;
	}
}

interface Person {
	firstName: string;
	lastName: string;
}

function greeter2(person: Person) {
	return "Hello, " + person.firstName + " " + person.lastName;
}

function greeter3(student: Student) {
	return "Hello, " + student.fullName;
}

let user2 = {firstName: "Matt", lastName: "Downs"};
let user3 = new Student("Bob", "B", "Bob");

console.log(greeter2(user2));
console.log(greeter3(user3));