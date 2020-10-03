// function lockedProfile() {

//     let buttonElement = Array.from(document.getElementsByTagName("button"));

//     buttonElement.forEach(button => {
//         button.addEventListener("click", (e) => {
//             let hiddenInfo = e.currentTarget.parentNode.children[9];
//             let lock = e.currentTarget.parentNode.children[2];

//             if (lock.checked === false && button.textContent === "Show more") {
//                 hiddenInfo.style.display = "block";
//                 button.textContent = "Hide it";
//             } else if (lock.checked === false && button.textContent === "Hide it") {
//                 hiddenInfo.style.display = "none";
//                 button.textContent = "Show more";
//             }
//         });
//     });
// }

function lockedProfile() {

    let buttonElement = Array.from(document.getElementsByClassName("profile"));
    buttonElement.forEach(parent => {
        let buttonSelector = parent.querySelectorAll("button")[0];
        buttonSelector.addEventListener("click", () => {
            let unlocked = parent.querySelectorAll("input")[1].checked; //checked- reviews if we have selected the button
            let hidden = parent.querySelectorAll("div")[0];

            if (unlocked) {
                if (buttonSelector.textContent === "Show more") {
                    hidden.style.display = "block";
                    buttonElement.textContent = "Hide it";
                } else if (buttonSelector.textContent === "Hide it") {
                    hidden.style.display = "none";
                    buttonElement.textContent = "Show more";
                }
            }
        });
    });
}