function calorieObject(input) {

    let calorieObj = {};
    
    for (let i = 0; i < input.length; i += 2) {
        calorieObj[input[i]] = Number(input[i + 1]);
    }

    console.log(calorieObj);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);