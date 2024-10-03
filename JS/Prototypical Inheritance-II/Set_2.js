
// 1. Vehicle and ElectricVehicle Constructor Functions

// Vehicle constructor
class Vehicle {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  
    getDetails() {
      return `Make: ${this.make}, Model: ${this.model}`;
    }
  }
  
  // ElectricVehicle constructor that extends Vehicle
  class ElectricVehicle extends Vehicle {
    constructor(make, model, batteryCapacity) {
      super(make, model);
      this.batteryCapacity = batteryCapacity;
    }
  
    getDetails() {
      return `${super.getDetails()}, Battery Capacity: ${this.batteryCapacity} kWh`;
    }
  
    // Static method to compare battery capacity of two ElectricVehicle objects
    static compareBattery(ev1, ev2) {
      return ev1.batteryCapacity > ev2.batteryCapacity
        ? `${ev1.make} has a larger battery`
        : `${ev2.make} has a larger battery`;
    }
  }
  

const Mahindra = new ElectricVehicle("Mahindra", "Thar", 7500);
const Toyota = new ElectricVehicle("Toyota", "Fortuner", 9000);

console.log(Mahindra.getDetails());
console.log(Toyota.getDetails());

console.log(ElectricVehicle.compareBattery(Mahindra, Toyota));


console.log('--------------------------------------------------------------');


// 2. BankAccount and SavingsAccount:

// Base BankAccount class
class BankAccount {
    constructor(accountNumber, balance) {
      this.accountNumber = accountNumber;
      this.balance = balance;
    }
  
    // Method to deposit amount into the account
    deposit(amount) {
      this.balance += amount;
      console.log(`Deposit successful. New balance: ₹ ${this.balance}`);
    }
  }
  
  // SavingsAccount class extending BankAccount
  class SavingsAccount extends BankAccount {
    constructor(accountNumber, balance, minimumBalance) {
      super(accountNumber, balance); // Call parent constructor
      this.minimumBalance = minimumBalance;
    }
  
    // Method to withdraw from the account with minimum balance check
    withdraw(amount) {
      if (this.balance - amount >= this.minimumBalance) {
        this.balance -= amount;
        console.log(`Withdrawal successful. New balance: ₹ ${this.balance}`);
      } else {
        console.log("Withdrawal denied. Insufficient funds.");
      }
    }
  }
  
  const savings = new SavingsAccount("12345678",  5000, 1000);
  savings.deposit(2000);   
  savings.withdraw(4000);  
  savings.withdraw(2500);
  

  console.log('--------------------------------------------------------------');


//   3. Employee, FullTimeEmployee, and PartTimeEmployee:

// Employee constructor
class Employee {
    constructor(name) {
      this.name = name;
    }
  
    calculateSalary() {
      return 0; // Base salary
    }
  }
  
  // FullTimeEmployee constructor that extends Employee
  class FullTimeEmployee extends Employee {
    constructor(name, monthlySalary) {
      super(name);
      this.monthlySalary = monthlySalary;
      this.bonus = 0;
    }
  
    calculateSalary() {
      return this.monthlySalary + this.bonus;
    }
  
    addBonus(amount) {
      this.bonus += amount;
    }
  }
  
  // PartTimeEmployee constructor that extends Employee
  class PartTimeEmployee extends Employee {
    constructor(name, hourlyWage, hoursWorked) {
      super(name);
      this.hourlyWage = hourlyWage;
      this.hoursWorked = hoursWorked;
    }
  
    calculateSalary() {
      return this.hourlyWage * this.hoursWorked;
    }
  }
  
  const fullTime = new FullTimeEmployee('Swadheen', 3000);
  fullTime.addBonus(500);
  console.log(`${fullTime.name}'s Salary: ₹${fullTime.calculateSalary()}`);
  
  const partTime = new PartTimeEmployee('Satya', 25, 95);
  console.log(`${partTime.name}'s Salary: ₹${partTime.calculateSalary()}`);
  

  console.log('--------------------------------------------------------------');

//   4. Shape, Rectangle, Triangle, and Parallelogram:

// Shape constructor
class Shape {
    calculateArea() {
      return 0;
    }
  
    static compareArea(shape1, shape2) {
      const area1 = shape1.calculateArea();
      const area2 = shape2.calculateArea();
      if (area1 > area2) {
        return `${shape1.constructor.name} has a larger area.`;
      } else if (area1 < area2) {
        return `${shape2.constructor.name} has a larger area.`;
      } else {
        return `Both have equal areas.`;
      }
    }
  }
  
  // Rectangle constructor that extends Shape
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  }
  
  // Triangle constructor that extends Shape
  class Triangle extends Shape {
    constructor(base, height) {
      super();
      this.base = base;
      this.height = height;
    }
  
    calculateArea() {
      return 0.5 * this.base * this.height;
    }
  }
  
  // Parallelogram constructor that extends Rectangle
  class Parallelogram extends Rectangle {
    constructor(base, height) {
      super(base, height);
    }
  
    calculateArea() {
      return this.width * this.height; // Same as Rectangle
    }
  }
  
  // Demonstration
  const rect = new Rectangle(10, 5);
  const tri = new Triangle(10, 5);
  const para = new Parallelogram(12, 4);
  
  console.log(`Rectangle area: ${rect.calculateArea()}`);
  console.log(`Triangle area: ${tri.calculateArea()}`);
  console.log(`Parallelogram area: ${para.calculateArea()}`);
  console.log(Shape.compareArea(rect, tri));
  console.log(Shape.compareArea(para, rect));
  