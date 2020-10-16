function toStringExtension() {
    
    class Person {
        constructor(name = "", email = "") {
            [this.name, this.email] = [name, email];
        }

        toString() {
            return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {
        constructor(name = "", email = "", subject = "") {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            let teacherInfo = super.toString();
            return `${teacherInfo.substring(0, teacherInfo.length - 1)}, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name = "", email = "", course = "") {
            super(name, email);
            this.course = course;
        }

        toString() {
            let studentInfo = super.toString();
            return `${studentInfo.substring(0, studentInfo.length - 1)}, course: ${this.course})`;
        }
    }

    return {
        Person,
        Teacher,
        Student,
    };
}