function wordsUppercase(input) {

    let pattern = /\w+/g; //We look only for words in the sentence and we ignore all delimeters such as ",", " ", "!", "?" and so on.
    let match = input.match(pattern); //We validate if the input fits the pattern rules 

    if (match) { //If the result fits the rules
        let wordToUpper = match.map((word) => word.toUpperCase()); //We take each individual word and we map it to an upper case
        console.log(wordToUpper.join(", ")); //If we use for of loop we will get each element saparated by , and not each word, so that is why we use map instead!
    }
}

wordsUppercase('Hi, how are you?');