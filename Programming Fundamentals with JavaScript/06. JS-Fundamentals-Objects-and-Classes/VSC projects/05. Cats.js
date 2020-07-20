function solve(arrInput) {
    let cats = [];

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meowMethod() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let i = 0; i < arrInput.length; i++) {
        let catArr = arrInput[i].split(" ");
        let [name, age] = catArr;

        let cat = new Cat(name, Number(age));
        cats.push(cat);
    }

    for (let eachCatElement of cats) { // Or you can implement a method here instead: cats.forEach(eachCatElement => eachCatElement.meowMethod());
        eachCatElement.meowMethod();
    }
//cats.forEach(eachCatElement => eachCatElement.meowMethod());
}
solve(['Mellow 2', 'Tom 5']);