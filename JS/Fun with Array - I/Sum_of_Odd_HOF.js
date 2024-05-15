let arr = [1, 2, 3, 4];

// Filter out the odd elements
let oddElements = arr.filter(el => el % 2 !== 0);

// Use reduce to sum the odd elements
let sumOfOddElements = oddElements.reduce((acc, el) => acc + el, 0);

console.log(sumOfOddElements);