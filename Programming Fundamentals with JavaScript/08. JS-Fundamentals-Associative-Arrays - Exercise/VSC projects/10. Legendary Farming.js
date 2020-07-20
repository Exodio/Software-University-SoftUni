function solve(input) {

    let arrInput = input.split(" ");
    let materialObj = {};
    let keyMaterials = {
        shards: 0,
        fragments: 0,
        motes: 0,
    };
    let winningItem = "";

    for (let i = 0; i <= arrInput.length; i += 2) {
        let quantity = Number(arrInput[i]);
        let material = arrInput[i + 1].toLowerCase(); //all output should be lowercase, except the first letter of the legendary

        if (material === "shards" || material === "fragments" || material === "motes") {
            keyMaterials[material] += quantity;

            if (keyMaterials[material] >= 250 && material === "shards") {
                winningItem = "Shadowmourne";

                keyMaterials[material] -= 250;
                break;
            } else if (keyMaterials[material] >= 250 && material === "fragments") {
                winningItem = "Valanyr";

                keyMaterials[material] -= 250;
                break;
            } else if (keyMaterials[material] >= 250 && material === "motes") {
                winningItem = "Dragonwrath";

                keyMaterials[material] -= 250;
                break;
            }

        } else {

            if (!materialObj.hasOwnProperty(material)) {
                materialObj[material] = null; //0
            }

            materialObj[material] += quantity;
        }
    }


    console.log(`${winningItem} obtained!`);

    let keyMaterialsEntries = Object.entries(keyMaterials);
    let keyMaterialsSorted = keyMaterialsEntries.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])); //remaining key materials in descending order by quantity || If two key materials have the same quantity they are printed them in alphabetical order


    let otherMaterialObjEntries = Object.entries(materialObj);
    let otherMaterialObjSorted = otherMaterialObjEntries.sort((a, b) => a[0].localeCompare(b[0])); //the other material items in alphabetical order

    for (const kvpKey of keyMaterialsSorted) {
        console.log(`${kvpKey[0]}: ${kvpKey[1]}`);
    }

    for (const kvpOther of otherMaterialObjSorted) {
        console.log(`${kvpOther[0]}: ${kvpOther[1]}`);
    }
}

solve('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
//solve('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');