function solve() {

    class Employee {
        constructor(name, age) {

            if (new.target === Employee) {
                throw new Error("Cannot instantiate directly."); //Cannot make an abstraction of the class Employee(parent class is abstract and cannot be directly instantiationed)
            }

            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }


        work() {
            let currentTask = this.tasks.shift();
            console.log(`${this.name} ${currentTask}`);
            this.tasks.push(currentTask);
        }

        getSalary() { //we get the whole sum salary, so that the manager class can override as he gets a bonus to his salary

            return this.salary;
        }

        collectSalary() {
            console.log(`${this.name} received ${this.getSalary()} this month.`);
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);

            this.tasks.push("is working on a simple task.");
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);

            this.tasks.push("is working on a complicated task.");
            this.tasks.push("is taking time off work.");
            this.tasks.push("is supervising junior workers.");
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.divident = 0;

            this.tasks.push("scheduled a meeting.");
            this.tasks.push("is preparing a quarterly report.");
        }

        getSalary() { //overrides the function we added in the base class in order to include the divident(bonus);
            return this.salary + this.divident; //return super.getSalary() + this.dividend;
        }
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager,
    };
}

let app = solve();
let juniorEmployee = new app.Junior("Peter", 40);
juniorEmployee.salary = 1200;
juniorEmployee.work();
juniorEmployee.collectSalary();