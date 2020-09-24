function solve(input) {

    let systemObj = {};

    input.forEach(element => {
        let [data, component, subcomponent] = element.split(" | ");

        if (!systemObj.hasOwnProperty(data)) {
            systemObj[data] = {};
        }

        if (!systemObj[data].hasOwnProperty(component)) {
            systemObj[data][component] = [];
            systemObj[data][component].push(subcomponent);
        } else {
            systemObj[data][component].push(subcomponent);
        }
    });

    let sortedKeys = Object.keys(systemObj).sort((a, b) => { //sorted by amount of components in descending order
        if (Object.keys(systemObj[a]).length === Object.keys(systemObj[b]).length) {
            return a.localeCompare(b);
        } else {
            return Object.keys(systemObj[b]).length - Object.keys(systemObj[a]).length;
        }
    });

    for (const eachElement of sortedKeys) {
        console.log(eachElement);

        let componentKeys = Object.keys(systemObj[eachElement]).sort((a, b) => { // sorted by alphabetical order
            if (systemObj[eachElement][a].length === systemObj[eachElement][b].length) {
                return a.localeCompare(b);
            } else {
                return systemObj[eachElement][b].length - systemObj[eachElement][a].length;
            }
        });

        for (const eachComponent of componentKeys) { //ordered by amount of subcomponents in descending order
            console.log(`|||${eachComponent}`);

            let subComponent = systemObj[eachElement][eachComponent];
            for (const key of subComponent) {
                console.log(`||||||${key}`);
            }
        }
    }
}

solve(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);