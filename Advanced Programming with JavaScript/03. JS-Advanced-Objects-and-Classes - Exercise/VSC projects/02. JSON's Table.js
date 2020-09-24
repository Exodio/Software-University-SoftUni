function solve(input) {

    let parsedInput = input.map(x => JSON.parse(x));

    let table = content => `<table>\n${content}</table>`;
    let rows = row => `	<tr>\n${row}	</tr>\n`;
    let data = data => `		<td>${data}</td>\n`;

    let result = parsedInput.reduce((accRows, row) => {
        tdEmployee = Object.values(row).reduce((accTd, td) => {
            return accTd + data(td);
        }, "");
        return accRows + rows(tdEmployee);
    }, "");

    console.log(table(result));
}

solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
]);