function solve(arrString) {
    arrString.forEach(element => {
        let eachLine = element.split(" | ");
        let town = {
            town: eachLine[0],
            latitude: Number(eachLine[1]).toFixed(2),
            longitude: Number(eachLine[2]).toFixed(2),
        }
        console.log(town);

    });

}
solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
]);