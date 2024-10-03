
// Type Conversion (Explicit)

// 1. Basic Type Conversion:
function convertToNumber(value) {
    return Number(value);
  }
  
  console.log(convertToNumber("16"));    
  console.log(convertToNumber("20.5"));
  console.log(convertToNumber(true));    
  console.log(convertToNumber(false));   
  
// <---------------------------------------------->

// 2. String Conversion:
function convertToString(value) {
  return String(value);
}

console.log(convertToString(123));              
console.log(convertToString(true));             
console.log(convertToString([1, 2, 3]));        
console.log(convertToString({ key: "value" })); 

// <---------------------------------------------->

// 3. Complex Type Conversion:
function convertAndCompare(a, b) {
  const stringCompare = String(a) === String(b);

  const numberCompare = Number(a) === Number(b);

  return {
    stringComparison: stringCompare,
    numberComparison: numberCompare,
  };
}

console.log(convertAndCompare("10", 10));
console.log(convertAndCompare(false, 0));
console.log(convertAndCompare(true, 1));

// <-----------------------00000000000000000000000000000000----------------------->


// Type Coercion (Implicit)

// 1. Basic Coercion Check:
function checkCoercion(a, b) {
  const looseEquality = a == b;
  const strictEquality = a === b;

  console.log(`Loose Equality test between ${a} and ${b} (==): ${looseEquality}`);
  console.log(`Strict Equality test between ${a} and ${b} (===): ${strictEquality}`);
}

checkCoercion("5", 5);             
checkCoercion(false, 0);           
checkCoercion(null, undefined);    

// <---------------------------------------------->

// 2. Coercion in Arithmetic:
function coerceInArithmetic(a, b) {
  console.log(`Addition: ${a + b}`);         
  console.log(`Subtraction: ${a - b}`);
  console.log(`Multiplication: ${a * b}`);
  console.log(`Division: ${a / b}`);
}

coerceInArithmetic("10", 5);  
coerceInArithmetic("3", true); 

// <---------------------------------------------->

// 3. Implicit Coercion in Conditionals:
function coerceInConditionals(value) {
  if (value) {
    console.log(`${value} is truthy`);
  } else {
    console.log(`${value} is falsy`);
  }
}

coerceInConditionals(""); 
coerceInConditionals(0);  
coerceInConditionals("hello");
coerceInConditionals([]);
coerceInConditionals(null);

// <-----------------------00000000000000000000000000000000----------------------->

// Type Identification in JavaScript

// 1. Identify Type Using typeof:
function identifyType(value) {
  console.log(`Type of ${value}:`, typeof value);
}


identifyType(42);               
identifyType("Hello");
identifyType(true);   
identifyType([1, 2, 3]);        
identifyType({ key: "value" }); 
identifyType(function() {});    

// <---------------------------------------------->

// 2. Check Object vs Array:
function isArrayorObject(value) {
  if (Array.isArray(value)) {
    return "Array";
  } else if (typeof value === "object" && value !== null) {
    return "Object";
  } else {
    return "Neither an Array nor an Object";
  }
}

console.log(isArrayorObject([1, 2, 3]));       
console.log(isArrayorObject({ key: "value" }));
console.log(isArrayorObject(42));   

// <---------------------------------------------->

// 3. Complex Type Identification:
function identifyComplexType(values) {
  return values.map(value => {
    if (Array.isArray(value)) {
      return "Array";
    } else if (value instanceof Function) {
      return "Function";
    } else if (value === null) {
      return "Null";
    } else if (value instanceof Object) {
      return "Object";
    } else {
      return typeof value;
    }
  });
}

console.log(identifyComplexType([42, "Hello", true, [1, 2, 3], { key: "value" }, null, function() {}]));

// <-----------------------00000000000000000000000000000000----------------------->

// Statements vs Expressions

// 1. Identify Statement vs Expression:

// Example of a statement:
let x = 6;
for (let i = 0; i < x; i++){
  console.log(i); 
}

// Example of an expression:
let result = 2 + 2;

// <---------------------------------------------->

// 2. Expression in Function:
function expressionInFunction(a, b) {
  return a + b; // Expression that returns the sum
}

