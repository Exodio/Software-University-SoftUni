function solve(input) {

    input.sort((a, b) => a.length - b.length || a.localeCompare(b));

    for (const eachElement of input) {
        console.log(eachElement);
    }
}

solve(['alpha',
    'beta',
    'gamma'
]);