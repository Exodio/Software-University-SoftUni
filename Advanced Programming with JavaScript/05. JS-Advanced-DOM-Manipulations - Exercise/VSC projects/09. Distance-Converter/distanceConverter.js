function attachEventsListeners() {

    let inputDistanceElement = document.getElementById("inputDistance");
    let inputUnitsElement = document.getElementById("inputUnits");

    let outputDistanceElement = document.getElementById("outputDistance");
    let outputUnitsElement = document.getElementById("outputUnits");

    let convertionRates = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    }

    let convertButtonElement = document.getElementById("convert");
    convertButtonElement.addEventListener("click", distanceConvertion);

    function distanceConvertion() {

        let incomingDistance = inputDistanceElement.value;

        if (incomingDistance === "") {
            return;
        }

        incomingDistance = Number(incomingDistance);

        if (isNaN(incomingDistance)) {
            return;
        }


        let fromValue = convertionRates[inputUnitsElement.value];
        let toValue = convertionRates[outputUnitsElement.value];

        if (!fromValue || !toValue) {
            return;
        }

        let outputResult = (incomingDistance * fromValue) / toValue;

        outputDistanceElement.value = outputResult;
    }
}