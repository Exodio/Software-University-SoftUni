class List {

    constructor() {
        this.list = [];
        this.list.sort((a, b) => a - b);
        this.size = this.list.length; //or 0;
    }

    add(element) {
        this.list.push(element);
        this.size++;
        return this.list.sort((a, b) => a - b);
    }

    remove(index) {
        if (index < 0 || index >= this.list.length) {
            throw new Error();
        } else {
            this.size--;
            this.list.splice(index, 1);
            return this.list.sort((a, b) => a - b);
        }
    }

    get(index) {
        if (index < 0 || index >= this.list.length) {
            throw new Error();
        } else {
            return this.list[index];
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); //6
list.remove(1);
console.log(list.get(1)); //7