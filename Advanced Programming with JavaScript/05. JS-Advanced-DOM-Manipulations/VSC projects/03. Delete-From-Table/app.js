function deleteByEmail() {

    let inputElement = document.getElementsByTagName("input")[0];
    let resultElement = document.getElementById("result");

    let rowElements = Array.from(document.getElementsByTagName("tr"));
    let tbody = document.getElementsByTagName("tbody")[0];

    for (const eachRow of rowElements) {
        let cellElements = Array.from(eachRow.querySelectorAll("td"));

        for (const eachCell of cellElements) {

            if (inputElement.value === eachCell.textContent) {
                tbody.removeChild(eachRow);
                resultElement.textContent = "Deleted.";

            } else {
                resultElement.textContent = "Not found.";
            }
        }
    }

    inputElement.value = "";
}