(() => {
    renderCatTemplate();

    function renderCatTemplate() {
        const domElements = {
            allCatsElement: document.getElementById("allCats"),
        };

        fetch("./cat-template.hbs")
            .then(jsonMiddleware)
            .then(data => {
                let template = Handlebars.compile(data);

                domElements.allCatsElement.innerHTML = "";
                domElements.allCatsElement.innerHTML = template({
                    cats
                });

                Array.from(domElements.allCatsElement.querySelectorAll(".showBtn"))
                    .map(button => button.addEventListener("click", showButton));
            })
            .catch(errorHandler);

        function showButton(e) {
            let currentSelectedButton = e.target;
            let status = currentSelectedButton.parentElement.querySelector("div.status");

            if (currentSelectedButton.innerHTML === "Show status code") {
                currentSelectedButton.innerHTML = "Hide status code";
                status.style.display = "block";
            } else {
                currentSelectedButton.innerHTML = "Show status code";
                status.style.display = "none"
            }
        }

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
    }
})();