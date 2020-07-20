function solve(n) {
    
    for (let rows = 1; rows <= n; rows++) {
        let sumOfRows = "";

        for (let columns = 1; columns <= rows; columns++) {
            sumOfRows += rows + " ";
        }

        console.log(sumOfRows);
    }

}
solve(3);

// function solve(n) {    //Pyramid type 1

//     let temp = "";

//     for (let i = 1; i <= n; i++) {
//         temp += i + " ";
//         console.log(temp);   
//     } 
// }
// solve(3);