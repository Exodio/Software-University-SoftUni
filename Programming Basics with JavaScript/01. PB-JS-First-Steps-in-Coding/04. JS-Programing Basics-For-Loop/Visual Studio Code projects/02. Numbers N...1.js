function reverseNumsFromNto1(input) {
    let number = Number(input.shift());

    for (let i = number; i > 0; i--) {
        console.log(i);

    }
}

reverseNumsFromNto1([
    "2"
]);