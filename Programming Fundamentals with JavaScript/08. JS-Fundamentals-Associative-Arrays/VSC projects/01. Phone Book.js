function solve(input) {
    let contactList = {};

    for (const arr of input) {
        let [name, phone] = arr.split(" ");
        contactList[name] = phone;
    }

    Object.keys(contactList).forEach(key => {
        console.log(`${key} -> ${contactList[key]}`);
    });

}
solve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344',
]);