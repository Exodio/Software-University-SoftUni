class Company {

    constructor() {
        this.departments = [];
        this.bestDepartments = {};
    }

    addEmployee(username, salary, position, department) {

        if (!username || (!salary && salary !== 0) || !position || !department) {
            throw new Error("Invalid input!");
        }

        if (salary < 0) {
            throw new Error(" Invalid input!");
        }

        if (!this.bestDepartments[department]) {
            this.bestDepartments[department] = [{
                username,
                salary,
                position,
            }];
        } else {
            this.bestDepartments[department].push({
                username,
                salary,
                position,
            });
        }

        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }

    calculateHighestSalary() {
        let highestAverageSalary = Object.keys(this.bestDepartments).sort((a, b) => {
            let departmentsA = this.bestDepartments[a].reduce((acc, employee) => acc + Number(employee.salary), 0) / this.bestDepartments[a].length;
            let departmentsB = this.bestDepartments[b].reduce((acc, employee) => acc + Number(employee.salary), 0) / this.bestDepartments[b].length;
            
            return departmentsB - departmentsA;
        })[0];

        let highestAverageResult = this.bestDepartments[highestAverageSalary].reduce((acc, employee) => acc + Number(employee.salary), 0) / this.bestDepartments[highestAverageSalary].length;

        return {
            highestAverageSalary,
            highestAverageResult,
        }
    }

    bestDepartment() {
        let highestAverage = this.calculateHighestSalary(this.bestDepartments);
        let resultOutput = "";

        resultOutput += `Best Department is: ${highestAverage.highestAverageSalary}\n`;
        resultOutput += `Average salary: ${highestAverage.highestAverageResult.toFixed(2)}\n`;
        resultOutput += this.bestDepartments[highestAverage.highestAverageSalary].sort((a, b) => {

            return b.salary - a.salary || a.username.localeCompare(b.username);

        }).map(el => {return `${el.username} ${el.salary} ${el.position}`}).join('\n');

        return resultOutput;
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
