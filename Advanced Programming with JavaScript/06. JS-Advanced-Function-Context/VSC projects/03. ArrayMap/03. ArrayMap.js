function reduceFunction(arr, func) {

    return arr.reduce((acc, el) => {
        return acc.concat(func(el))
    }, []);
}

let calcFunction = (x) => x * 2; // function calcFunction(x) {return x * 2};

console.log(reduceFunction([1, 2, 3, 4], calcFunction));