// A. Truthy/Falsy Values

 // A-1 :- Check Truthiness
    function isTruthy(value) {
        return Boolean(value);
    }
    
    console.log(isTruthy(0));      
    console.log(isTruthy(1));      
    console.log(isTruthy(""));     
    console.log(isTruthy("hello"));
    console.log(isTruthy(null));
    console.log(isTruthy([1]));


// <----------------------------------------------------------->
 // 2. Falsy Values Count
 function countFalsyValues(arr) {
    let falsyCount = 0;
    for (let i = 0; i < arr.length; i++) {
      if (!arr[i]) {
        falsyCount++;
      }
    }
    return falsyCount;
  }
  

  const testArr1 = [0, 1, "", "hello", false, NaN, undefined, true, null];
  const testArr2 = [42, "swadheen", {}, [], 0, null, false, ""]; 
  
  console.log(countFalsyValues(testArr1));  
  console.log(countFalsyValues(testArr2));  


// <----------------------------------------------------------->
//   3. Filter Truthy Values
function filterTruthyValues(arr) {
    let truthyArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
        truthyArray.push(arr[i]);
      }
    }
    return truthyArray;
  }
  

const mixArray = [0, 1, "", "world", null, 42, false];
console.log(filterTruthyValues(mixArray)); 

//  --------------------------------************************************************************-----------------------------------

// B. Comparison Operators

// 1. Basic Comparison
function compareNumbers(a, b) {
    if (a > b) {
      return "a is greater than b";
    } else if (a < b) {
      return "a is less than b";
    } else {
      return "a is equal to b";
    }
  }
  
  
console.log(compareNumbers(3, 4));   
console.log(compareNumbers(5, 2));   
console.log(compareNumbers(7, 7)); 


// <----------------------------------------------------------->
// 2. Comparison Table
function compareWithValue(numbers, value) {
    numbers.forEach(num => {
      console.log(`Comparing ${num} with ${value}:`);
      console.log(`${num} > ${value} : ${num > value}`);
      console.log(`${num} < ${value} : ${num < value}`);
      console.log(`${num} >= ${value} : ${num >= value}`);
      console.log(`${num} <= ${value} : ${num <= value}`);
      console.log('--------------------------');
    });
  }
  
compareWithValue([2, 5, 8, 10], 6);

// <----------------------------------------------------------->
// 3. Comparison Challenge
  function compareThreeNumbers(a, b, c) {
    if (a > b && a > c) {
      return "a is the largest";
    } else if (b > a && b > c) {
      return "b is the largest";
    } else if (c > a && c > b) {
      return "c is the largest";
    } else if (a === b && a === c) {
      return "All numbers are equal";
    } else if (a === b && a > c) {
      return "a and b are equal and larger than c";
    } else if (b === c && b > a) {
      return "b and c are equal and larger than a";
    } else if (a === c && a > b) {
      return "a and c are equal and larger than b";
    } else {
      return "No clear largest number";
    }
  }
  
  console.log(compareThreeNumbers(3, 3, 3));  
  console.log(compareThreeNumbers(7, 5, 4));  
  console.log(compareThreeNumbers(4, 8, 6));  

//  --------------------------------************************************************************-------------------------------------

// C. Mathematical Operators

  // 1. Basic Arithmetic:
  function performArithmetic(a, b) {
    let result = {
      addition: a + b,
      subtraction: a - b,
      multiplication: a * b,
    };

    if (b === 0) {
      result.division = "Cannot divide by zero";
    } else {
      result.division = a / b;
    }
  
    return result;
  }
  
  console.log(performArithmetic(10, 5));


// <----------------------------------------------------------->
  // 2. Calculate Average:
  function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }

    if (numbers.length > 0){
      return sum / numbers.length
    } else {
      return 0
    }
    
  }
  
  console.log(calculateAverage([10, 20, 30, 40])); 


  // <----------------------------------------------------------->
  // 3. Complex Calculation:
  function calculateExpression(a, b, c) {
    if (b - a === 0) {
      return "Division by zero is not allowed";
    }
    return ((a + b) * c) / (b - a);
  }
  

  console.log(calculateExpression(5, 10, 2));

//  --------------------------------************************************************************-------------------------------------------
  
