// class Company {

//     constructor() {
//         this.departments = [];
//         this.departments = {};
//     }

//     addEmployee(username, salary, position, department) {

//         if (!username || (!salary && salary !== 0) || !position || !department) {
//             throw new Error("Invalid input!");
//         }

//         if (salary < 0) {
//             throw new Error(" Invalid input!");
//         }

//         if (!this.departments[department]) {
//             this.departments[department] = [{
//                 username,
//                 salary,
//                 position,
//             }];
//         } else {
//             this.departments[department].push({
//                 username,
//                 salary,
//                 position,
//             });
//         }

//         return `New employee is hired. Name: ${username}. Position: ${position}`;
//     }

//     calculateHighestSalary() {
//         let highestAverageSalary = Object.keys(this.departments).sort((a, b) => {
//             let departmentsA = this.departments[a].reduce((acc, employee) => acc + Number(employee.salary), 0) / this.departments[a].length;
//             let departmentsB = this.departments[b].reduce((acc, employee) => acc + Number(employee.salary), 0) / this.departments[b].length;

//             return departmentsB - departmentsA;
//         })[0];

//         let highestAverageResult = this.departments[highestAverageSalary].reduce((acc, employee) => acc + Number(employee.salary), 0) / this.departments[highestAverageSalary].length;

//         return {
//             highestAverageSalary,
//             highestAverageResult,
//         }
//     }

//     bestDepartment() {
//         let highestAverage = this.calculateHighestSalary(this.departments);
//         let resultOutput = "";

//         resultOutput += `Best Department is: ${highestAverage.highestAverageSalary}\n`;
//         resultOutput += `Average salary: ${highestAverage.highestAverageResult.toFixed(2)}\n`;
//         resultOutput += this.departments[highestAverage.highestAverageSalary].sort((a, b) => {

//             return b.salary - a.salary || a.username.localeCompare(b.username);

//         }).map(el => {return `${el.username} ${el.salary} ${el.position}`}).join('\n');

//         return resultOutput;
//     }
// }

// class Company {

//     constructor() {
//         this.departments = {};
//     }

//     addEmployee(username, salary, position, department) {

//         if (!username || (!salary && salary !== 0) || salary < 0 || !position || !department) {
//             throw new Error("Invalid input!");
//         }

//         if (!this.departments[department]) {
//             this.departments[department] = [{
//                 username,
//                 salary,
//                 position,
//             }];
//         } else {
//             this.departments[department].push({
//                 username,
//                 salary,
//                 position,
//             });
//         }

//         return `New employee is hired. Name: ${username}. Position: ${position}`;
//     }

//     calculateHighestSalary() {
//         let highestAverageSalary = Object.keys(this.departments).sort((a, b) => {
//             let departmentsA = this.departments[a].reduce((acc, employee) => acc + Number(employee.salary), 0) / this.departments[a].length;
//             let departmentsB = this.departments[b].reduce((acc, employee) => acc + Number(employee.salary), 0) / this.departments[b].length;

//             return departmentsB - departmentsA;
//         })[0];

//         let highestAverageResult = this.departments[highestAverageSalary].reduce((acc, employee) => acc + Number(employee.salary), 0) / this.departments[highestAverageSalary].length;

//         return {
//             highestAverageSalary,
//             highestAverageResult,
//         }
//     }

//     bestDepartment() {
//         let highestAverage = this.calculateHighestSalary(this.departments);
//         let resultOutput = "";

//         resultOutput += `Best Department is: ${highestAverage.highestAverageSalary}\n`;
//         resultOutput += `Average salary: ${highestAverage.highestAverageResult.toFixed(2)}\n`;
//         resultOutput += this.departments[highestAverage.highestAverageSalary].sort((a, b) => {

//             return b.salary - a.salary || a.username.localeCompare(b.username);

//         }).map(el => {return `${el.username} ${el.salary} ${el.position}`}).join('\n');

//         return resultOutput;
//     }
// }

class Company {

  constructor() {
    this.departments = [];
  }

  addEmployee(username, salary, position, department) {
    for (const argument of [username, salary, position, department]) {
      this.validate(argument);
    }

    if (!this.departments[department]) {
      this.departments[department] = [];
    }

    this.departments[department].push({ username, salary, position });

    return `New employee is hired. Name: ${username}. Position: ${position}`;
  }

  validate(value) {

    if (!value || value < 0) {

      throw new Error("Invalid input!");
    }
  }

  bestDepartment() {
    let departmentsObj = {};

    Object.entries(this.departments).forEach(([department, employees]) => {
      let totalSalary = employees
        .map((x) => x.salary)
        .reduce((acc, curr) => (acc += curr));

        departmentsObj[department] = totalSalary / employees.length;
    });

    let bestDepartment;
    let maxSalary = 0;

    Object.entries(departmentsObj).forEach(([department, averageSalary]) => {
      if (averageSalary > maxSalary) {
        maxSalary = averageSalary;
        bestDepartment = department;
      }
    });

    let output = `Best Department is: ${bestDepartment}\nAverage salary: ${departmentsObj[bestDepartment].toFixed(2)}\n`;

    this.departments[bestDepartment]
      .sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username))
      .forEach((employee) => {
        output += `${employee.username} ${employee.salary} ${employee.position}\n`;
      });

    return output.trim(); //trim is needed in order to be runned in judge system
  }
}

//input
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

//output
// Best Department is: Construction
// Average salary: 1500.00
// Stan 2000 architect
// Stanimir 2000 engineer
// Pesho 1500 electrical engineer
// Slavi 500 dyer
