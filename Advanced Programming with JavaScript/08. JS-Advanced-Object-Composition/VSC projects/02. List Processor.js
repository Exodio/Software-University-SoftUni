function solve(input) {

    let listCommands = (function () {
        let processor = [];

        return {
            add: (string) => processor.push(string),
            remove: (string) => processor = processor.filter(x => x !== string),
            print: () => console.log(processor),
        }
    })();

    for (const element of input) {
        let [command, string] = element.split(" ");
        listCommands[command](string);
    }
}
solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);