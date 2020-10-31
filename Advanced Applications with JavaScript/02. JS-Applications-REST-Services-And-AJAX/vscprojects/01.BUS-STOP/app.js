function getInfo() {
  //get all needed inputs
  let stopIdInputElement = document.getElementById("stopId");
  let stopNameDivElement = document.getElementById("stopName");
  let stopNameUlElement = document.getElementById("buses");
  // list all available data
  const validIds = ["1287", "1308", "1327", "2334"];
  const urlRequest = `https://judgetests.firebaseio.com/businfo/${stopIdInputElement.value}.json`;
  // set exceptions 
  if (!validIds.includes(stopIdInputElement.value)) {
    stopNameDivElement.textContent = "Error";
    //clear input from previous data checks in the list
    stopNameUlElement.textContent = "";
    return;
  }
  //fetch and manipulate the response data
  fetch(urlRequest)
    .then((responsePromise) => responsePromise.json())
    .then((responseData) => {
      stopNameDivElement.textContent = responseData.name;
      //append result to a new li element as you loop the response data
      Object.entries(responseData.buses).forEach((kvp) => {
        let liBusElement = document.createElement("li");
        liBusElement.textContent = `Bus ${kvp[0]} arrives in ${kvp[1]} minutes`;
        stopNameUlElement.appendChild(liBusElement);
      });
    });
  //clear input from initial input
  stopIdInputElement.value = "";
}
