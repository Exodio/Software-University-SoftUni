function attachEvents() { //Exercise result 1

    const inputElement = document.getElementById("location");
    const weatherButtonElement = document.getElementById("submit");
    const forecastDivElement = document.getElementById("forecast");
    const currentDivElement = document.getElementById("current");
    const upcomingDivElement = document.getElementById("upcoming");
    const h1Element = document.getElementsByTagName("h1")[0];

    const conditionSymbols = {
        sunny: "☀", //&#x2600; 
        partlySunny: "⛅", //&#x26C5; 
        overcast: "☁", //&#x2601;
        rain: "☂", //&#x2614;
        degrees: "°", //&#176;
    };

    weatherButtonElement.addEventListener("click", () => {
        fetch("https://judgetests.firebaseio.com/locations.json")
            .then(responseCatch)
            .then((data) => {
                //initial data location code and location name
                Object.entries(data).forEach((arr) => {
                    let code = arr[1].code;
                    let name = arr[1].name;

                    if (name === inputElement.value) {
                        //visualize of the condition symbols
                        forecastDivElement.style.display = "block";

                        fetch(`https://judgetests.firebaseio.com/forecast/today/${code}.json`)
                            .then(responseCatch)
                            .then((data) => {
                                let name = data.name;
                                let condition = data.forecast.condition;
                                let high = data.forecast.high;
                                let low = data.forecast.low;
                                //forecasts div
                                const forecastsDiv = document.createElement("div");
                                forecastsDiv.className = "forecasts";
                                currentDivElement.appendChild(forecastsDiv);
                                //symbol span
                                let conditionSymbolSpan = document.createElement("span");
                                conditionSymbolSpan.className = "condition";
                                conditionSymbolSpan.className = "symbol";
                                if (condition === "Sunny") {
                                    conditionSymbolSpan.textContent = conditionSymbols.sunny;
                                } else if (condition === "Partly sunny") {
                                    conditionSymbolSpan.textContent =
                                        conditionSymbols.partlySunny;
                                } else if (condition === "Overcast") {
                                    conditionSymbolSpan.textContent = conditionSymbols.overcast;
                                } else if (condition === "Rain") {
                                    conditionSymbolSpan.textContent = conditionSymbols.rain;
                                }
                                forecastsDiv.appendChild(conditionSymbolSpan);
                                //condition span
                                let conditionSpan = document.createElement("span");
                                conditionSpan.className = "condition";
                                forecastsDiv.appendChild(conditionSpan);
                                //name span
                                let spanName = document.createElement("span");
                                spanName.className = "forecast-data";
                                spanName.textContent = name;
                                conditionSpan.appendChild(spanName);
                                //degrees span
                                let degreesSpan = document.createElement("span");
                                degreesSpan.className = "forecast-data";
                                degreesSpan.textContent = `${low}${conditionSymbols.degrees}/${high}${conditionSymbols.degrees}`;
                                conditionSpan.appendChild(degreesSpan);
                                //weather span
                                let weatherSpan = document.createElement("span");
                                weatherSpan.className = "forecast-data";
                                weatherSpan.textContent = condition;
                                conditionSpan.appendChild(weatherSpan);
                            })
                            .catch(errorCatch);

                        fetch(`https://judgetests.firebaseio.com/forecast/upcoming/${code}.json`)
                            .then(responseCatch)
                            .then((data) => {
                                //location name
                                let locationName = document.createElement("article");
                                locationName.textContent = name;
                                upcomingDivElement.appendChild(locationName);
                                //forecastInfo div
                                let forecastInfoDiv = document.createElement("div");
                                forecastInfoDiv.className = "forecast-info";
                                upcomingDivElement.appendChild(forecastInfoDiv);
                                //forecast temperatures data
                                Object.entries(data.forecast).forEach((arr) => {
                                    let condition = arr[1].condition;
                                    let high = arr[1].high;
                                    let low = arr[1].low;
                                    //upcoming span
                                    let upcomingSpan = document.createElement("span");
                                    upcomingSpan.className = "upcoming";
                                    forecastInfoDiv.appendChild(upcomingSpan);
                                    //condition symbol span
                                    let conditionSymbolSpan = document.createElement("span");
                                    conditionSymbolSpan.className = "symbol";
                                    if (condition === "Sunny") {
                                        conditionSymbolSpan.textContent = conditionSymbols.sunny;
                                    } else if (condition === "Partly sunny") {
                                        conditionSymbolSpan.textContent =
                                            conditionSymbols.partlySunny;
                                    } else if (condition === "Overcast") {
                                        conditionSymbolSpan.textContent = conditionSymbols.overcast;
                                    } else if (condition === "Rain") {
                                        conditionSymbolSpan.textContent = conditionSymbols.rain;
                                    }
                                    upcomingSpan.appendChild(conditionSymbolSpan);
                                    //degrees span
                                    let degreesSpan = document.createElement("span");
                                    degreesSpan.className = "forecast-data";
                                    degreesSpan.textContent = `${low}${conditionSymbols.degrees}/${high}${conditionSymbols.degrees}`;
                                    upcomingSpan.appendChild(degreesSpan);
                                    //weather span
                                    let weatherSpan = document.createElement("span");
                                    weatherSpan.className = "forecast-data";
                                    weatherSpan.textContent = condition;
                                    upcomingSpan.appendChild(weatherSpan);
                                });
                            })
                            .catch(errorCatch);
                    }
                });
            })
            .catch(errorCatch);
    });

    function errorCatch(e) {
        //if the data is not in the correct format
        h1Element.textContent = e.message;
    }

    function responseCatch(response) {
        //if the server doesn't respond
        if (response.status < 400) {
            return response.json();
        } else {
            throw response;
        }
    }
}

