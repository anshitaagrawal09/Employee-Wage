// Employee Payroll Class with Advanced Validations
class EmployeePayroll {
    constructor(id, name, salary, gender, startDate) {
        // Validate ID
        if (!this.validatePositiveNumber(id)) {
            throw new Error("Invalid ID: Employee ID must be a positive non-zero number.");
        }
        this.id = id;

        // Validate Name
        if (!this.validateName(name)) {
            throw new Error("Invalid Name: Name should start with a capital letter and have at least 3 characters.");
        }
        this.name = name;

        // Validate Salary
        if (!this.validatePositiveNumber(salary)) {
            throw new Error("Invalid Salary: Salary must be a positive non-zero number.");
        }
        this.salary = salary;

        // Validate Gender
        if (!this.validateGender(gender)) {
            throw new Error("Invalid Gender: Gender must be 'M' or 'F'.");
        }
        this.gender = gender;

        // Validate Start Date
        if (!this.validateStartDate(startDate)) {
            throw new Error("Invalid Date: Start date cannot be in the future.");
        }
        this.startDate = startDate;
    }

    // Method to validate name using RegEx
    validateName = (name) => /^[A-Z][a-zA-Z]{2,}$/.test(name);

    // Method to validate Employee ID & Salary (Non-zero Positive Numbers)
    validatePositiveNumber = (num) => /^[1-9][0-9]*$/.test(num);

    // Method to validate Gender (Must be 'M' or 'F')
    validateGender = (gender) => /^[MF]$/.test(gender);

    // Method to validate Start Date (Must Not be in the Future)
    validateStartDate = (date) => date instanceof Date && date <= new Date();

    // Method to display employee details
    getDetails = () =>
        `ID: ${this.id}, Name: ${this.name}, Gender: ${this.gender}, Salary: $${this.salary}, Start Date: ${this.startDate.toDateString()}`;
}

// Function to generate random salary
const getRandomSalary = () => Math.floor(Math.random() * 30000) + 40000;

// Creating Employees with Validations
let employees = [];

try {
    employees.push(new EmployeePayroll(101, "John", getRandomSalary(), "M", new Date(2023, 5, 10)));
    employees.push(new EmployeePayroll(102, "Jane", getRandomSalary(), "F", new Date(2022, 8, 15)));
    employees.push(new EmployeePayroll(0, "Alice", getRandomSalary(), "F", new Date(2024, 0, 1)));  // Invalid ID
    employees.push(new EmployeePayroll(103, "Bob", -50000, "M", new Date(2023, 2, 20)));  // Invalid Salary
    employees.push(new EmployeePayroll(104, "Chris", getRandomSalary(), "X", new Date(2023, 3, 5)));  // Invalid Gender
    employees.push(new EmployeePayroll(105, "Eve", getRandomSalary(), "F", new Date(2026, 11, 25)));  // Future Date
} catch (error) {
    console.error(error.message);
}

// Display Employee Details
console.log("\nValidated Employee Payroll Data:");
employees.forEach(emp => console.log(emp.getDetails()));
