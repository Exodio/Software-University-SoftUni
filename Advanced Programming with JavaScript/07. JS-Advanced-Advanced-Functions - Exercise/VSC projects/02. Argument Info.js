function solve(...arguments) { 

    argsData = {};

    arguments.forEach(arg => { // The ... can be placed here as well
        let argType = typeof (arg);
        console.log(`${argType}: ${arg}`);

        if (!argsData.hasOwnProperty(argType)) {
            argsData[argType] = 0;
        }

        argsData[argType]++;
    });

    let argsResult = Object.entries(argsData).sort((a, b) => b[1] - a[1]);
    argsResult.forEach(kvp => {
        console.log(`${kvp[0]} = ${kvp[1]}`);
    });
}

//input
solve('cat', 42, function () {
    console.log('Hello world!');
});
//output
// string: cat
// number: 42
// function: function () { console.log('Hello world!'); }
// string = 1
// number = 1
// function = 1
