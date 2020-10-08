function solution(number) {

    return function (add) {
        return number + add;
    }
}

//input
let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));

//output
//7
//8