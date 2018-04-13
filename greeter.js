function greeter(person) {
    return "Hello, " + person;
}
var user = "Poop";
console.log(greeter(user));
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter2(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
function greeter3(student) {
    return "Hello, " + student.fullName;
}
var user2 = { firstName: "Matt", lastName: "Downs" };
var user3 = new Student("Bob", "B", "Bob");
console.log(greeter2(user2));
console.log(greeter3(user3));
