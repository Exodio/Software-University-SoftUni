function topInteger(arrInput) {
    result = [];  //If we use the second option below it needs to be a "";
    
    for (let i = 0; i < arrInput.length; i++) {
        let eachElement = arrInput[i];
        let isBiggerEnough = true;

        for (let j = i + 1; j < arrInput.length; j++) {
            let nextElement = arrInput[j];
            if (eachElement <= nextElement) {
                isBiggerEnough = false;
                break;
            }
        }
        if (isBiggerEnough) {
            result.push(eachElement); //result += `${eachElement} `;
        }
    }
    console.log(result.join(' ')); //console.log(result);
}
topInteger([1, 4, 3, 2]);