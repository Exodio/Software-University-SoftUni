function solve(input) {
    
    let inputEscaped = line => line
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');

    let id = "   ";
    let table = `<table>\n${id}<tr>`;
    let parsedObj = JSON.parse(input);

    //Headers
    for (const kvp in parsedObj[0]) {
        let contentTh = Number.isFinite(kvp) ?
            kvp :
            inputEscaped(kvp);

        table += `<th>${contentTh}</th>`;
    }

    //Table Data
    for (let i = 0; i < parsedObj.length; i++) {

        table += `</tr>\n${id}<tr>`;

        for (const kvp in parsedObj[0]) {
            let contentTd = Number.isFinite(parsedObj[i][kvp]) ? parsedObj[i][kvp] : inputEscaped(parsedObj[i][kvp]);

            table += `<td>${contentTd}</td>`;
        }
    }

    table += "</tr>\n</table>";
    return table;
}

solve(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']);