// Using the function in a statement
if (expressionInFunction(3, 4) > 5) {
  console.log("The result is greater than 5");  // Statement with an expression
}

// <---------------------------------------------->

// 3. Complex Expression in Conditional:
function complexExpression(a, b, c) {
  if (a + b > c) {
    return "a + b is greater than c"; 
  } else if (a * b < c) {
    return "a * b is less than c";   
  } else {
    return "No condition met";
  }
}


console.log(complexExpression(5, 2, 10)); 
console.log(complexExpression(5, 7, 10));

// <-----------------------00000000000000000000000000000000----------------------->


// For Loop

// 1. Basic For Loop:
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// <---------------------------------------------->

// 2. For Loop with Array:
function printArrayElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printArrayElements(["apple", "banana", "cherry"]);

// <---------------------------------------------->

// 3. Nested For Loop (Multiplication Table):
function createMultiplicationTable(n) {
  const table = [];
  for (let i = 1; i <= n; i++) {
    const row = [];
    for (let j = 1; j <= n; j++) {
      row.push(i * j);
    }
    table.push(row);
  }
  return table;
}

console.log(createMultiplicationTable(5));

// <-----------------------00000000000000000000000000000000----------------------->

// Switch Case
// 1. Basic Switch Case:
function getDayOfWeek(dayNumber) {
  switch (dayNumber) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Invalid day number";
  }
}

console.log(getDayOfWeek(3));

// <---------------------------------------------->

// 2. Switch with Fall-through:
function getDayOfWeek(dayNumber) {
  switch (dayNumber) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
    case 7:
      return "Weekend";
    default:
      return "Invalid day number";
  }
}


console.log(getDayOfWeek(6));
console.log(getDayOfWeek(7));

// <---------------------------------------------->

// 3. Switch Case with Multiple Conditions (Classify Animal):
function classifyAnimal(animal) {
  switch (animal.toLowerCase()) {
    case "dog":
    case "cat":
    case "elephant":
      return "Mammal";
    case "sparrow":
    case "eagle":
    case "penguin":
      return "Bird";
    case "snake":
    case "lizard":
    case "crocodile":
      return "Reptile";
    case "shark":
    case "goldfish":
      return "Fish";
    default:
      return "Unknown category";
  }
}

console.log(classifyAnimal("dog"));      
console.log(classifyAnimal("eagle"));    
console.log(classifyAnimal("snake"));    
console.log(classifyAnimal("shark"));    

// <-----------------------00000000000000000000000000000000----------------------->


// While Loop
// 1. Basic While Loop:
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// <---------------------------------------------->

// 2. While Loop with Condition:
function countDownFrom(n) {
  while (n >= 0) {
    console.log(n);
    n--;
  }
}

countDownFrom(5);

// <---------------------------------------------->

// 3. While Loop with Break Condition:
function findFirstEven(numbers) {
  let i = 0;
  while (i < numbers.length) {
    if (numbers[i] % 2 === 0) {
      return numbers[i];
    }
    i++;
  }
  return "No even number found";
}

console.log(findFirstEven([1, 3, 7, 8, 10]));

// <-----------------------00000000000000000000000000000000----------------------->

// Do-While Loop
// 1. Basic Do-While Loop:
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);

// <---------------------------------------------->

// 2. Input Validation Using Do-While:
function validatePassword() {
  let password = "abc123";
  
  do {
    console.log(`Checking password: "${password}"`);
    password = "correctPassword"; // Simulating a valid password being set
  } while (password.length <= 6);

  console.log("Password accepted.");
}

validatePassword();

// <---------------------------------------------->

// 3. Random Number Guessing Game:
function guessNumber() {
  const targetNumber = 7; // Set a target number for simplicity
  let guess;
  let attempts = 0;

  do {
    guess = Math.floor(Math.random() * 10) + 1; // Generate random number between 1 and 10
    attempts++;
    console.log(`Attempt ${attempts}: You guessed ${guess}`);
  } while (guess !== targetNumber);

  console.log(`Correct! It took you ${attempts} attempts to guess the number.`);
}

guessNumber();


