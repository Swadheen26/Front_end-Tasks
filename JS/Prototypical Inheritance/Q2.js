// Constructor function for Person
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding introduce method to Person prototype
Person.prototype.introduce = function() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
};

// Constructor function for Employee, inheriting from Person
function Employee(name, age, jobTitle) {
    // Call the Person constructor with Employee's context
    Person.call(this, name, age);
    this.jobTitle = jobTitle;
}

// Set the prototype of Employee to Person's prototype (inheritance)
Employee.prototype = Object.create(Person.prototype);

// Correct the constructor reference for Employee
Employee.prototype.constructor = Employee;

// Adding work method to Employee prototype
Employee.prototype.work = function() {
    console.log(`${this.name} is working as a ${this.jobTitle}.`);
};


// 1. Create an instance of Person
const person1 = new Person('Swadheen', 30);

// 2. Create an instance of Employee
const employee1 = new Employee('Swaraj', 28, 'Software Developer');

person1.introduce(); 
employee1.introduce(); 

employee1.work(); 
