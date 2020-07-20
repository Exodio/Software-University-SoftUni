function solve(n, k) {
    let result = [1]; //We need to start from the first element as per ex. requirements 

    for (let i = 1; i < n; i++) {
        let nextElement = 0; //Here we save the next element output once being received

        let initialIndex = Math.max(result.length - k, 0); //We make sure that the initial index will never be a negative number, otherwise we will have more than needed loops
        for (let j = initialIndex; j < result.length; j++) {
            nextElement += result[j];
        }
        result.push(nextElement);

    }
    console.log(result.join(" "));

}
solve(6, 3);

// function solve(n, k) {
//     let result = [1]; 

//     for (let i = 1; i < n; i++) { 
//         let current = result.slice(k * -1).reduce((a, b) => a + b); //We slice the index from k of th arr, and by reduce we combine each element inside without going through for loop as shown above. Be informed that (a) will be the place where we store the result of each of the elements and (b) will be our current element 
//         result[i] = current;
//     }
//     console.log(result.join(" "));

// }
// solve(6, 3);