//UC10
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;

// Function to get working hours based on employee type
const getWorkingHours = (empCheck) => {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
};

// Function to calculate daily wage
const calcDailyWage = (empHrs) => empHrs * WAGE_PER_HOUR;

// Array to store daily records
let empDailyRecords = [];
let totalEmpHrs = 0;
let totalWorkingDays = 0;

// Generating employee daily records
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    
    let dailyRecord = {
        day: totalWorkingDays,
        hoursWorked: empHrs,
        wageEarned: calcDailyWage(empHrs)
    };
    
    empDailyRecords.push(dailyRecord);
}

// Display the employee records
console.log("Employee Daily Records:");
console.log(empDailyRecords);
