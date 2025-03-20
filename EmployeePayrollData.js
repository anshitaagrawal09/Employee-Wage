const EMPLOYEE_COUNT = 3;

// Employee Payroll Constants
const BASE_SALARY = 30000;
const SALARY_MULTIPLIER = 10000;

// Employee Class
class EmployeePayroll {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // Method to display employee details
    getDetails = () => `ID: ${this.id}, Name: ${this.name}, Salary: $${this.salary}`;
}

// Array to store employee records
let employeeRecords = [];

// Generating Employee Payroll Data
for (let i = 1; i <= EMPLOYEE_COUNT; i++) {
    let employee = new EmployeePayroll(i, `Employee ${i}`, BASE_SALARY + i * SALARY_MULTIPLIER);
    employeeRecords.push(employee);
}

// a. Calculate Total Salary of All Employees
const totalSalary = employeeRecords.reduce((total, emp) => total + emp.salary, 0);
console.log(`Total Salary Paid: $${totalSalary}`);

// b. Show all Employees using forEach
console.log("\nEmployee Payroll Data:");
employeeRecords.forEach(emp => console.log(emp.getDetails()));

// c. Show Employees with Salary > 40000 using Map & Filter
const highSalaryEmployees = employeeRecords
    .filter(emp => emp.salary > 40000)
    .map(emp => `ID: ${emp.id}, Name: ${emp.name}`);

console.log("\nEmployees with Salary > 40000:");
console.log(highSalaryEmployees.join(", "));

// d. Show Employees with Salary <= 40000 using Map
const lowSalaryEmployees = employeeRecords
    .map(emp => (emp.salary <= 40000 ? `ID: ${emp.id}, Name: ${emp.name}` : null))
    .filter(emp => emp !== null);

console.log("\nEmployees with Salary <= 40000:");
console.log(lowSalaryEmployees.join(", "));
