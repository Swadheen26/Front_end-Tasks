// Template Literals

// 1. Basic String Interpolation:
function greet(name, age) {
    return `Hello, my name is ${name}, and I am ${age} years old.`;
  }
  
  console.log(greet("Swadhee", 26)); 
  
// <---------------------------------------------->

// 2. Multi-line Strings
function generateParagraph() {
  return `This is the first line.
This is the second line.
This is the third line.`;
}

console.log(generateParagraph());

// <---------------------------------------------->

// 3. Expression Inside Template Literals
function calculateSum(a, b) {
  return `The sum of ${a} and ${b} is ${a + b}.`;
}

console.log(calculateSum(5, 3));

// <---------------------------------------------->

// 4. Embedding a Function in Template Literals
function formatCurrency(value) {
  return `$${value.toFixed(2)}`;
}

function printCurrencyMessage(amount) {
  return `The total price is ${formatCurrency(amount)}.`;
}

console.log(printCurrencyMessage(500));

// <---------------------------------------------->

// 5. Nested Template Literals
function formatMessage(name, status) {
  return `Welcome back, ${name}! Your status is: ${status ? 'active' : 'inactive'}.`;
}

console.log(formatMessage('swadheen', true));

// <-----------------------00000000000000000000000000000000----------------------->

// Arrow Functions

// 1. Basic Arrow Function
const add = (a, b) => a + b;

console.log(add(5, 3));

// <---------------------------------------------->

// 2. Single-Line Arrow Function
const double = n => n * 2;

console.log(double(4));

// <---------------------------------------------->

// 3. Arrow Function with Implicit Return
const welcome = name => `Hello, ${name}`;

console.log(welcome('Swadheen'));

// <---------------------------------------------->

// 4. Arrow Function in Callback  
const filterEvenNumbers = arr => arr.filter(num => num % 2 === 0);

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// <---------------------------------------------->

// 5. Arrow Function and this Context
function Person(name) {
  this.name = name;
  this.printName = () => {
    console.log(`My name is ${this.name}`);
  };
}

const person1 = new Person('Swadheen');
person1.printName();

// <-----------------------00000000000000000000000000000000----------------------->

// Object Shorthand

// 1. Basic Object Shorthand
function createPerson(name, age) {
  return { name, age };
}

console.log(createPerson('Swadheen', 26));

// <---------------------------------------------->

// 2. Method Shorthand
function createPerson(name, age) {
  return {
    name,
    age,
    introduce() {
      console.log(`Hi, I'm ${name} and I'm ${age} years old.`);
    }
  };
}

const person = createPerson('Swadheen', 26);
person.introduce();

// <---------------------------------------------->

// 3. Computed Property Names
function createObject(key, value) {
  return { [key]: value };
}

console.log(createObject('id', 123));

// <---------------------------------------------->

// 4. Object Shorthand with Destructuring
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

const obj1 = { name: 'Swadheen', age: 26 };
const obj2 = { city: 'Cuttack', profession: 'Web developer' };
console.log(mergeObjects(obj1, obj2));

// <---------------------------------------------->

// 5. Advanced Shorthand Usage
function updatePerson(oldPerson, newName) {
  return { ...oldPerson, name: newName };
}

const candidate = { name: 'Swadheen', age: 30 };
const updatedPerson = updatePerson(candidate, 'Swaraj');
console.log(updatedPerson);

// <-----------------------00000000000000000000000000000000----------------------->

// Default Parameters in Function

// 1. Basic Default Parameters
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greet('Swadheen'));
console.log(greet()); 

// <---------------------------------------------->

// 2. Multiple Default Parameters
function calculateTotal(price, tax = 0.18) {
  return price + (price * tax);
}

console.log(calculateTotal(100));      
console.log(calculateTotal(100, 0.09));

// <---------------------------------------------->

// 3. Default Parameters with Undefined Values
function describePerson(name, age = 25) {
  return `Name: ${name}, Age: ${age}`;
}

console.log(describePerson('Swadheen', 30));     
console.log(describePerson('Swaraj', undefined));

// <---------------------------------------------->

// 4. Default Parameters in Complex Expression
function calculateDiscount(price, discount = price * 0.1) {
  return price - discount;
}

console.log(calculateDiscount(200));    
console.log(calculateDiscount(200, 30));

// <---------------------------------------------->

// 5. Overriding Default Parameters
function createUser(username, role = "user") {
  return { username, role };
}

console.log(createUser('Swadheen'));         
console.log(createUser('admin123', 'admin'));

// <-----------------------00000000000000000000000000000000----------------------->

// var vs let vs const

// 1. Scope Comparison: var vs let
function testVar() {
  if (true) {
    var x = 'I am var';
  }
  console.log(x); 
}

// function testLet() {
//   if (true) {
//     let y = 'I am let';
//   }
//   console.log(y); 
// }

testVar();
// testLet();

// <---------------------------------------------->

// 2. Constant Variables: const and Reassignment
function createConstantArray() {
  const arr = [1, 2, 3];
  arr.push(4); 
  console.log(arr); 

  // Attempting reassignment
  // arr = [5, 6];  // Uncaught TypeError: Assignment to constant variable
}

createConstantArray();

// <---------------------------------------------->

// 3. Temporal Dead Zone (TDZ)
function demonstrateTdz() {
  console.log(a);  // Output: undefined (due to hoisting)
  var a = 10;

  // console.log(b);  // ReferenceError: Cannot access 'b' before initialization
  let b = 20;
}

demonstrateTdz();

// <---------------------------------------------->

