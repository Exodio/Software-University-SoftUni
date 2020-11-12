(function () {
    const domElements = {
        monkeysElement: document.querySelector("div.monkeys"),
    };

    fetch("./monkey-template.hbs")
        .then(jsonMiddleware)
        .then(data => {
            let template = Handlebars.compile(data);

            domElements.monkeysElement.innerHTML = "";
            domElements.monkeysElement.innerHTML = template({
                monkeys
            });

            Array.from(domElements.monkeysElement.querySelectorAll("button"))
                .map(button => button.addEventListener("click", infoButton));

            function infoButton(e) {
                let boxSelection = e.target;
                let boxInfo = boxSelection.parentNode.querySelector(".info");

                if (boxInfo.style.display === "none") {
                    boxInfo.style.display = "block";
                    boxSelection.innerHTML = "HIDE INFO";
                } else {
                    boxInfo.style.display = "none";
                    boxSelection.innerHTML = "INFO";
                }
            }
        }).
    catch(errorHandler);


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