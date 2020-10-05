function solve() {

    let dropdownUlElement = document.getElementById("dropdown-ul");
    let boxElement = document.getElementById("box");

    document.getElementById("dropdown").addEventListener("click", () => {
        let displayStyle = dropdownUlElement.style.display === "block" ? "none" : "block";
        dropdownUlElement.style.display = displayStyle;

        if (displayStyle === "none") {
            boxElement.style.backgroundColor = "black";
            boxElement.style.color = "white";
        }
    });

    let liElement = Array.from(dropdownUlElement.querySelectorAll("li"));
    liElement.forEach((listItem) => {
        listItem.addEventListener("click", () => {
            boxElement.style.backgroundColor = listItem.textContent;
            boxElement.style.color = "black";
        });
    });
}