attachEvents();

// function attachEvents() { //Exercise result 2

//     let weatherButtonElement = document.getElementById("submit");
//     let locationNameElement = document.getElementById("location");
//     let forecastElement = document.getElementById("forecast");
//     let currentElement = document.getElementById("current");
//     let upcomingElement = document.getElementById("upcoming");

//     const conditionSymbols = {
//         "Sunny": "☀", //&#x2600; 
//         "Partly sunny": "⛅", //&#x26C5;
//         "Overcast": "☁", //&#x2601;
//         "Rain": "☂", //&#x2614;
//         "Degrees": "°", //&#176;
//     };

//     weatherButtonElement.addEventListener("click", () => {
//         //get the first response
//         fetch("https://judgetests.firebaseio.com/locations.json")
//             .then(response => response.json())
//             .then(data => {
//                 //get the current location by name which is equal to the input
//                 let {
//                     code,
//                 } = data.find(x => x.name === locationNameElement.value);
//                 //get the second response
//                 let currentWeather = fetch(`https://judgetests.firebaseio.com/forecast/today/${code}.json`)
//                     .then(response => response.json());
//                 //get the third response
//                 let upcomingWeather = fetch(`https://judgetests.firebaseio.com/forecast/upcoming/${code}.json`)
//                     .then(response => response.json());

//                 Promise //handles a result of two or more requests at once all of the promises is being fulfilled(resolved)
//                     .all([currentWeather, upcomingWeather])
//                     //select each piece of data for each promise data
//                     .then(([currentData, upcomingData]) => {
//                         forecastElement.style.display = "block"; //displays the current conditions
//                         //append the current conditions 
//                         let forecastsDiv = elCreate("div", "forecasts", "");

//                         let currentSymbol = currentData.forecast.condition;
//                         let currentDisplayedSymbol = conditionSymbols[currentSymbol];
//                         let conditionSymbolSpan = elCreate("span", "condition symbol", currentDisplayedSymbol);

//                         let conditionSpan = elCreate("span", "condition");

//                         let locatioName = currentData.name;
//                         let forecastLocationSpan = elCreate("span", "forecast-data", locatioName);

//                         let highLowData = `${currentData.forecast.low} ${conditionSymbols.Degrees}/${currentData.forecast.high}${conditionSymbols.Degrees}`;
//                         let highLowForecastSpan = elCreate("span", "forecast-data", highLowData);

//                         let currentForecastSymbol = currentData.forecast.condition;
//                         let forecastSymbolSpan = elCreate("span", "forecast-data", currentForecastSymbol);

//                         currentElement.appendChild(forecastsDiv);
//                         forecastsDiv.appendChild(conditionSymbolSpan);
//                         forecastsDiv.appendChild(conditionSpan);
//                         conditionSpan.appendChild(forecastLocationSpan);
//                         conditionSpan.appendChild(highLowForecastSpan);
//                         conditionSpan.appendChild(forecastSymbolSpan);


//                         //append the upcoming conditions 
//                         let upcomingForecastInfoDiv = elCreate("div", "forecast-info", "");
//                         //loop through the three response objects to gather the received data
//                         upcomingData.forecast.forEach(dataObj => {
//                             let upcomingSpan = elCreate("span", "upcoming", "");
//                             //reaching out to each forecast directly from the obj (upcomingData.forecast.condition => dataObj.condition)
//                             let upcomingSymbol = conditionSymbols[dataObj.condition];
//                             let upcomingSymbolSpan = elCreate("span", "symbol", upcomingSymbol);

//                             let upcomingHighLowData = `${dataObj.low} ${conditionSymbols.Degrees}/${dataObj.high}${conditionSymbols.Degrees}`;
//                             let upcomingHighLowForecastSpan = elCreate("span", "forecast-data", upcomingHighLowData);

//                             let upcomingCondition = dataObj.condition;
//                             let forecastUpcomingSpan = elCreate("span", "forecast-data", upcomingCondition);

//                             upcomingForecastInfoDiv.appendChild(upcomingSpan);
//                             upcomingSpan.appendChild(upcomingSymbolSpan);
//                             upcomingSpan.appendChild(upcomingHighLowForecastSpan);
//                             upcomingSpan.appendChild(forecastUpcomingSpan);
//                         });
//                         //append the new div with the looped new span elemnets to the upcoming div element section
//                         upcomingElement.appendChild(upcomingForecastInfoDiv);
//                     }).catch(errorCatch);
//             }).catch(errorCatch);
//     });

//     function elCreate(elementType, className, text, id) {
//         let element = document.createElement(elementType);

//         if (className) {
//             element.classList = className;
//         }

//         if (text) {
//             element.textContent = text;
//         }

//         if (id) {
//             element.id = id;
//         }

//         return element;
//     }

//     function errorCatch(e) {
//         //if the data is not in the correct format
//         h1Element.textContent = e.message;
//     }
// }
// attachEvents();