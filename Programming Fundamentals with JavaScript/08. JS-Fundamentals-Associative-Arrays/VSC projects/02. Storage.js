function solve(input) {
    let storageList = new Map();
    
    input.forEach(arrInput => {
        let [item, quantity] = arrInput.split(" ");
        quantity = Number(quantity);

        if (storageList.has(item)) {
            let oldQuantity = storageList.get(item);
            storageList.set(item, oldQuantity + quantity);
        } else {
            storageList.set(item, quantity);
        }
    });

    for (const key of storageList.keys()) {
        console.log(`${key} -> ${storageList.get(key)}`);
    }

}
solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
]);