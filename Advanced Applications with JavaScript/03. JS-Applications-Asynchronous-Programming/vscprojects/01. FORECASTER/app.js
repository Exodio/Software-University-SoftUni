// function attachEvents() { //Exercise result 1

//     let inputElement = document.getElementById("location");
//     let weatherButtonElement = document.getElementById("submit");
//     let forecastDivElement = document.getElementById("forecast");
//     let currentDivElement = document.getElementById("current");
//     let upcomingDivElement = document.getElementById("upcoming");
//     let h1Element = document.getElementsByTagName("h1")[0];
//     const conditionSymbols = {
//       sunny: "☀", //&#x2600; 
//       partlySunny: "⛅", //&#x26C5; 
//       overcast: "☁", //&#x2601;
//       rain: "☂", //&#x2614;
//       degrees: "°", //&#176;
//     };

//     weatherButtonElement.addEventListener("click", () => {
//       fetch("https://judgetests.firebaseio.com/locations.json")
//         .then(resValidator)
//         .then((data) => {
//           //initial data location code and location name
//           Object.entries(data).forEach((arr) => {
//             let code = arr[1].code;
//             let name = arr[1].name;
//             if (name === inputElement.value) {
//               //visualization of the condition symbols
//               forecastDivElement.style.display = "block";

//               fetch(`https://judgetests.firebaseio.com/forecast/today/${code}.json`)
//                 .then(resValidator)
//                 .then((data) => {
//                   let name = data.name;
//                   let condition = data.forecast.condition;
//                   let high = data.forecast.high;
//                   let low = data.forecast.low;
//                   //forecasts div
//                   let forecastsDiv = document.createElement("div");
//                   forecastsDiv.className = "forecasts";
//                   currentDivElement.appendChild(forecastsDiv);
//                   //symbol span
//                   let conditionSymbolSpan = document.createElement("span");
//                   conditionSymbolSpan.className = "condition";
//                   conditionSymbolSpan.className = "symbol";
//                   if (condition === "Sunny") {
//                     conditionSymbolSpan.textContent = conditionSymbols.sunny;
//                   } else if (condition === "Partly sunny") {
//                     conditionSymbolSpan.textContent =
//                       conditionSymbols.partlySunny;
//                   } else if (condition === "Overcast") {
//                     conditionSymbolSpan.textContent = conditionSymbols.overcast;
//                   } else if (condition === "Rain") {
//                     conditionSymbolSpan.textContent = conditionSymbols.rain;
//                   }
//                   forecastsDiv.appendChild(conditionSymbolSpan);
//                   //condition span
//                   let conditionSpan = document.createElement("span");
//                   conditionSpan.className = "condition";
//                   forecastsDiv.appendChild(conditionSpan);
//                   //name span
//                   let spanName = document.createElement("span");
//                   spanName.className = "forecast-data";
//                   spanName.textContent = name;
//                   conditionSpan.appendChild(spanName);
//                   //degrees span
//                   let degreesSpan = document.createElement("span");
//                   degreesSpan.className = "forecast-data";
//                   degreesSpan.textContent = `${low}${conditionSymbols.degrees}/${high}${conditionSymbols.degrees}`;
//                   conditionSpan.appendChild(degreesSpan);
//                   //weather span
//                   let weatherSpan = document.createElement("span");
//                   weatherSpan.className = "forecast-data";
//                   weatherSpan.textContent = condition;
//                   conditionSpan.appendChild(weatherSpan);
//                 })
//                 .catch(errHandler);

//               fetch(`https://judgetests.firebaseio.com/forecast/upcoming/${code}.json`)
//                 .then(resValidator)
//                 .then((data) => {
//                   //location name
//                   let locationName = document.createElement("article");
//                   locationName.textContent = name;
//                   upcomingDivElement.appendChild(locationName);
//                   //forecastInfo div
//                   let forecastInfoDiv = document.createElement("div");
//                   forecastInfoDiv.className = "forecast-info";
//                   upcomingDivElement.appendChild(forecastInfoDiv);
//                   //forecast temperatures data
//                   Object.entries(data.forecast).forEach((arr) => {
//                     let condition = arr[1].condition;
//                     let high = arr[1].high;
//                     let low = arr[1].low;

