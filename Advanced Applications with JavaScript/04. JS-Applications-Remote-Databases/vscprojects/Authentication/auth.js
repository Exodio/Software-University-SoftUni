document.getElementById("register-button")
    .addEventListener("click", registerUser)

document.getElementById("login-button")
    .addEventListener("click", loginUser)

document.getElementById("logout-button")
    .addEventListener("click", logoutUser)

function registerUser(e) {
    e.preventDefault();

    const emailInputElement = document.querySelector('#register-form input[name="useremail"]');
    const passwordInputElement = document.querySelector('#register-form input[name = "userpassword"]');

    if (emailInputElement.value !== "" && passwordInputElement.value.length >= 6) {
        firebase.auth().createUserWithEmailAndPassword(emailInputElement.value, passwordInputElement.value)
            .then(data => {
                console.log(data);
            })
            .catch(console.error);
    }
}

function loginUser(e) {
    e.preventDefault();

    const emailInputElement = document.querySelector('#login-form input[name="useremail"]');
    const passwordInputElement = document.querySelector('#login-form input[name = "userpassword"]');

    firebase.auth().signInWithEmailAndPassword(emailInputElement.value, passwordInputElement.value)
        .then(data => {
            console.log(data);
        })
        .catch(console.error);
}

function logoutUser() {
    firebase.auth().signOut()
        .then(() => {
            console.log("Sign-out successful");
        })
        .catch(console.error);

}