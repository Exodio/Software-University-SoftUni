function solve(name, lastName, hairColor) {
    let personDiscription = {};
    personDiscription.name = name;
    personDiscription.lastName = lastName;
    personDiscription.hairColor = hairColor;

    let personDiscriptionToJson = JSON.stringify(personDiscription);
    console.log(personDiscriptionToJson);

}
solve('George',
    'Jones',
    'Brown'
);