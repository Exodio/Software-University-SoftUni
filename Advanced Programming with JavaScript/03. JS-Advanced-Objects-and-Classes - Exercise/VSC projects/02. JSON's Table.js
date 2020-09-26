function solve(input) {

    let parsedInput = input.map(line => JSON.parse(line));

    let table = content => `<table>\n${content}</table>`;
    let rows = row => `	<tr>\n${row}\t</tr>\n`;
    let data = data => `\t\t\<td>${data}</td>\n`;

    let result = parsedInput.reduce((accRows, row) => {

        tdEmployee = Object.values(row).reduce((accTd, td) => {

            return accTd + data(td);
        }, "");


        return accRows + rows(tdEmployee);
    }, "");

    console.log(table(result));
}


// function solve(input) {

//     let employees = [];
//     let result = "<table>\n";

//     input.forEach(employee => {
//         employees.push(JSON.parse(employee));
//     });

//     result += tableArray(employees) + "</table>";

//     console.log(result);

//     function tableArray(employees) {

//         let res = "";

//         employees.forEach(emp => {
//             res += "\t<tr>\n";

//             Object.values(emp).forEach(value => {
//                 res += `\t\t<td>${value}</td>\n`
//             });

//             res += "\t</tr>\n";
//         });

//         return result;
//     }
// }

solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
]);