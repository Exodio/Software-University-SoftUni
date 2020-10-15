// (function solve() { //v1

//     String.prototype.ensureStart = function (str) {
//         let line = this.substring(0, str.length);

//         if (line !== str) {
//             return str + this;
//         }

//         return this.toString();
//     };

//     String.prototype.ensureEnd = function (str) {

//         if (!this.includes(str)) {
//             return this + str;
//         }

//         return this.toString();
//     };

//     String.prototype.isEmpty = function () {

//         if (this.toString() === "") {
//             return true;
//         }

//         return false;
//     };

//     String.prototype.truncate = function (n) {

//         if (this.length <= n) {
//             return this.toString();
//         }

//         if (n < 4) {
//             return ".".repeat(n);
//         }

//         let line = this.toString().split(" ");

//         if (line.length === 1) {
//             return this.substring(0, n - 3) + '...';
//         }

//         let str = "";
//         for (const element of line) {

//             if ((str.length + element.length + 3) <= n) {
//                 str += element + " ";
//             } else {
//                 break;
//             }
//         }

//         return str.trim() + "...";
//     };

//     String.format = function () {
//         let params = [...arguments];
//         let string = params.shift();

//         params.map((el, index) => {
//             string = string.replace(`{${index}}`, el);
//         });

//         return string;
//     };
// }());

(() => { //v2

    String.prototype.ensureStart = function (str = "") { //This is equal to String.prototype[key] = function(str = ""); //we set the the functionality(our value) to our key and we attach it by using prototype to our build in String object (and we use string due to exercise requirements);

        if (!this.startsWith(str)) { //this => currentSrting, which we are working with;
            return str + this; //We atemmpt on using the current this in order to manipulate it;
        }

        return this.toString(); //We return it always to the main function as a value;
    };

    String.prototype.ensureEnd = function (str = "") {

        if (!this.endsWith(str)) {
            return this + str;
        }

        return this.toString();
    };

    String.prototype.isEmpty = function () {

        if (this.toString() === "") { //return this.length === 0; or we can use return !this.length;
            return true;
        }

        return false;
    };

    String.prototype.truncate = function (n) {

        if (n < 4) {
            return ".".repeat(n);
        }

        if (this.length <= n) {
            return this.toString();
        }

        let findSpace = this.lastIndexOf(" ");
        if (findSpace.length !== -1) {
            return this.substring(0, findSpace) + '...';
        } else {
            return this.substring(0, n - 3) + '...';
        }
    };

    String.format = function (str, ...params) {
        params.map((key, index) => {
            str = str.replace(`{${index}}`, key);
        });

        return str;
    };
})();


let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
    'quick', 'brown');
str = String.format('jumps {0} {1}',
    'dog');