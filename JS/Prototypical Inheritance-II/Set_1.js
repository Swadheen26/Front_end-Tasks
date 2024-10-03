
// 1. Employee, Manager, Developer Prototypes

// Base Employee class
class Employee {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }

    // Base method to return employee details
    getDetails() {
        return `Employee Name: ${this.name}, Position: ${this.position}`;
    }
}

// Manager class inheriting from Employee
class Manager extends Employee {
    constructor(name, position, teamSize) {
        super(name, position);  // Call the parent class constructor
        this.teamSize = teamSize;
    }

    // Override getDetails method
    getDetails() {
        return `Manager Name: ${this.name}, Position: ${this.position}, Team Size: ${this.teamSize}`;
    }
}

// Developer class inheriting from Employee
class Developer extends Employee {
    constructor(name, position, programmingLanguage) {
        super(name, position);  // Call the parent class constructor
        this.programmingLanguage = programmingLanguage;
    }

    // Override getDetails method
    getDetails() {
        return `Developer Name: ${this.name}, Position: ${this.position}, Programming Language: ${this.programmingLanguage}`;
    }
}

// Testing the functionality
const manager = new Manager("Swadheen", "Manager", 10);
console.log(manager.getDetails());

const developer = new Developer("Satya", "Developer", "JavaScript");
console.log(developer.getDetails());



console.log('--------------------------------------------------------------');


// 2. User and Admin Constructor Functions

// Base User class
class User {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    // Method to get user role
    getRole() {
        console.log(`${this.name}'s Role: ${this.role}`);
    }
}

// Admin class inheriting from User
class Admin extends User {
    constructor(name, role) {
        super(name, role);  
    }

    // New method for Admin
    manageUsers() {
        console.log(`${this.name} is managing users.`);
    }
}

// Testing the functionality
const admin = new Admin("Swadheen", "Admin");
admin.getRole();  
admin.manageUsers(); 


console.log('--------------------------------------------------------------');


// 3. Library, PublicLibrary, UniversityLibrary Prototypes

// Base Library class
class Library {
    constructor(books) {
        this.books = books;
    }

    // Method to get list of books
    getBooks() {
        return `Books: ${this.books.join(", ")}`;
    }
}

// PublicLibrary class inheriting from Library
class PublicLibrary extends Library {
    constructor(books) {
        super(books);  // Call the parent class constructor
    }

    // Additional method for PublicLibrary
    lendBook(bookName) {
        console.log(`Lending the book: ${bookName}`);
    }
}

// UniversityLibrary class inheriting from Library
class UniversityLibrary extends Library {
    constructor(books, researchPapers) {
        super(books);  
        this.researchPapers = researchPapers;
    }

    // Additional method for UniversityLibrary
    addResearchPapers(paperName) {
        console.log(`Adding research paper: ${paperName}`);
    }
}

const publicLibrary = new PublicLibrary(["Smart Investing", "Theory of Machine"]);
console.log(publicLibrary.getBooks());
publicLibrary.lendBook("Smart Investing");

const universityLibrary = new UniversityLibrary(["Math Textbook", "Physics Journal"], ["Quantum Physics"]);
console.log(universityLibrary.getBooks());
universityLibrary.addResearchPapers("Advanced Calculus");


console.log('--------------------------------------------------------------');


// 4. Person and Athlete Objects

// Base Person class
class Person {
    constructor(name) {
        this.name = name;
    }

    // Method to introduce the person
    introduce() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

// Athlete class inheriting from Person
class Athlete extends Person {
    constructor(name, sport) {
        super(name);  // Call the parent class constructor
        this.sport = sport;
    }

    // Override introduce method
    introduce() {
        console.log(`Hello, my name is ${this.name}, and I play ${this.sport}`);
    }

    // Additional method for Athlete
    playSport() {
        console.log(`Playing ${this.sport}`);
    }
}

// Testing the functionality
const athlete = new Athlete("Swadheen", "Badminton");
athlete.introduce();
athlete.playSport();


console.log('--------------------------------------------------------------');


// 5. Appliance and WashingMachine Prototypes

// Base Appliance class
class Appliance {
    constructor() {}

    // Method to turn on the appliance
    turnOn() {
        console.log("The appliance is now on.");
    }
}

// WashingMachine class inheriting from Appliance
class WashingMachine extends Appliance {
    constructor() {
        super();  // Call the parent class constructor
    }

    // Additional method for WashingMachine
    startWashing() {
        console.log("The washing machine is now washing clothes.");
    }
}

const washingMachine = new WashingMachine();
washingMachine.turnOn();      
washingMachine.startWashing();
