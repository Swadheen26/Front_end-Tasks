// Combining Arrays
function combiningArrays(fruits, vegetables) {
    // Combining both arrays using the spread operator
    const groceries = [...fruits, ...vegetables];
    return groceries;
}

// Example
const fruits = ["apple", "banana", "orange"];
const vegetables = ["carrot", "broccoli", "spinach"];
console.log(combiningArrays(fruits, vegetables));

// Cloning Objects
function cloningObjects(person) {
    // Cloning the person object using the spread operator
    const personCopy = { ...person };
    return personCopy;
}

// Example 
const person = { name: "John", age: 30, address: "123 Main St" };
console.log(cloningObjects(person)); 

// Merging Objects
function mergingObjects(student, course) {
    // Merging the properties of both objects using the spread operator
    const studentWithCourse = { ...student, ...course };
    return studentWithCourse;
}

// Example 
const student = { name: "Alice", age: 20 };
const course = { courseName: "Math", teacher: "Mr. Smith" };
console.log(mergingObjects(student, course)); 
// Combining Nested Arrays
function combiningNestedArrays(array1, array2) {
    // Combining the nested arrays using the spread operator
    const combinedArray = [...array1, ...array2];
    return combinedArray;
}

// Example 
const array1 = [
    [1, 2],
    [3, 4],
    [5, 6],
];
const array2 = [
    [7, 8],
    [9, 10],
    [11, 12],
];
const combinedArray = combiningNestedArrays(array1, array2);
combinedArray.forEach(subArray => console.log(subArray));