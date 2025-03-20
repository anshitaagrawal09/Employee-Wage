//UC12
class EmployeePayroll {
    constructor(id, name, salary, gender, startDate) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate = new Date(startDate); // Converts to Date object
    }

    getDetails = () => 
        `ID: ${this.id}, Name: ${this.name}, Salary: ₹${this.salary}, Gender: ${this.gender}, Start Date: ${this.startDate.toDateString()}`;
}

// Creating Employee Payroll Data
let emp1 = new EmployeePayroll(101, "Amit Sharma", 50000, "Male", "2023-04-15");
let emp2 = new EmployeePayroll(102, "Priya Mehta", 60000, "Female", "2022-06-10");
let emp3 = new EmployeePayroll(103, "Rahul Verma", 55000, "Male", "2024-01-05");

// Storing employees in an array
let employees = [emp1, emp2, emp3];

// Display Employee Details
employees.forEach(emp => console.log(emp.getDetails()));




// // Employee Payroll Class with Gender and Start Date
// class EmployeePayroll {
//     constructor(id, name, salary, gender, startDate) {
//         this.id = id;
//         this.name = name;
//         this.salary = salary;
//         this.gender = gender;
//         this.startDate = startDate;
//     }

//     // Method to display employee details
//     getDetails = () => 
//         `ID: ${this.id}, Name: ${this.name}, Gender: ${this.gender}, Salary: $${this.salary}, Start Date: ${this.startDate.toDateString()}`;
// }

// // Function to generate random salary
// const getRandomSalary = () => Math.floor(Math.random() * 30000) + 40000;

// // Creating Employee Payroll Data with Gender and Start Date
// let employees = [
//     new EmployeePayroll(101, "John Doe", getRandomSalary(), "Male", new Date(2023, 5, 10)),
//     new EmployeePayroll(102, "Jane Smith", getRandomSalary(), "Female", new Date(2022, 8, 15)),
//     new EmployeePayroll(103, "Alice Johnson", getRandomSalary(), "Female", new Date(2024, 0, 1))
// ];

// // Display Employee Details
// console.log("\nExtended Employee Payroll Data:");
// console.table(employees);

