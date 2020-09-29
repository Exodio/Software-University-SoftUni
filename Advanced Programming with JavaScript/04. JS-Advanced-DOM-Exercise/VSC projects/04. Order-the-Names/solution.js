function solve() {

    let nameElementInput = document.getElementsByTagName("input")[0];
    let buttonElement = document.getElementsByTagName("button")[0];
    let listElement = document.getElementsByTagName("li");

    buttonElement.addEventListener("click", () => {

        let firstLetterName = nameElementInput.value[0].toUpperCase();
        let firstLetterNameIndex = Number(firstLetterName.charCodeAt()) - 65;
        
        let oldIndexValue = listElement[firstLetterNameIndex].innerHTML;
        let studentName = firstLetterName + nameElementInput.value.substring(1).toLowerCase();

        if (oldIndexValue === "") {
            listElement[firstLetterNameIndex].innerHTML = studentName;
        } else {
            listElement[firstLetterNameIndex].innerHTML += `, ${studentName}`;
        }

        nameElementInput.value = "";
    });
}