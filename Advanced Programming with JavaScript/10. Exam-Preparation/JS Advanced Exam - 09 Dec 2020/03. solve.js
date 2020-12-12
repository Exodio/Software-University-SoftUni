function solveClasses() {
  class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.problems = [];
    }

    toString() {
      return `${this.firstName} ${this.lastName} is part of SoftUni community now!`;
    }
  }

  class Teacher extends Person {
    constructor(firstName, lastName) {
      super(firstName, lastName);
    }

    createProblem(id, difficulty) {
      this.problems.push({ id, difficulty });
      return this.problems;
    }

    getProblems() {
      return this.problems;
    }

    showProblemSolution(id) {
      const problem = this.problems.find((x) => x.id === id);
      
      if (!problem) {
        throw new Error(`Problem with id ${id} not found.`);
      }

      problem.difficulty--;
      return problem;
    }
  }

  class Student extends Person {
    constructor(firstName, lastName, graduationCredits, problems) {
      super(firstName, lastName);

      this.graduationCredits = graduationCredits;
      this.problems = problems;
      this.myCredits = 0;
      this.solvedProblems = [];
    }

    solveProblem(id) {
      const problem = this.problems.find((x) => x.id === id);

      if (!problem) {
        throw new Error(`Problem with id ${id} not found.`);
      }

      const exist = this.solvedProblems.find((x) => x.id === problem.id);

      if (!exist) {
        this.solvedProblems.push(problem);
        this.myCredits += problem.difficulty;
      }

      return this.myCredits;
    }

    graduate() {

      if (this.myCredits >= this.graduationCredits) {
        return `${this.firstName} ${this.lastName} has graduated succesfully.`;
      }

      const neededCredits = Math.abs(this.myCredits - this.graduationCredits);
      return `${this.firstName} ${this.lastName}, you need ${neededCredits} credits to graduate.`;
    }
  }

  return {
    Person,
    Teacher,
    Student,
  };
}
