// function solve(input) {

//     let systemObj = {};

//     input.forEach(line => {
//         let [data, component, subcomponent] = line.split(" | ");

//         if (!systemObj.hasOwnProperty(data)) {
//             systemObj[data] = {};
//         }

//         if (!systemObj[data].hasOwnProperty(component)) {
//             systemObj[data][component] = [];
//         } 

//         systemObj[data][component].push(subcomponent);
//     });

//     let sortedKeys = Object.keys(systemObj).sort((a, b) => { //sorted by amount of components in descending order
//         if (Object.keys(systemObj[a]).length === Object.keys(systemObj[b]).length) {
//             return a.localeCompare(b);
//         } else {
//             return Object.keys(systemObj[b]).length - Object.keys(systemObj[a]).length;
//         }
//     });

//     for (const eachElement of sortedKeys) {
//         console.log(eachElement);

//         let componentKeys = Object.keys(systemObj[eachElement]).sort((a, b) => { // sorted by alphabetical order
//             if (systemObj[eachElement][a].length === systemObj[eachElement][b].length) {
//                 return a.localeCompare(b);
//             } else {
//                 return systemObj[eachElement][b].length - systemObj[eachElement][a].length;
//             }
//         });

//         for (const eachComponent of componentKeys) { //ordered by amount of subcomponents in descending order
//             console.log(`|||${eachComponent}`);

//             let subComponent = systemObj[eachElement][eachComponent];
//             for (const key of subComponent) {
//                 console.log(`||||||${key}`);
//             }
//         }
//     }
// }



// function solve(input) {


//     let result = input.reduce((acc, line => {
//         let [data, component, subcomponent] = line.split(" | ");

//         if (!acc.hasOwnProperty(data)) {
//             acc[data] = {};
//         }

//         if (!acc[data].hasOwnProperty(component)) {
//             acc[data][component] = [];
//         }

//         acc[data][component].push(subcomponent);
//         return acc;
//     }, {}),

//     Object.entries(result).sort((a, b) => { //sorted by amount of components and data in descending order
//             return Object.entries(b[1]).length - Object.entries(a[1]).length || a[0].localeCompare(b[0]); //We first take coreA,coreB,coreC's length's) || (we take each name and compare it (Lamba, SULS, Indice)
//         }) 
//         .forEach(([dataName, components]) => {
//             console.log(dataName); //Final dataName(data) component print

//             Object.entries(components).sort((a, b) => { //sorted by amount of components and subcomponents in descending order
//                     return b[1].length - a[1].length; //Components length check (ex: Home page, Login page, Register page)
//                 })
//                 .forEach(([comp, subComp]) => {
//                     console.log(`|||${comp}`); //Final component print

//                     subComp.forEach(subComponent => {
//                         console.log(`|||||||${subComponent}`); //Final subcomponent print
//                     });
//                 });
//         }));
// }

function solve(input) {

    let systemObj = {};

    input.forEach(line => {
        let [data, component, subcomponent] = line.split(" | ");

        if (!systemObj.hasOwnProperty(data)) {
            systemObj[data] = {};
        }

        if (!systemObj[data].hasOwnProperty(component)) {
            systemObj[data][component] = [];
        }

        systemObj[data][component].push(subcomponent);
    });

    let systemResult = Object.entries(systemObj).sort((a, b) => { //sorted by amount of components and data in descending order
            return Object.entries(b[1]).length - Object.entries(a[1]).length || a[0].localeCompare(b[0]); //We first take coreA,coreB,coreC's length's) || (we take each name and compare it (Lamba, SULS, Indice)
        }) 
        .forEach(([dataName, components]) => {
            console.log(dataName); //Final dataName(data) component print

            Object.entries(components).sort((a, b) => { //sorted by amount of components and subcomponents in descending order
                    return b[1].length - a[1].length; //Components length check (ex: Home page, Login page, Register page)
                })
                .forEach(([comp, subComp]) => {
                    console.log(`|||${comp}`); //Final component print

                    subComp.forEach(subComponent => {
                        console.log(`|||||||${subComponent}`); //Final subcomponent print
                    });
                });
        });
};

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