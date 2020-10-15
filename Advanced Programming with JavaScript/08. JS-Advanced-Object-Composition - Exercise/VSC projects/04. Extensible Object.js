// function solve() { //v1

//     return {
//         extend: function (template) {
//             Object.keys(template).forEach(key => {

//                 if (typeof template[key] === "function") {
//                     Object.getPrototypeOf(this)[key] = template[key]; //copies all properties of the template to the parent object and adds them to the object's prototype
//                 } else {
//                     this[key] = template[key];
//                 }
//             });
//         }
//     };
// }

// solve = () => ({ //v2

//     __proto__: {},
//     extend: function (template) {
//         Object.entries(template).forEach(([key, value]) => {

//             if (typeof value === "function") {
//                 this.__proto__[key] = value;
//             } else {
//                 this[key] = value;
//             }
//         });
//     },
// });

function solve() { //v3

    this.__proto__ = {};
    this.extend = function (template) {
        Object.entries(template).forEach(([key, value]) => {

            if (typeof value === "function") {
                this.__proto__[key] = value;
            } else {
                this[key] = value;
            }
        });
    };

    return {
        __proto__,
        extend,
    };
}

console.log(solve().extend({
    extensionMethod: function () {},
    extensionProperty: 'someString',
}));