(function () {
    const domElements = {
        townInputElement: document.getElementById("towns"),
        loadButtonElement: document.getElementById("btnLoadTowns"),
        rootElement: document.getElementById("root"),
    };

    fetch("./towns-template.hbs")
        .then(jsonMiddleware)
        .then(data => {
            let template = Handlebars.compile(data);

            domElements.loadButtonElement.addEventListener("click", attachEvents);

            function attachEvents(e) {
                e.preventDefault();

                let towns = domElements.townInputElement.value
                    .split(", ")
                    .filter(x => x !== "");

                domElements.rootElement.innerHTML = template({
                    towns
                });

                domElements.townInputElement.value = "";
            }
        })
        .catch(errorHandler);

    function jsonMiddleware(response) {
        if (response.status >= 400) {
            throw (response);
        }
        return response.text();
    }

    function errorHandler(errorMessage) {
        if (errorMessage.message) {
            domElements.rootElement.innerHTML = `Error: ${errorMessage.message}`;
        } else {
            domElements.rootElement.innerHTML = `Error: ${errorMessage.status} (${errorMessage.statusText})`;
        }
    }
})();