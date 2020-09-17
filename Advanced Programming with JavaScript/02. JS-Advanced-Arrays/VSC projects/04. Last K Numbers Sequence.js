function solve(n, k) {

    let arr = [1];

    for (let i = 1; i < n; i++) {
        let temp = Number(i - k);

        if (temp < 0) {
            temp = 0;
        }

        let sum = 0;

        arr.slice(temp, i).forEach(x => sum += x);
        arr.push(sum);
    }

    console.log(arr.join(" "));
}

solve(6, 3);