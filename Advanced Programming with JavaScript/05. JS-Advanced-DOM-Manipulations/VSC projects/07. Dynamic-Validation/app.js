function validate() {

    let inputElementBox = document.getElementById("email");
    let validPattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

    inputElementBox.addEventListener("change", validationCheck); //"change", (e) => {

    function validationCheck() { //(e)
        let emailInput = this.value; // e.target.classList;

        if (validPattern.test(emailInput)) { //!validPattern.test(e.target.value) ? "error" : "";
            this.classList.remove("error");
        } else {
            this.classList.add("error");
        }
    }
}
