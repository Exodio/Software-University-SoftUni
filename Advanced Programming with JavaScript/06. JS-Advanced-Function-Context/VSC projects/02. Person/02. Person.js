class Person {

    constructor(first, last) {
        this.f = first;
        this.l = last;
    }

    get firstName() {
        return this.f;
    }
    set firstName(name) {
        return this.f = name;
    }

    get lastName() {
        return this.l;
    }
    set lastName(name) {
        return this.l = name;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(name) {
        let [first, last] = name.split(" ");

        if (first !== undefined && last !== undefined) {
            this.f = first;
            this.l = last;
        }
        return `${this.firstName} ${this.lastName}`;
    }
}