//                     //upcoming span
//                     let upcomingSpan = document.createElement("span");
//                     upcomingSpan.className = "upcoming";
//                     forecastInfoDiv.appendChild(upcomingSpan);
//                     //condition symbol span
//                     let conditionSymbolSpan = document.createElement("span");
//                     conditionSymbolSpan.className = "symbol";
//                     if (condition === "Sunny") {
//                       conditionSymbolSpan.textContent = conditionSymbols.sunny;
//                     } else if (condition === "Partly sunny") {
//                       conditionSymbolSpan.textContent =
//                         conditionSymbols.partlySunny;
//                     } else if (condition === "Overcast") {
//                       conditionSymbolSpan.textContent = conditionSymbols.overcast;
//                     } else if (condition === "Rain") {
//                       conditionSymbolSpan.textContent = conditionSymbols.rain;
//                     }
//                     upcomingSpan.appendChild(conditionSymbolSpan);
//                     //degrees span
//                     let degreesSpan = document.createElement("span");
//                     degreesSpan.className = "forecast-data";
//                     degreesSpan.textContent = `${low}${conditionSymbols.degrees}/${high}${conditionSymbols.degrees}`;
//                     upcomingSpan.appendChild(degreesSpan);
//                     //weather span
//                     let weatherSpan = document.createElement("span");
//                     weatherSpan.className = "forecast-data";
//                     weatherSpan.textContent = condition;
//                     upcomingSpan.appendChild(weatherSpan);
//                   });
//                 })
//                 .catch(errHandler);
//             }
//           });
//         })
//         .catch(errHandler);
//     });

//     function errHandler(e) {
//       //if the data is not in the correct format
//       h1Element.textContent = e.message;
//     }

//     function resValidator(response) {
//       //if the server doesn't respond
//       if (response.status < 400) {
//         return response.json();
//       } else {
//         throw response;
//       }
//     }
//   }

//   attachEvents();


function attachEvents() { //Exercise result 2

    let weatherButtonElement = document.getElementById("submit");
    let locationNameElement = document.getElementById("location");
    let forecastElement = document.getElementById("forecast");
    let currentElement = document.getElementById("current");
    let upcomingElement = document.getElementById("upcoming");

    const conditionSymbols = {
        Sunny: "☀", //&#x2600; 
        PartlySunny: "⛅", //&#x26C5; 
        Overcast: "☁", //&#x2601;
        Rain: "☂", //&#x2614;
        Degrees: "°", //&#176;
    };

    weatherButtonElement.addEventListener("click", () => {
        //get the first response
        fetch("https://judgetests.firebaseio.com/locations.json")
            .then(response => response.json())
            .then(data => {
                //get the current location by name which is equal to the input
                let {
                    code,
                } = data.find(x => x.name === locationNameElement.value);
                //get the second response
                let currentWeather = fetch(`https://judgetests.firebaseio.com/forecast/today/${code}.json`)
                    .then(response => response.json());
                //get the third response
                let upcomingWeather = fetch(`https://judgetests.firebaseio.com/forecast/upcoming/${code}.json`)
                    .then(response => response.json());

                Promise //handles a result of two or more requests at once all of the promises is being fulfilled(resolved)
                    .all([currentWeather, upcomingWeather])
                    //select each piece of data for each promise data
                    .then(([currentData, upcomingData]) => {
                        let forecastsDiv = elementValidator("div", "forecasts", "");

                        let currentSymbol = currentData.forecast.condition;
                        let currentDisplayedSymbol = conditionSymbols[currentSymbol];
                        let conditionSymbolSpan = elementValidator("span", "condition symbol", currentDisplayedSymbol);

                        let conditionSpan = elementValidator("span", "condition");

                        let locatioName = currentData.name;
                        let forecastLocationSpan = elementValidator("span", "forecast-data", locatioName);

                        let highLowData = `${currentData.forecast.low} ${conditionSymbols.Degrees}/${currentData.forecast.high}${conditionSymbols.Degrees}`;
                        let highLowForecastSpan = elementValidator("span", "forecast-data", highLowData);

                        let forecastSymbolSpan = elementValidator("span", "forecast-data", currentForecastSymbol);

                        currentElement.appendChild(forecastsDiv);
                        forecastsDiv.appendChild(conditionSymbolSpan);
                        forecastsDiv.appendChild(conditionSpan);
                        forecastsDiv.appendChild(forecastLocationSpan);
                        forecastsDiv.appendChild(highLowForecastSpan);
                        forecastsDiv.appendChild(forecastSymbolSpan);


                        forecastElement.style.display = "block"; //displays the selected element symbol
                    });
            });
    });

    function elementValidator(elementType, className, text, id) {
        let element = document.createElement(elementType);

        if (className) {
            element.classList = className;
        }

        if (text) {
            element.textContent = text;
        }

        if (id) {
            element.id = id;
        }

        return element;
    }
}
attachEvents();