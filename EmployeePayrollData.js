//UC11b
class EmployeePayroll {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // Method to display employee details
    getDetails = () => `ID: ${this.id}, Name: ${this.name}, Salary: $${this.salary}`;
}

// Creating Employee Payroll Data
const employee1 = new EmployeePayroll(101, "John Doe", 50000);
const employee2 = new EmployeePayroll(102, "Jane Smith", 60000);
const employee3 = new EmployeePayroll(103, "Alice Johnson", 70000);

// Storing Employees in an Array
let employees = [employee1, employee2, employee3];

// Displaying Employee Details
employees.forEach(emp => console.log(emp.getDetails()));
