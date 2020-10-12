 solve = (input = []) => {

     let cars = {};

     let commandsList = {
         create: (name, inherits, parentName) => (cars[name] = Object.create(inherits ? cars[parentName] : {})),
         set: (name, key, value) => (cars[name][key] = value),
         print: (name) => console.log(properties(cars[name])),
     };

     function properties(obj) {
         let result = [];
         for (const key in obj) {
             result.push(`${key}:${obj[key]}`);
         }

         return result.join(", ");
     }

     input.map((command) => command.split(" ")).forEach(([command, ...arguments]) => commandsList[command](...arguments));
 }