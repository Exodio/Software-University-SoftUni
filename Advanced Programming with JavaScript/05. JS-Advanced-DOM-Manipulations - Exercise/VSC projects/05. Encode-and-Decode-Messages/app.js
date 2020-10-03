function encodeAndDecodeMessages() {

    let encodeButton = document.querySelectorAll("button")[0];
    let textInput = document.querySelectorAll("textarea")[0];

    let decodeButton = document.querySelectorAll("button")[1];
    let textOutput = document.querySelectorAll("textarea")[1];

    encodeButton.addEventListener("click", messageEncoding);
    decodeButton.addEventListener("click", messageDecoding);

    function messageEncoding() {
        let message = textInput.value;
        let encode = "";

        for (let i = 0; i < message.length; i++) {
            encode += String.fromCharCode(asciiMessageNumber(`${message[i]}`) + 1); //ascii convertion + 1
        }

        textInput.value = "";
        textOutput.value = encode;
    }

    function messageDecoding() {
        let message = textOutput.value;
        let decode = "";

        for (let i = 0; i < message.length; i++) {
            decode += String.fromCharCode(asciiMessageNumber(`${message[i]}`) - 1);
        }

        textOutput.value = decode;
    }

    function asciiMessageNumber(currentChar) { //Changes every single char from the current ascii convertion to the current ASCII number, that represents the current character in the messsage[i]
        return currentChar.charCodeAt();
    }
}