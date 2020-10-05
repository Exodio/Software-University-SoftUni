function solve(target, method) {

    let originalFunction = target[method];
    let result = { //using an object to pass info by reference
        count: 0,
    };

    target[method] = function () { //we replace the method with a spy method
        result.count++; //track function was called

        return originalFunction.apply(this, arguments); //invoking of the original function
    }
    return result; //we return the result after the count has been updated
}