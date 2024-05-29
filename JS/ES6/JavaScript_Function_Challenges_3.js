// Highest Paid
function highestPaid(employees) {
    // Finding the employee with the highest salary using destructuring
    let highestSalary = 0;
    let highestPaidEmployee = null;

    for (const employee of employees) {
        const { salary } = employee;
        if (salary > highestSalary) {
            highestSalary = salary;
            highestPaidEmployee = employee;
        }
    }

    return highestPaidEmployee;
}

// Example Invocation
const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

console.log(highestPaid(employees)); // Output: { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }

// Destructuring to Swap
function destructuringToSwap(employees) {
    // Swapping the first and last employees using destructuring
    const length = employees.length;

    if (length > 1) {
        [employees[0], employees[length - 1]] = [employees[length - 1], employees[0]];
    }

    return employees;
}

// Example Invocation
console.log(destructuringToSwap(employees)); 
// Output: 
// [
//   { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 },
//   { name: 'Jane Smith', age: 28, department: 'Finance', salary: 60000 },
//   { name: 'John Doe', age: 30, department: 'HR', salary: 50000 }
// ]
