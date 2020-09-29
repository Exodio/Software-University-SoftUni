function solve() {

   let inputElement = document.getElementById("chat_input");
   let chatElement = document.getElementById("chat_messages");
   let buttonElement = document.getElementById("send");


   buttonElement.addEventListener("click", () => {

      let myMessageElement = document.createElement("div");
      myMessageElement.innerHTML = inputElement.value;
      myMessageElement.classList.add("message", "my-message");
      chatElement.appendChild(myMessageElement);

      inputElement.value = "";
   });
}