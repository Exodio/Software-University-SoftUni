function solve(firstName, lastName, age) {
    let person = {
        firstName: firstName, //First writing option for object method definition
    };

    person.lastName = lastName; //Second writing option for object method definition

    person["age"] = age; //Third writing option for object method definition

    for (let keyObject in person) {

        console.log(`${keyObject}: ${person[keyObject]}`);
    }

}
solve("Peter",
    "Pan",
    "20"
);