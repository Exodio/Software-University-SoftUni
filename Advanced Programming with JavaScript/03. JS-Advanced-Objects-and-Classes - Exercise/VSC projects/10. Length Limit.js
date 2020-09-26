function Stringer(string, InitialLength) {

    this.innerString = string;
    this.innerLength = InitialLength;

    this.increase = (InitialLength) => {this.innerLength += InitialLength};

    this.decrease = (InitialLength) => {this.innerLength = this.innerLength - InitialLength < 0 ? 0 : this.innerLength - InitialLength};

    this.toString = () => {return `${this.innerString.substr(0, this.innerLength)}${this.innerString.length > this.innerLength ? "...": ""}`};
}

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test