// D. Relational Operators

  // 1. Basic Relational Check:
  function checkRelational(a, b) {
    if (a > b) {
      return "a is greater than b";
    } else if (a < b) {
      return "a is less than b";
    } else {
      return "a is equal to b";
    }
  }
 
  console.log(checkRelational(10, 5));  
  console.log(checkRelational(5, 10));  
  console.log(checkRelational(10, 10));

  // <----------------------------------------------------------->
  // 2. Range Check:
  function isInRange(value, min, max) {
    return value >= min && value <= max;
  }
  
  console.log(isInRange(15, 10, 20)); 
  console.log(isInRange(5, 10, 20));

  // <----------------------------------------------------------->
  // 3. Complex Relational Logic:
  function evaluateCondition(a, b, c) {
    if (a > b && a > c) {
      return "a is the largest";
    } else if (b > a && b < c) {
      return "b is between a and c";
    } else if (c < a && c < b) {
      return "c is less than a and b";
    } else {
      return "No specific condition met";
    }
  }
  
  console.log(evaluateCondition(10, 5, 2));  
  console.log(evaluateCondition(5, 10, 15)); 
  console.log(evaluateCondition(15, 20, 10));

//  --------------------------------************************************************************-------------------------------------------
// E. Logical Operators

  // 1. Basic Logical Operations:
  function logicalOperations(a, b) {
    return {
      AND: a && b,
      OR: a || b,
      NOT_A: !a,
      NOT_B: !b
    };
  }
  
  console.log(logicalOperations(true, false));


  // <----------------------------------------------------------->
  // 2. Eligibility Check:
  function isEligible(age, hasPermission) {
    return age >= 18 && hasPermission;
  }

  console.log(isEligible(20, true));   
  console.log(isEligible(16, true));  
  console.log(isEligible(20, false));


  // <----------------------------------------------------------->
  // 3. Complex Logic:
  function evaluateConditions(a, b, c) {
    if (a > 0 && b < 0) {
      return "a is positive and b is negative";
    } else if (b === 0 || isNaN(c)) {
      return "b is zero or c is not a number";
    } else if (a !== b || c > 10) {
      return "a is not equal to b or c is greater than 10";
    } else {
      return "No conditions met";
    }
  }
  
  console.log(evaluateConditions(5, -3, 15));  
  console.log(evaluateConditions(5, 0, NaN));
  console.log(evaluateConditions(5, 5, 12));


//  --------------------------------************************************************************-------------------------------------------
// F. Conditional Statements

  // 1. Simple If Statement:
  function checkEvenOdd(number) {
    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  
  console.log(checkEvenOdd(7));  
  console.log(checkEvenOdd(10)); 

  // <----------------------------------------------------------->
  // 2. Grade Evaluation:
  function evaluateGrade(score) {
    if (score >= 90 && score <= 100) {
      return "A";
    } else if (score >= 80 && score < 90) {
      return "B";
    } else if (score >= 70 && score < 80) {
      return "C";
    } else if (score >= 60 && score < 70) {
      return "D";
    } else {
      return "F";
    }
  }
  
  console.log(evaluateGrade(85));  
  console.log(evaluateGrade(95));  
  console.log(evaluateGrade(65));  


  // <----------------------------------------------------------->
  // 3. Discount Calculation:
  function calculateDiscount(price, isMember) {
    if (isMember) {
      return price * 0.9;  // 10% discount
    } else {
      return price;
    }
  }
  
  // Test case
  console.log(calculateDiscount(1000, true));   
  console.log(calculateDiscount(1000, false)); 


//  --------------------------------************************************************************-------------------------------------------
// G. Prefix & Postfix Operators

  // 1. Prefix vs. Postfix: 
  function prefixPostfixDemo() {
    let a = 5;
  
    console.log("Initial value of a:", a);
  
    // Postfix increment: a++ 
    console.log("Postfix increment (a++):", a++);  
    console.log("Value of a after postfix increment:", a);
  
    // Prefix increment: ++a 
    console.log("Prefix increment (++a):", ++a);  
    console.log("Value of a after prefix increment:", a); 
  }
  

  prefixPostfixDemo();

  
  // <----------------------------------------------------------->
  // 2. Prefix & Postfix Calculation:
  function calculatePrefixPostfix(a, b) {
    let postfixA = a++;  
    let prefixB = ++b;   

    return {
      postfixA,  
      newA: a,   
      prefixB,   
      newB: b    
    };
  }

 
  console.log(calculatePrefixPostfix(5, 10));

  // <----------------------------------------------------------->
  // 3. Complex Prefix/Postfix Operations:

  function complexOperation(a, b) {
    console.log(`Initial values: a = ${a}, b = ${b}`);
  
    // Postfix increment on a, prefix increment on b
    let result1 = a++ + ++b;
    console.log(`After a++ + ++b: result1 = ${result1}, a = ${a}, b = ${b}`);
  
    // Prefix increment on a, postfix increment on b
    let result2 = ++a + b++;
    console.log(`After ++a + b++: result2 = ${result2}, a = ${a}, b = ${b}`);
  
    // More complex operations
    let result3 = a++ * --b;
    console.log(`After a++ * --b: result3 = ${result3}, a = ${a}, b = ${b}`);
  
    return { finalA: a, finalB: b, result1, result2, result3 };
  }
  
  console.log(complexOperation(3, 5));

  