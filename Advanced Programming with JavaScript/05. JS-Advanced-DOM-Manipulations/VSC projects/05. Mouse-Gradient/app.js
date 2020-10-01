function attachGradientEvents() {

    let gradientElement = document.getElementById("gradient");
    let resultElement = document.getElementById("result");

    gradientElement.addEventListener("mousemove", mousePosition);
    gradientElement.addEventListener("mouseout", percentClear);

    function mousePosition(event) {
        let currentMouse = event.offsetX;
        let percentResult = Math.floor(currentMouse / this.clientWidth * 100);

        resultElement.textContent = percentResult + "%";
    }

    function percentClear() {
        resultElement.textContent = "";
    }
}