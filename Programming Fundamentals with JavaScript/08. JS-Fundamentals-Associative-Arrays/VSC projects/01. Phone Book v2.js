function solve(input) {
    let contactList = {};

    for (const arrInput of input) {
        let tokens = arrInput.split(" ");
        let name = tokens[0];
        let phone = tokens[1];

        contactList[name] = phone; //rewrites it's existing key (Exercise req: If you receive the same name twice just replace the number).
    }

    for (const key in contactList) {
        console.log(`${key} -> ${contactList[key]}`);
    }

}
solve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344',
]);