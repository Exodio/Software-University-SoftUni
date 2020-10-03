function solve() {

    let buttonElements = document.getElementsByTagName("button");
    let quickCheckButtonElement = buttonElements[0];
    let clearButtonElement = buttonElements[1];

    quickCheckButtonElement.addEventListener("click", quickCheckHandler);
    clearButtonElement.addEventListener("click", clearHandler);

    function quickCheckHandler() {

        let inputElements = Array.from(document.getElementsByTagName("input"));

        for (let i = 0; i < inputElements.length; i++) {

            if (!checkElement(i, inputElements)) {

                failOutputHandler();
                return;
            }
        }

        successOutputHandler();
    }

    function checkElement(i, inputElements) {

        let currentElement = inputElements[i].value;
        inputElements[i] = "0";

        if (currentElement < 1 || currentElement > 3) {
            console.log("5");

            return false;
        }

        if (i % 3 === 0) {

            if (currentElement === inputElements[0].value ||
                currentElement === inputElements[3].value ||
                currentElement === inputElements[6].value ||
                currentElement === inputElements[i + 1].value ||
                currentElement === inputElements[i + 2].value) {

                console.log("0");
                console.log(i);
                console.log(currentElement);
                console.log(inputElements[i + 1].value);

                return false;
            }
        }

        if (i % 3 === 1) {

            if (currentElement === inputElements[1].value ||
                currentElement === inputElements[4].value ||
                currentElement === inputElements[7].value ||
                currentElement === inputElements[i + 1].value ||
                currentElement === inputElements[i - 1].value) {

                console.log("1");

                return false;
            }
        }

        if (i % 3 === 2) {
            if (currentElement === inputElements[2].value ||
                currentElement === inputElements[5].value ||
                currentElement === inputElements[8].value ||
                currentElement === inputElements[i - 1].value ||
                currentElement === inputElements[i - 2].value) {

                console.log("2");

                return false;
            }
        }

        return true;
    }

    function failOutputHandler() {

        let tableElement = document.getElementsByTagName("table")[0];
        tableElement.style.border = "2px solid red";

        let resultElement = document.querySelector("#check p");
        resultElement.textContent = "NOP! You are not done yet...";
        resultElement.style.color = "red";
    }

    function successOutputHandler() {

        let tableElement = document.getElementsByTagName("table")[0];
        tableElement.style.border = "2px solid green";

        let resultElement = document.querySelector("#check p");
        resultElement.textContent = "You solve it! Congratulations!";
        resultElement.style.color = "green";
    }

    function clearHandler() {

        let inputElements = Array.from(document.getElementsByTagName("input"));
        inputElements.forEach(e => e.value = "");

        let tableElement = document.getElementsByTagName("table")[0];
        let resultElement = document.querySelector("#check p");

        tableElement.style.border = "";
        resultElement.textContent = "";
        resultElement.style.color = "";
    }
}