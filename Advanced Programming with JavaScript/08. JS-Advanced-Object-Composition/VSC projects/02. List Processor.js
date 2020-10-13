// function solve(input) {

//     let listCommands = (function () {
//         let processor = [];

//         return {
//             add: (string) => processor.push(string),
//             remove: (string) => processor = processor.filter(x => x !== string),
//             print: () => console.log(processor),
//         }
//     })();

//     for (const element of input) {
//         let [command, string] = element.split(" ");
//         listCommands[command](string);
//     }
// }

function solve(input) {

    let listProcessorBuilder = function () {
        let list = [];

        return {
            add: (string) => list.push(string),
            remove: (string) => list.splice(list, indexOf(string), 1),
            print: () => console.log(list.join(",")),
        };
    }
    
    let listProcesor = listProcessorBuilder();
    input.map(x=> x.split(" ")).forEach(([command, argument]) => listProcesor[command](argument));
    
}
solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);