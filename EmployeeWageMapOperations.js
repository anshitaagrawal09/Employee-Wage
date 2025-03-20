//UC9
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;

// Function to get working hours
const getWorkingHours = (empCheck) => {
    switch (empCheck) {
        case IS_PART_TIME: return PART_TIME_HOURS;
        case IS_FULL_TIME: return FULL_TIME_HOURS;
        default: return 0;
    }
};

// Function to calculate daily wage
const calcDailyWage = (empHrs) => empHrs * WAGE_PER_HOUR;

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageMap = new Map();
let empDailyHoursMap = new Map();

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
    empDailyHoursMap.set(totalWorkingDays, empHrs);
}

// a. Calculate total wage and total hours worked using Arrow Function
const totalWages = Array.from(empDailyWageMap.values()).reduce((total, wage) => total + wage, 0);
const totalHours = Array.from(empDailyHoursMap.values()).reduce((total, hours) => total + hours, 0);
console.log(`UC9A - Total Hours: ${totalHours}, Total Wages: ${totalWages}`);

// b. Show Full Working Days, Part Working Days, and No Working Days
let fullWorkingDays = [], partWorkingDays = [], noWorkingDays = [];

empDailyHoursMap.forEach((hours, day) => {
    if (hours === FULL_TIME_HOURS) fullWorkingDays.push(day);
    else if (hours === PART_TIME_HOURS) partWorkingDays.push(day);
    else noWorkingDays.push(day);
});

console.log(`UC9B - Full Working Days: ${fullWorkingDays}`);
console.log(`UC9B - Part Working Days: ${partWorkingDays}`);
console.log(`UC9B - No Working Days: ${noWorkingDays}`);