// 4. Re-declaration of Variables: var vs let/const
function testRedeclaration() {
  var x = 10;
  var x = 20;  
  console.log(x); 

  let y = 30;
  // let y = 40;  // Uncaught SyntaxError: Identifier 'y' has already been declared

  const z = 50;
  // const z = 60;  // Uncaught SyntaxError: Identifier 'z' has already been declared
}

testRedeclaration();

// <---------------------------------------------->

// 5. Block Scope and Loop: var vs let in Loops
function loopWithVar() {
  for (var i = 0; i < 3; i++) {
    console.log(i);  // Output: 0, 1, 2 (inside loop)
  }
  console.log(i);  // Output: 3 (leaked out of the loop)
}

function loopWithLet() {
  for (let j = 0; j < 3; j++) {
    console.log(j);  // Output: 0, 1, 2 (inside loop)
  }
  // console.log(j);  // ReferenceError: j is not defined (block-scoped)
}

loopWithVar();
loopWithLet();

// <-----------------------00000000000000000000000000000000----------------------->


// Rest and Spread

// 1. Rest Parameter
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4)); 
console.log(sum(5, 10));    

// <---------------------------------------------->

// 2. Spread with Arrays
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));  

// <---------------------------------------------->

// 3. Spread with Objects
function updatePerson(person, updates) {
  return { ...person, ...updates };
}

const person3 = { name: "Swadheen", age: 25 };
const updates = { age: 26, city: "Cuttack" };

console.log(updatePerson(person3, updates));

// <---------------------------------------------->

// 4. Rest with Destructuring
function extractFirstAndRest(arr) {
  const [first, ...rest] = arr;
  return { first, rest };
}

console.log(extractFirstAndRest([1, 2, 3, 4]));  

// <---------------------------------------------->

// 5. Spread in Function Calls
function calculateTotal(...args) {
  return sum(...args);  // Spread operator to pass arguments to the sum function
}

function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(calculateTotal(10, 20, 30));  

// <-----------------------00000000000000000000000000000000----------------------->


// Destructuring Arrays and Objects

// 1. Array Destructuring (Swap Values)
function swap(a, b) {
  [a, b] = [b, a];  
  return { a, b };
}

console.log(swap(5, 10));  

// <---------------------------------------------->

// 2. Object Destructuring (Extracting Properties)
function displayPerson(person) {
  const { name, age } = person; 
  console.log(`Name: ${name}, Age: ${age}`);
}

// Example usage
const man = { name: "Rinku", age: 25 };
displayPerson(man); 

// <---------------------------------------------->

// 3. Nested Destructuring
function extractNestedData(obj) {
  const { name: { first, last }, age } = obj;  
  return `First Name: ${first}, Last Name: ${last}, Age: ${age}`;
}

const nestedObject = { name: { first: "Rinku", last: "prusty" }, age: 30 };
console.log(extractNestedData(nestedObject));

// <---------------------------------------------->

// 4. Default Values in Destructuring
function getCoordinates({ x = 0, y = 0 } = {}) {
  return `Coordinates: x = ${x}, y = ${y}`;
}

console.log(getCoordinates({ x: 5 })); 
console.log(getCoordinates());         

// <---------------------------------------------->

// 5. Rest in Destructuring
function getUserInfo(user) {
  const { name, ...rest } = user;  
  return { name, rest };
}

const user = { name: "Rinku", age: 25, city: "cuttack" };
console.log(getUserInfo(user));


// <-----------------------00000000000000000000000000000000----------------------->

// Optional Chaining 

// 1. Basic Optional Chaining (Accessing Nested Properties Safely)

function getUserCity(user) {
  return user?.address?.city;  
}
const user1 = { name: "Rinku", address: { city: "Cuttack" } };
const user2 = { name: "Pinku" };

console.log(getUserCity(user1));  
console.log(getUserCity(user2));

// <---------------------------------------------->

// 2. Optional Chaining with Arrays (Accessing First Element)
function getFirstFriend(user) {
  return user?.friends?.[0];  
}

const userWithFriends = { name: "Rinku", friends: ["Rahul", "Chiku"] };
const userWithoutFriends = { name: "Aparna" };

console.log(getFirstFriend(userWithFriends));
console.log(getFirstFriend(userWithoutFriends));

// <---------------------------------------------->

// 3. Optional Chaining with Function Calls
function callOptionalMethod(obj) {
  return obj?.greet?.();  
}

const objWithMethod = { greet: () => "Hello!" };
const objWithoutMethod = { name: "Jake" };

console.log(callOptionalMethod(objWithMethod));
console.log(callOptionalMethod(objWithoutMethod));

// <---------------------------------------------->

// 4. Optional Chaining with Nested Objects
function getNestedProperty(obj) {
  return obj?.a?.b?.c?.d;
}

const nestedObj = { a: { b: { c: { d: "Value found" } } } };
const incompleteObj = { a: { b: {} } };

console.log(getNestedProperty(nestedObj));
console.log(getNestedProperty(incompleteObj));  

// <---------------------------------------------->

// 5. Optional Chaining with Default Values
function getNestedPropertyWithDefault(obj) {
  return obj?.a?.b?.c?.d ?? "Not Available"; 
}

const nestedObj2 = { a: { b: { c: { d: "Value found" } } } };
const incompleteObj2 = { a: { b: {} } };

console.log(getNestedPropertyWithDefault(nestedObj2));
console.log(getNestedPropertyWithDefault(incompleteObj2));


// <-----------------------00000000000000000000000000000000----------------------->