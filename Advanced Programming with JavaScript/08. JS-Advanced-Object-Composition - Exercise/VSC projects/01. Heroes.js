// function solve() { //v1

//     let mage = (name) => {
//         let state = {
//             name,
//             health: 100,
//             mana: 100,
//         };

//         return Object.assign(state, mages(state));
//     }

//     let fighter = (name) => {
//         let state = {
//             name,
//             health: 100,
//             stamina: 100,
//         };

//         return Object.assign(state, fighters(state));
//     }

//     let mages = (state) =>  ({
//         cast: (spell) => {
//             state.mana--;
//             console.log(`${state.name} cast ${spell}`);
//         },
//     });

//     let fighters = (state) => ({
//         fight: () => {
//             state.stamina--;
//             console.log(`${state.name} slashes at the foe!`);
//         },
//     });

//     return {
//         mage,
//         fighter,
//     };
// }


// function solve() {  //v2

//     return {
//         fighter: function (name = "") {
//             return {
//                 name,
//                 health: 100,
//                 stamina: 100,

//                 fight: function () {
//                     this.stamina--;
//                     console.log(`${this.name} slashes at the foe`);
//                 }
//             };
//         },

//         mage: function (name = "") {
//             return {
//                 name,
//                 health: 100,
//                 mana: 100,

//                 cast: function (spell) {
//                     this.mana--;
//                     console.log(`${this.name} cast ${spell}`);
//                 }
//             };
//         },
//     }
// }

solve = () => { //v3

    let fighter = function (name = "") {
        [this.name, this.health, this.stamina] = [name, 100, 100];

        this.fight = () => {
            this.stamina--;
            console.log(`${this.name} slashes at the foe`);
        }
    }

    let mage = function (name = "") {
        [this.name, this.health, this.mana] = [name, 100, 100];

        this.cast = (spell) => {
            this.mana--;
            console.log(`${this.name} cast ${spell}`);
        }
    }

    return {
        fighter: (name = "") => new fighter(name),
        fighter: (name = "") => new mage(name),
    };
}

//input
let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball");
scorcher.cast("thunder");
scorcher.cast("light");

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();

console.log(scorcher2.stamina);
console.log(scorcher.mana);