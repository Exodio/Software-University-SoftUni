function solve(arrInput) {
    arrInput.sort(caseIntensitiveCompare);
    function caseIntensitiveCompare(currentElement, nextElement) {

        if (currentElement.length > nextElement.length) {
            return 1;
        } else if (currentElement.length < nextElement.length) {
            return -1;
        } else {
            return currentElement.localeCompare(nextElement);
        }
    }
    console.log(arrInput.join("\n"));

}
solve(["alpha", "beta", "gamma"]);