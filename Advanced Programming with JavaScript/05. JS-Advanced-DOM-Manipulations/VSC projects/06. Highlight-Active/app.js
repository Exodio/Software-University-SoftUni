function focus() {

    let divElements = Array.from(document.getElementsByTagName("div")[0].children);

    divElements.forEach(divRow => divRow.lastElementChild.addEventListener("focus", focusCheck));

    function focusCheck() {
        let currentDivSelection = this.parentElement;

        for (const divRow of divElements) {

            if (divRow !== currentDivSelection) {
                divRow.classList.remove("focused");
            } else {
                currentDivSelection.classList.add("focused");
            }
        }
    }
}