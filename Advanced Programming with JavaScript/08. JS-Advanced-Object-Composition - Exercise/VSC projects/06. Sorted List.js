// class List {
//     constructor() {
//         this.list = [];
//         this.list.sort((a, b) => a - b);
//         this.size = this.list.length; //or 0;
//     }

//     add(element) {
//         this.list.push(element);
//         this.size++;
//         return this.list.sort((a, b) => a - b);
//     }

//     remove(index) {
//         if (index < 0 || index >= this.list.length) {
//             throw new Error();
//         } else {
//             this.size--;
//             this.list.splice(index, 1);
//             return this.list.sort((a, b) => a - b);
//         }
//     }

//     get(index) {
//         if (index < 0 || index >= this.list.length) {
//             throw new Error();
//         } else {
//             return this.list[index];
//         }
//     }
// }

// let list = new List();
// list.add(5);
// list.add(6);
// list.add(7);
// console.log(list.get(1)); //6
// list.remove(1);
// console.log(list.get(1)); //7

// function solve() {

//     return {
//         elementsList: [],
//         size: 0,
//         add: function (element) {
//             this.elementsList.push(element);
//             this.elementsList.sort((a, b) => a - b);
//             this.size++;
//         },
//         remove: function (index) {

//             if (index < 0 || this.elementsList.length <= index) {
//                 throw new Error("Invalid index!");
//             }
//             this.elementsList.splice(index, 1);
//             this.size--;
//         },
//         get: function (index) {

//             if (index < 0 || this.elementsList.length <= index) {
//                 throw new Error("Invalid index!");
//             }
//             return this.elementsList[index];
//         },
//     };
// }

// let a = solve();
// a.add(5);
// console.log(a.size)

// let b = solve();
// console.log(b.size)

function solve() {

    let listElements = [];

    return {
        add,
        remove,
        get,
        size: 0,
    };

    function add(element) {
        listElements.push(element);
        listElements = listElements.sort((a, b) => a - b);
        this.size++;
    }

    function remove(index) {

        if (index >= 0 && index < listElements.length) {
            listElements.splice(index, 1);
            listElements = listElements.sort((a, b) => a - b);
            this.size--;
        }
    }

    function get(index) {

        if (index >= 0 && index < listElements.length) {
            return listElements[index];
        }
    }
}

let a = solve();
a.add(5);
console.log(a.size)

let b = solve();
console.log(b.size)