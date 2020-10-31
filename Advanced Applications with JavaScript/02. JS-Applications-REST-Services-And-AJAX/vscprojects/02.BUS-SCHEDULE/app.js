function solve() {
  //get the required elements
  let infoClassElement = document.getElementsByClassName("info")[0];
  let departButton = document.getElementById("depart");
  let arriveButton = document.getElementById("arrive");
  //set an initial starting id and next name depending on the url
  let currentId = "depot";
  let nextName;

  function depart() {
    //get current url of listed stop
    const urlCurrentStop = `https://judgetests.firebaseio.com/schedule/${currentId}.json`;
    //check current data and override if depart button is clicked
    fetch(urlCurrentStop)
      .then((responsePromise) => responsePromise.json())
      .then((responseData) => {
        let name = responseData.name;
        let next = responseData.next;
        currentId = next;
        nextName = name;

        infoClassElement.textContent = `Next stop ${nextName}`;
        departButton.disabled = true;
        arriveButton.disabled = false;
      }) // try catch if the url is incorrect
      .catch(() => {
        infoClassElement.textContent = "Error";
        arriveButton.disabled = true;
        departButton.disabled = true;
      });
  }
  //check current data and ovveride if arrive button is clicked
  function arrive() {
    infoClassElement.textContent = `Arriving at ${nextName}`;
    departButton.disabled = false;
    arriveButton.disabled = true;
  }
  //return function results
  return {
    depart,
    arrive,
  };
}

let result = solve();
