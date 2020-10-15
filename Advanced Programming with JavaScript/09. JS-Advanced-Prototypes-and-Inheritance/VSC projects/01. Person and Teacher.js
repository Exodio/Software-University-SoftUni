function personAndTeacher() {

    class Person {
        constructor(name = "", email = "") {
            [this.name, this.email] = [name, email];
        }
    }

    class Teacher extends Person {
        constructor(name = "", email = "", subject = "") {
            [this.name, this.email, this.subject] = [name, email, subject];
        }
    }

    return {
        Person,
        Teacher,
    };
}