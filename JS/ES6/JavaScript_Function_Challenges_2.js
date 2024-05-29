// Employee Information
function employeeInformation(employees) {
    // Destructuring to get the second employee's name and department
    const [, { name: secondEmployeeName, department: secondEmployeeDepartment }] = employees;
    return { secondEmployeeName, secondEmployeeDepartment };
}

// Example Invocation
const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

console.log(employeeInformation(employees)); // Output: { secondEmployeeName: 'Jane Smith', secondEmployeeDepartment: 'Finance' }

// Average Salary
function averageSalary(employees) {
    // Destructuring to calculate the average salary
    let totalSalary = 0;
    for (const { salary } of employees) {
        totalSalary += salary;
    }
    const averageSalary = totalSalary / employees.length;
    return averageSalary;
}

// Example Invocation
console.log(averageSalary(employees)); 

// Third Employee Info
function thirdEmployeeInfo(employees) {
    // Destructuring to get the third employee's details
    const [, , { name: thirdEmployeeName, age: thirdEmployeeAge, salary: thirdEmployeeSalary }] = employees;
    const bonus = thirdEmployeeSalary * 0.1;
    return `Employee: ${thirdEmployeeName}, Age: ${thirdEmployeeAge}, Salary: ${thirdEmployeeSalary}, Bonus: ${bonus}`;
}

// Example Invocation
console.log(thirdEmployeeInfo(employees)); 
