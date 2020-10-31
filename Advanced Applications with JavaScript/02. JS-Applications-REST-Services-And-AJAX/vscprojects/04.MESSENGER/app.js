function attachEvents() {
  //declare url data and button elements
  const messangerUrl = "https://rest-messanger.firebaseio.com/messanger.json";
  const submitButton = document.getElementById("submit");
  const refreshButton = document.getElementById("refresh");
  const messagesElement = document.getElementById("messages");
  //attach send button and functionality
  submitButton.addEventListener("click", () => {
    let name = document.getElementById("author");
    let message = document.getElementById("content");
    //attach data to post request method and an object with the received data
    fetch(messangerUrl, {
      method: "POST",
      body: JSON.stringify({
        author: name.value,
        content: message.value,
      }),
    });
    //clear data inputs
    author.value = "";
    content.value = "";
  });
  //attach refresh button and functionality
  refreshButton.addEventListener("click", () => {
    //get the url data
    fetch(messangerUrl)
      //convert the url to json
      .then((responsePromise) => responsePromise.json())
      //take each data value and save it in a messanger data value
      .then((resposeData) => {
        let messangerData = Object.values(resposeData).reduce(
          (messagesAcc, currMessage) =>
            (messagesAcc += `${currMessage.author}: ${currMessage.content}\n`),
          "");
        // append the received result text to the messages element
        messagesElement.textContent = messangerData;
      });
  });
}
attachEvents();
