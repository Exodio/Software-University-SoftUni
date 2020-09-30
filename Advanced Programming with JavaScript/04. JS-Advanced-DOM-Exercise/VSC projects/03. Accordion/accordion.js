// function toggle() {

//     let buttonElement = document.getElementsByClassName("button")[0];
//     let contentElement = document.getElementById("extra");
//     let display;
//     let textContent;

//     if (contentElement.style.display !== "block") {
//         [display, textContent] = ["block", "Less"];
//     } else {
//         [display, textContent] = ["none", "More"];
//     }

//     [contentElement.style.display, buttonElement.textContent] = [display, textContent];
// }

function toggle() {

    let buttonElement = document.getElementsByClassName("button")[0];
    let contentElement = document.getElementById("extra");

    if (buttonElement.textContent === "More") { //textInput === innerText!
        contentElement.style.display === "block";
        buttonElement.textContent = "Less"; //buttonElement.innerText = "Less" or buttonElement.innerHTML = "Less";
    } else {
        buttonElement.textContent = "More";
        contentElement.style.display === "none"; //  === "";
    }
}